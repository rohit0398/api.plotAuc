import { auth } from '@config/auth';
import { validate } from '@config/validate';
import express from 'express';

import {
  handleChangePassword,
  handleForgotPassword,
  handleNewPassword,
  handleUserSignIn,
  handleUserSignUp,
} from './user.controller';
import {
  validateChangePassword,
  validateEmail,
  validateNewPassword,
  validateSignin,
  validateSignup,
} from './user.validation';

const routes = express.Router();

routes.post('/sign-up', validate(validateSignup), handleUserSignUp);
routes.post('/sign-in', validate(validateSignin), handleUserSignIn);
routes.post('/forgot-password', validate(validateEmail), handleForgotPassword);
routes.post('/new-password', validate(validateNewPassword), handleNewPassword);
routes.post(
  '/change-password',
  auth,
  validate(validateChangePassword),
  handleChangePassword,
);

module.exports = routes;
