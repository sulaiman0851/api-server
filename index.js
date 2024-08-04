import express from "express";
import { exec } from "child_process";
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!, this API for FREE!!!`);
});

app.get("/startbot", (req, res) => {
  exec("npm start octopus/index.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).send(error);
      return;
    }
    res.send(stdout ? stdout : stderr);
  });
});

const port = parseInt(process.env.PORT) || 9002;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
