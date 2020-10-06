import database from '../../database';
import Item from '../../database/models/item';
import { BaseService } from '../../service/base.service';

class ItemService extends BaseService<Item, number> {
  constructor(model = database.getRepository(Item)) {
    super(model);
  }
}

export default new ItemService();
