require("dotenv").config();
const express = require("express");
const { fleetRouter } = require("./routes/fleet");
const { healthRouter } = require("./routes/health");

const app = express();
const port = Number(process.env.PORT) || 8080;

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api/v1/fleet", fleetRouter);
app.use(express.static("public"));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "internal_error" });
});

app.listen(port, () => {
  console.log(`fleet-status-api listening on :${port}`);
});
