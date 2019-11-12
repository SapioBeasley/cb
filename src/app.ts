import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction } from 'express';
import { router } from './routes/routes';
import { connect } from "mongoose";

dotenv.config();

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.mountDb();
        this.mountRoutes();
        this.mountExceptionHandler();
    };

    private mountRoutes = () => {
        this.app.use(urlencoded({extended: true}));
        this.app.use(json());

        this.app.use('/', router);
    };

    private mountDb = async () => {
        const {DB_USERNAME, DB_PASSWORD, DB_HOST} = process.env;

        if (!DB_PASSWORD && !DB_USERNAME && !DB_HOST) {
            return console.log('DB creds not set');
        }

        await connect(
            `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`,
            {useNewUrlParser: true, useUnifiedTopology: true}
        );
    };

    private mountExceptionHandler = () => {
        this.app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
            return res.json({
                success: false,
                message: err.message
            });
        })
    }
}

export const app = new App().app;
