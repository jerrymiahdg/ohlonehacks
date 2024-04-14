import express from "express";
import ViteExpress from "vite-express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
import { spawn } from "child_process";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
app.use(express.text());
// app.use(bodyParser.raw({ type: "image/jpeg" }));
const upload = multer({ dest: "uploads/" });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

const run = async (e) => {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt =
    "Provide a 1-3 sentence of what this skin condition is, and its symptoms. In addition, provide ways to treat it. Make sure to be brief: " +
    e;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
};

const imageAnalysis = async (req, res) => {
  console.log(
    "------req.body" +
      req.file.path +
      req.file.originalname.substring(req.file.originalname.indexOf("."))
  );
  console.log(req.file);
  const python = spawn("python3", [
    "main.py",
    req.file.path +
      req.file.originalname.substring(req.file.originalname.indexOf(".")),
  ]);
  let dataToSend = "";
  python.stdout.on("data", (data) => {
    dataToSend = data.toString();
    console.log("----datatosend" + dataToSend);
  });
  python.on("close", async () => {
    console.log("----datatosend" + dataToSend);
    const gemini = await run(dataToSend);
    res.json({
      condition: dataToSend,
      description: gemini,
    });
  });
};

app.post("/post", upload.single("image"), (req, res) => {
  fs.rename(
    req.file.path,
    req.file.path +
      req.file.originalname.substring(req.file.originalname.indexOf(".")),
    (err) => console.log(err)
  );
  imageAnalysis(req, res);
});

ViteExpress.listen(app, 3000, async () => {
  console.log("Server is listening on port 3000...");
  // console.log("burger" + (await run("kill yourself")));
});
