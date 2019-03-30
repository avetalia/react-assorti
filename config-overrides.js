const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    ["@ui"]: path.resolve(__dirname, "src/ui"),
    ["@features"]: path.resolve(__dirname, "src/features")
  })
);
