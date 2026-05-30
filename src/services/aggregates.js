const _ = require("lodash");

function groupByRegion(vessels) {
  return _.mapValues(_.groupBy(vessels, "region"), (group) => ({
    count: group.length,
    ids: group.map((v) => v.id),
  }));
}

module.exports = { groupByRegion };
