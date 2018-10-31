import { configure } from "@storybook/react";
import "typeface-roboto";
import "material-design-icons-iconfont/dist/material-design-icons.css";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
