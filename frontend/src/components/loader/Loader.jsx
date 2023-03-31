import React from "react";
import styles from "./loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loaderWrapper">
        <div>
          <img src="https://i.imgur.com/iECqAqy.png" alt="" />
        </div>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
    </div>
  );
};
