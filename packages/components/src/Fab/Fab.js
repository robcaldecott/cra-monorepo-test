import React from "react";
import { Fab as MDCFab } from "@rmwc/fab";
import "@material/fab/mdc-fab.scss";
import styles from "./Fab.module.scss";

const Fab = ({ danger, ...other }) => (
  <MDCFab className={danger ? styles.danger : ""} {...other} />
);

export { Fab };
