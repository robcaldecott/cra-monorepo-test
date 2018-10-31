import React from "react";
import { storiesOf } from "@storybook/react";
import { Fab } from "./Fab";

storiesOf("Fab", module).add("danger", () => (
  <Fab danger icon="star" label="Love it!" />
));
