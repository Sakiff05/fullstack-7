import mongoose from "mongoose";
import { config } from "dotenv";
config();
mongoose.connect(process.env.ConnectionString).then(() => {
  console.log("connected");
});
