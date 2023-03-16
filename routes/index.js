import express, { json } from 'express';
import cors from "cors";
import bodyParser from 'body-parser';

import authRouter from './auth.Route'

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use(json());
app.use(cors());

app.use("/api/users", authRouter);

export default app;