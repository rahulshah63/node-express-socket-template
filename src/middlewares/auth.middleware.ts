import { NextFunction, Request, Response } from 'express';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import httpStatus from 'http-status';

import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from '@/utils/util';
import { validateUser } from '@/services/user.service';

const authMiddleware = async (req: Request & { headers: { authorization: string } }, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  try {
    if (!token || isEmpty(token)) throw new HttpException(httpStatus.BAD_REQUEST, 'authorization token is missing');
    // decode the token
    const decoded = jwtDecode<JwtPayload & { email: string }>(token);
    const { isAuthorized, data } = await validateUser(decoded.sub, decoded.aud as string, decoded.exp);

    if (isAuthorized) {
      res.locals.user = data;
      res.locals.email = decoded.email || null;
      res.locals.provider = decoded.iss || null;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
