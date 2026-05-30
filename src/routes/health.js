const express = require("express");

const healthRouter = express.Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "fleet-status-api",
    version: process.env.npm_package_version || "0.4.2",
  });
});

module.exports = { healthRouter };
