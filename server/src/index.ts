import express, { Express } from "express";
import mongoose from "mongoose";
import vansRouter from "./routes/vans"
import cors from "cors";


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://kahputs:XdRVAymtkZNKKMJ2@cluster0.mwumo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB")).catch((err) => console.error("Failed to connect to MongoDB: ", err));

app.use("/vans", vansRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})
