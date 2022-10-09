import express from "express";
import cors from 'cors';

import { loggingRouter } from "./routes/logging";
const app = express();

app.use(cors());
app.use(express.json());

app.use('/logging', loggingRouter)

app.get("/", (req, res) => {
  res.status(200).json({ message: 'API v1.0.0', status: "success" });
});

const port = 5001;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
