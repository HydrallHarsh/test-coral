const axios = require("axios");
const { coralApiBase } = require("../config");

const client = axios.create({
  baseURL: coralApiBase,
  timeout: 12_000,
  headers: { "User-Agent": "coral-fleet-status-api/0.4" },
});

async function fetchVesselSnapshot() {
  const { data } = await client.get("/telemetry/vessels/snapshot");
  return data.vessels || [];
}

module.exports = { fetchVesselSnapshot };
