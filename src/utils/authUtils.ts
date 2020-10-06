import { sign, verify } from 'jsonwebtoken';
import { hash, compareSync } from 'bcryptjs';
import { Request } from 'express';

const JWT_SECRET = process.env.JWT_SECRET_ACCESS || 'secret';

// bcrypt
/**
 * @function hashFunc set to 10 rounds of salt hashing rounds
 * @param  password password to hash
 * @returns hashed value of the password input
 */
export const hashFunc = async (password: string) => await hash(password, 10);

/**
 *@function hashCompare used to compare plain text and hashed text
 * @param plainText
 * @param hashedText
 */
export const hashCompare = (plainText: string, hashedText: string) =>
  compareSync(plainText, hashedText);

/**
 * @function jwtSignAccess function that manages signing access token 24hrs
 * @param {string} userId passed in an object { userId } as payload, defaultValue: secret
 */
export const jwtSignAccess = (userId: number) => {
  sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
};

/**
 * @function jwtVerify uses set secret to verify a token
 * @param {string} token
 */
export const jwtVerify = (token: string) => verify(token, JWT_SECRET);

/**
 *@function getServerUrl Returns address of the running server
 * @param {Request} req express request object
 * @returns server url
 */
export const getServerUrl = (req: Request) =>
  `${req.protocol}://${req.get('host')}/api/v1/user`;
