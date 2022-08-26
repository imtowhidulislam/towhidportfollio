import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import projectRoute from "./routes/projectRoute.js";
import skillRoter from "./routes/skillsRoute.js";
import userRouter from "./routes/userRoutes.js";
const app = express();
const port = 3000;

// ? Settingup All The MiddleWares:::
app.use(cors());
app.use(bodyParser.json());
app.use("/project", projectRoute);
app.use("/api/skill", skillRoter);
app.use("/api/user", userRouter);

// app.use(express.static("./public"));

app.get("/home", (req, res) => {
  res.send("hello");
});
// ! Connection to DataBase...
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

app.listen(port, () => console.log(`Server is running on port ${port}`));
