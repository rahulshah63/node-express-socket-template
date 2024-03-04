import { Controller, HttpStatus } from '@nestjs/common';

import { ForgotPasswordDto } from './dtos/forgot-password.dto';
import { LoginDto } from './dtos/login.dto';
import { LogoutDto } from './dtos/logout.dto';
import { RegisterDto } from './dtos/register.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { TokenDto } from './dtos/token.dto';

import AuthService from './auth.service';
import { NextFunction, Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  static instance: null | AuthController;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(private authService = AuthService) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new AuthController();
    }
    return this.instance;
  }

  // Route: POST: /auth/login
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loginDto: LoginDto = req.body;
      const response = await this.authService.login(loginDto);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.error('Error in logging:', error);
      throw error;
      // next(error);
    }
  };

  // Route: POST: /auth/register
  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const registerUserDto: RegisterDto = req.body;
      const response = await this.authService.register(registerUserDto);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.error('Error in logging:', error);
      throw error;
      // next(error);
    }
  };

  // Route: POST: /auth/logout
  public logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const logoutDto: LogoutDto = req.body;
      const response = await this.authService.logout(logoutDto);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.error('Error in logging:', error);
      throw error;
      // next(error);
    }
  };

  // Route: GET: /generate/tokens
  public generateTokens = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tokenDto: TokenDto = req.body;
      const response = await this.authService.generateTokens(tokenDto);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.error('Error in logging:', error);
      throw error;
      // next(error);
    }
  };

  // Route: GET: /auth/forgot-password
  public forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const forgotPasswordDto: ForgotPasswordDto = req.body;
      const response = await this.authService.forgotPassword(forgotPasswordDto);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.error('Error in logging:', error);
      throw error;
      // next(error);
    }
  };

  // Route: GET: /auth/reset-password
  public resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resetPasswordDto: ResetPasswordDto = req.body;
      const { token } = req.query;
      const response = await this.authService.resetPassword(resetPasswordDto, token as string);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.error('Error in logging:', error);
      throw error;
      // next(error);
    }
  };
}

export default AuthController.getInstance();
