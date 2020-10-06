import database from '../../database';
import Cart from '../../database/models/cart';
import { BaseService } from '../../service/base.service';

class CartService extends BaseService<Cart, number> {
  constructor(model = database.getRepository(Cart)) {
    super(model)
  }
}

export default new CartService();
