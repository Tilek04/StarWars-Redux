import React from "react";
import style from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <h3 className={style.text}>
      The dark side of the fource has won.<br/>
       We cannot display data.<br/> Come back
      when we fix everything
    </h3>
  );
};
