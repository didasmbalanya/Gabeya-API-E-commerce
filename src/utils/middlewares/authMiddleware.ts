import { RequestHandler } from 'express';
import userService from '../../modules/auth/user.service';

import { jwtVerify } from '../authUtils';

import { notAuthenticated, invalidToken } from '../constants';

// to set up later
// service for querying users

/**
 * @function auth Auth middleware for authentication requests
 * @param req
 * @param res
 * @param next
 */
export const auth: RequestHandler = async (req, res, next) => {
  try {
    // check if endpoint has auth headers
    const { authorization } = req.headers;
    if (!authorization) {
      throw Error(notAuthenticated);
    }
    // split token from Bearer outh2.0 standard
    const token = authorization.split(' ').pop();

    // verify and decode toke
    const { userId } = jwtVerify(token as string) as any;
    if (!userId) throw Error(notAuthenticated);

    // from here token is authenticated
    const user = await userService.findById(userId);
    if (!user) throw Error(invalidToken);
    // add user to request object
    (req as any).user = user;
    next();
  } catch (error) {
    error.status = 401;
    res.status(401).send({
      error: {
        message: error.message,
      },
    });
  }
};
