import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/iceCream", (req, res) => {
  res.send("Hello I love ice cream");
});

app.get("/cicd", (req, res) => {
  res.send("Hello I love ice cream");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

export default app;
