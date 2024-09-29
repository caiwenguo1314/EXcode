import React from "react";
import classes from "./YNButton.module.css";

export default function YNButton({ showBackdrop, setShowBackdrop, confirm, setConfirm }) {
  const clickYesHandler = () => {
    !confirm && setShowBackdrop(!showBackdrop);
  }
  
  const clickNoHandler = () => {
    setConfirm(false)
  }
  return (
    <div>
      <div className={classes.YNButton}>
        <div>
          <div className={classes.YNButton__question}>
            <span>您是否也想使用信用卡/借记卡注册汽车扣款，以便将来付款？</span>
          </div>
          <div className={classes.YNButton__mean}>
            <span>选择“是”表示只能使用信用卡/借记卡付款。</span>
          </div>
        </div>
        <div className={classes.YNButton__button}>
          <button
            className={`${classes.YNButton__button__yes} ${confirm&&classes.confirm} `}
            onClick={clickYesHandler}
          >
            Yes
          </button>
          <button
            className={`${classes.YNButton__button__no} `}
            onClick={clickNoHandler}
          >
            {" "}
            No
          </button>
        </div>
      </div>
      {confirm && <div className={classes.stateText}>你点我了</div>}
    </div>
  );
}
