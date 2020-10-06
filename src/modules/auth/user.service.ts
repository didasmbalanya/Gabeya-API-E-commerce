import database from '../../database';
import User from '../../database/models/user';
import { BaseService } from '../../service/base.service';

class UserService extends BaseService<User, number> {
  constructor(model = database.getRepository(User)) {
    super(model)
  }
}

export default new UserService();
