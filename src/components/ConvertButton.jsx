import React from "react";
import "./ConvertButton.css";

const ConvertButton = (props) => {
  return (
    <>
      <button
        onClick={props.onSetFinalValue}
        type="button"
        class="btn btn-outline-secondary">
        Przelicz
      </button>
    </>
  );
};

export default ConvertButton;
