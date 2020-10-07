import { Repository, Model } from 'sequelize-typescript';
import {
  Includeable,
  FindOptions,
  Transaction,
  WhereOptions,
} from 'sequelize/types';

export class BaseService<T extends Model<T>, TId extends number> {
  constructor(public model: Repository<T>) {}

  /**
   * @method findById used to find one item using the property ID
   * @param id
   * @param include loading more associations
   * @param attributes To select only some attributes
   */
  findById = async (
    id: TId,
    include?: Includeable[],
    attributes?: string[]
  ): Promise<T | null> => {
    const result = await this.model.findByPk(id, { include, attributes });
    return result ? (result.get({ plain: true }) as T) : null;
  };

  /**
   * @method update update entity by ID
   * @param id
   * @param data data to update
   */
  async update(id: TId | string | number, data: any) {
    const result = await this.model.update(
      { ...data },
      {
        where: { id },
      }
    );

    return !!result[0];
  }

  /**
   * @method add create an entity based on the model
   * @param model
   * @param t
   */
  add = async <TInterface extends Record<string, any>>(
    model: TInterface,
    t?: Transaction
  ) => {
    const result = await this.model.create(model, { transaction: t });
    return result ? (result.get({ plain: true }) as T) : null;
  };

  /**
   * @method findAll search for many entities using specific options
   * @param options
   * @returns many entities using specific options
   */
  findAll = async (options?: FindOptions): Promise<T[]> => {
    const result = await this.model.findAll<T>(options);
    return result.map((e) => e.get({ plain: true })) as T[];
  };

  /**
   * @method findOne search for one entity using specific options
   * @param options
   * @returns one entities using specific options
   */
  findOne = async (options?: FindOptions): Promise<T | null> => {
    const result = await this.model.findOne<T>(options);
    return result ? (result.get({ plain: true }) as T) : null;
  };

  /**
   * @method findAndCountAll used to get pagined data
   * @param options
   * @returns {object} paginted data
   */
  findAndCountAllOrderedByPrice = async (options: IFindAllPagination) => {
    const { limit, requestedPage, include, where, orderDirection } = options;
    const count = await this.model.count({ where });
    const totalPages = Math.ceil(count / limit) || 1;
    const page = this.getValidPageNumber(requestedPage, totalPages);
    const offset = (page - 1) * limit;
    const { rows } = await this.model.findAndCountAll({
      offset,
      limit,
      include,
      where,
      order: [['price', orderDirection]],
    });
    const data = rows.map((entry) => entry.get() as T);
    return { pageMeta: { count, totalPages, page, limit }, data };
  };

  /**
   * @method delete
   * @param id
   */
  async delete(id: any) {
    return await this.model.destroy({
      where: { id },
    });
  }

  /**
   * @method getValidPageNumber calculates for valid page numbers or returns max/min
   * @param page
   * @param totalPages
   */
  protected getValidPageNumber(page: number, totalPages: number) {
    let thePage = page || 1;
    thePage = thePage > totalPages ? totalPages : thePage <= 0 ? 1 : thePage;
    return thePage;
  }
}

export interface IFindAllPagination {
  limit: number;
  requestedPage: number;
  include?: Includeable[];
  where?: WhereOptions;
  orderDirection: 'ASC' | 'DESC';
}
