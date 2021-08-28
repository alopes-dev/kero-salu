import express from "express";
import multer from "multer";

import multerConfig = require("./middlewares/multer");

const routes = express.Router();
routes.post("/upload", multer(multerConfig).single("file"), (req: any, res) => {
  const { filename } = req.file;
  return res.json({ ok: true, avatar_url: filename });
});

export default routes;
