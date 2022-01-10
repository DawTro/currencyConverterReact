import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div
      class="input-group mb-3"
      value={props.inputValue}
      onChange={props.onChangeInputValue}
      type="number"
      placeholder="Kwota">
      <span class="input-group-text" id="basic-addon1">
        $
      </span>
      <input
        class="form-control"
        value={props.inputValue}
        onChange={props.onChangeInputValue}
        type="number"
        placeholder="Kwota"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default Input;
