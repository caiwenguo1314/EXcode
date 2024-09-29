import React from "react";
import classes from "./RButton.module.css";

export default function RButton({ showBackdrop, setShowBackdrop, confirm, setConfirm }) {
  const clickHandler = () => {
    if (!confirm) {
      setShowBackdrop(!showBackdrop);
    } else {
      setConfirm(!confirm);
    }
  }
  return (
    <div>
      <div className={classes.RButton}>
        <input
          type="checkbox"
          className={`${classes.input} ${confirm && classes.confirm}`}
          onClick={clickHandler}
        />
        <span className={classes.RButton__text}>
          更改/注册自动扣款，并使用同一借记信用卡支付保费/供款
        </span>
      </div>
    </div>
  );
}
