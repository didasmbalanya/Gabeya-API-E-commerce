import database from '../../database';
import CartItem from '../../database/models/cartItem';
import { BaseService } from '../../service/base.service';

class CartItemService extends BaseService<CartItem, number> {
  constructor(model = database.getRepository(CartItem)) {
    super(model)
  }
}

export default new CartItemService();
