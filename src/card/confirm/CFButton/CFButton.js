import React from "react";
import classes from "./CFButton.module.css";

export default function CFButton() {

  return (
    <div className={classes.CFButton}>
      <span>你确认吗？</span>
      <button className={classes.yes} onClick={null}>
        是
      </button>
      <button className={classes.no} onClick={null}>
        否
      </button>
    </div>
  );
}
