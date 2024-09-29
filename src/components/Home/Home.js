import React, { useState } from "react";
import RButton from "../../card/confirm/RButtun/RButton";
import YNButton from "../../card/confirm/YNButton/YNButton";

import Backdrop from "../Backdrop/Backdrop";

export default function Home() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const [confirm, setConfirm] = useState(false);

  return (
    <div>
      <RButton showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} confirm={confirm} setConfirm={setConfirm}/>
      <YNButton showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} confirm={confirm} setConfirm={setConfirm}/>
      {showBackdrop && <Backdrop confirm={confirm} setConfirm={setConfirm} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop}/>}
    </div>
  );
}
