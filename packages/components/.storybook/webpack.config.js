const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      require.resolve("style-loader"),
      require.resolve("css-loader"),
      {
        loader: "sass-loader",
        options: {
          includePaths: [
            path.resolve(__dirname, "../../../node_modules"),
            path.resolve(__dirname, "../src")
          ]
        }
      }
    ]
  });

  return defaultConfig;
};
