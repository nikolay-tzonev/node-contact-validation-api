import Koa from 'koa';
import Router from '@koa/router';
import HealthController from './controller/HealthController';

const swaggerUi = require('swagger-ui-koa');
import swaggerSpec from '../lib/swagger';
import ContactController from './controller/ContactController';

export default async (app: Koa) => {
    const router = new Router();

    router.get('/health', HealthController.ok);

    router.post('/contact/validate', ContactController.validate);

    router.get('/swagger', swaggerUi.setup(swaggerSpec));
    

    app.use(router.routes());
    app.use(router.allowedMethods());
}
