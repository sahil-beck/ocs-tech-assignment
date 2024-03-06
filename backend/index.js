import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['POST'], 
    allowedHeaders: '*'
}));

app.use("/api/auth", AuthRoutes);

const server = app.listen(process.env.PORT, () => {
    try {
        console.log(`Server is listening on port ${process.env.PORT}`);
    } 
    catch(error) {
        console.log(error);
    }
});