import express from "express";
import dbConnection from "./dbConnection.js";
import router from "./routes/userRouter.js";
import dotenv from 'dotenv'
dotenv.config()
const port= process.env.PORT ||5000

const startServer = async () => {
    await dbConnection();
    const app = express();
  
    app.use('/', router);
  
    app.listen(port, () => {
      console.log(`Server connected to port ${port}`);
    });
  };
  
  startServer();


