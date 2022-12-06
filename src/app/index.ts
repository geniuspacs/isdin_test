import express from "express";
import bodyParser from "body-parser";
import { todoRouter } from "../libs/todo/presentation";

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use([todoRouter]);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
