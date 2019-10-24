import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { connect } from 'mongoose';
dotenv.config();

import getLogin from './controllers/getLogin';

const PORT: number | string = 4000 || process.env.PORT;

const app: express.Application = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.get('/login', getLogin);

app.listen(PORT, (): void => console.log(`The App is running on Port ${PORT}`));
