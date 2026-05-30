#!/usr/bin/env node
/** One-off sync job — run via: node src/cli/sync.js --region=us-east */
require("dotenv").config();
const minimist = require("minimist");
const { fetchVesselSnapshot } = require("../services/vesselClient");

const args = minimist(process.argv.slice(2), {
  string: ["region"],
  default: { region: "all" },
});

fetchVesselSnapshot()
  .then((vessels) => {
    const filtered =
      args.region === "all"
        ? vessels
        : vessels.filter((v) => v.region === args.region);
    console.log(JSON.stringify({ region: args.region, count: filtered.length }));
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
