import { RequestHandler } from 'express';
import userService from './user.service';

/**
 * @function register used as a request handler for registering a user
 * @param req
 * @param res
 * @param next
 */
export const register: RequestHandler = async (req, res, next) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    const user = await userService.add({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    res.send({
      user,
    });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};
