import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import e, { Express, NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';

import { router } from './routes/routes';

dotenv.config();

class App {
  public app: Express;

  constructor() {
    this.app = e();
    this.mountDb().then(() => console.info('DB connected'));
    this.mountRoutes();
    this.mountExceptionHandler();
  }

  private readonly mountRoutes = () => {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());

    this.app.use('/', router);
  };

  private readonly mountDb = async () => {
    const { DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

    if (!DB_PASSWORD && !DB_USERNAME && !DB_HOST) {
      return console.info('DB creds not set');
    }

    await connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
  };

  private readonly mountExceptionHandler = () => {
    this.app.use(
      (err: Error, _req: Request, res: Response, _next: NextFunction) => {
        return res.json({
          success: false,
          message: err.message,
        });
      },
    );
  };
}

export const app = new App().app;
