import React from "react";
import classes from "./CFButton.module.css";

// export default function CFButton({confirm,setConfirm,setShowBackdrop}) {
export default function CFButton(props) {
  const clickYesHandler = () => {
    props.props.setConfirm(true);
    props.props.setShowBackdrop(false);
  }
  const clickNoHandler = () => {
    props.props.setShowBackdrop(false);
  }
  return (
    <div className={classes.CFButton}>
      <span>你确认吗？</span>
      <button className={classes.yes} onClick={clickYesHandler}>
        是
      </button>
      <button className={classes.no} onClick={clickNoHandler}>
        否
      </button>
    </div>
  );
}
