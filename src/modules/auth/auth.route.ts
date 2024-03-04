import { Request, Response, Router } from 'express';
import AuthController from './auth.controller';
import { AppConfig } from '@/config';
import validationMiddleware from '@/middlewares/validation.middleware';
import { LoginDto } from './dtos/login.dto';
import { Routes } from '@/interfaces/routes.interface';

class AuthRoute implements Routes {
  public path = `/${AppConfig.versioning}/auth`;
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/login`, [validationMiddleware(LoginDto, 'body')], AuthController.login);
    this.router.get(`${this.path}/generate/tokens`, AuthController.generateTokens);
  }
}

export default AuthRoute;
