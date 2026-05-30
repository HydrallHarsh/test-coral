const express = require("express");
const { groupByRegion } = require("../services/aggregates");
const { fetchVesselSnapshot } = require("../services/vesselClient");

const fleetRouter = express.Router();

fleetRouter.get("/snapshot", async (_req, res, next) => {
  try {
    const vessels = await fetchVesselSnapshot();
    res.json({ generatedAt: new Date().toISOString(), regions: groupByRegion(vessels) });
  } catch (err) {
    next(err);
  }
});

fleetRouter.get("/vessels/:id", async (req, res, next) => {
  try {
    const vessels = await fetchVesselSnapshot();
    const vessel = vessels.find((v) => v.id === req.params.id);
    if (!vessel) return res.status(404).json({ error: "not_found" });
    res.json(vessel);
  } catch (err) {
    next(err);
  }
});

module.exports = { fleetRouter };
