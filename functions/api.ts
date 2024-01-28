import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
console.log(123);
router.get("*", (req, res) => res.send("Hello World!"));

api.use("*", router);

export const handler = serverless(api);