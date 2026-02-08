import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/dbConnectionfile.js";
dotenv.config({
  path: "./.env",
});
const port = 3000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Database Connection has failed ", err);
    process.exit(1);
  });
