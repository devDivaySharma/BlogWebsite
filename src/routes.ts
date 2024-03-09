import express, { Router } from "express";
import userRoute from "./Routes/user";
import blogRoute from "./Routes/post";

const publicRouter:Router = express.Router();


publicRouter.use('/user',userRoute);
publicRouter.use('/blog',blogRoute);

export default publicRouter;

