import express from 'express';
import httpStatus from 'http-status';
import { jwtDecode, JwtPayload } from 'jwt-decode';

import { addUser } from '../services/user.service';
import { HttpException } from '../exceptions/HttpException';
import { isEmpty } from '@/utils/util';
import userModel from '@/databases/modals/user.modal';

export const getUserbyId = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findOne({ userId });
    if (!user) throw new HttpException(httpStatus.CONFLICT, 'User Not Found');

    return res.status(httpStatus.OK).json({ data: user, message: 'User details' });
  } catch (error) {
    console.error('Error in fetching user:', error);
    next(error);
  }
};

export const getUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const users = await userModel.find();
    return res.status(httpStatus.OK).json({ data: users, message: 'User list' });
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    next(error);
  }
};

export const createUserController = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { name, email, password } = req.body;
    let userId = null;
    let provider = null;
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      const decoded = jwtDecode<JwtPayload & { email: string }>(token);
      userId = decoded.sub;
      provider = decoded.iss;
    }

    const creationResponse = await addUser(userId, email, password, name, provider);

    return res.status(httpStatus.CREATED).json({ data: creationResponse, message: 'User created successfully!' });
  } catch (error) {
    console.error('Error in creating user:', error);
    next(error);
  }
};

export const validateUserController = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    //Validation is done in middleware
    if (isEmpty(res.locals.user)) throw new HttpException(httpStatus.CONFLICT, 'User Not Found');
    return res.status(httpStatus.OK).json({ data: res.locals.user, message: 'User Verified!' });
  } catch (error) {
    console.error('Error in validating user:', error);
    next(error);
  }
};
