import express, { Router } from "express";
import userRoute from "./Routes/user";

const publicRouter:Router = express.Router();


publicRouter.use('/user',userRoute);

export default publicRouter;

