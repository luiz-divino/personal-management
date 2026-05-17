import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // Durante o desenvolvimento você pode deixar *, depois mude para a URL da Vercel
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(router);

const port = Number(process.env.PORT) || 3333;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
