import { Request, Response, NextFunction, RequestHandler } from 'express';
import { hashCompare, hashFunc, jwtSignAccess } from '../../utils/authUtils';
import userService from './user.service';

/**
 * @function register used as a request handler for registering a user
 * @param req
 * @param res
 * @param next
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  const hashedPassword = hashFunc(password);

  try {
    const user = await userService.add({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const { password, ...publicUserData } = user!;

    res.send({
      user: publicUserData,
    });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};

/**
 * @function login used as a request handler for granting token to a user
 * @param req
 * @param res
 * @param next
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const foundUser = await userService.findOne({
      where: {
        email,
      },
    });

    // if no user exists
    if (!foundUser) {
      return res.status(401).send({
        error: {
          message: 'invalid credentials',
        },
      });
    }

    // if user exists check password
    const validPass = hashCompare(password, foundUser.password);
    if (!validPass) {
      return res.status(401).send({
        error: {
          message: 'invalid credentials',
        },
      });
    }

    // user is valid
    const token = jwtSignAccess(foundUser.id);

    return res.status(200).send({
      accessToken: token,
      userId: foundUser.id,
    });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};
