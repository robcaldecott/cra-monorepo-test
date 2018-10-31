const path = require("path");

const includePaths = [
  path.resolve(__dirname, "../../../node_modules"),
  path.resolve(__dirname, "../src")
];
const localIdentName = "[name]__[local]___[hash:base64:5]";

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push(
    // CSS modules
    {
      test: cssModuleRegex,
      loaders: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName
          }
        }
      ]
    },
    // SASS
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        {
          loader: "sass-loader",
          options: { includePaths }
        }
      ]
    },
    // SASS modules
    {
      test: sassModuleRegex,
      loaders: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 2,
            modules: true,
            localIdentName
          }
        },
        {
          loader: "sass-loader",
          options: { includePaths }
        }
      ]
    }
  );

  return defaultConfig;
};
