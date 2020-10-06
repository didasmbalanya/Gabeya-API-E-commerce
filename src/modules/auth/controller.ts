import { RequestHandler } from 'express';
import userService from './user.service';

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
