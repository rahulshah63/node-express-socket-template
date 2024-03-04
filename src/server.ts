import App from '@/app';
import validateEnv from '@utils/validateEnv';
import AuthRoute from '@/modules/auth/auth.route';

validateEnv();

const app = new App([new AuthRoute()]);

app.listen();
