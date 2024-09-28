import React, { useState } from "react";
import RButton from "../../card/confirm/RButtun/RButton";
import YNButton from "../../card/confirm/YNButton/YNButton";

import Backdrop from "../Backdrop/Backdrop";

export default function Home() {
  return (
    <div>
      <RButton />
      <YNButton />
    </div>
  );
}
