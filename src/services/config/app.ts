import express from "express";
import middleware from './middleware.js';
import routes from './routes.js'; 

const porta = process.env.PORT || 3000;
const app = express();
app.set('port',porta);
//configurar middleware
middleware(app);
//configurar as rotas
routes(app);

export default app;