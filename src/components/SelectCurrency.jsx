import React from "react";
// import Form from "react-bootstrap/Form";
import "./SelectCurrency.css";

const SelectCurrency = (props) => {
  const showCurrency = props.showCurrency;

  return (
    <>
      <select
        class="form-select"
        value={props.selectValue}
        onChange={props.onChangeSelectValue}
        aria-label="Default select example">
        <option value="" disabled selected>
          Wybierz walutę
        </option>
        {showCurrency}
      </select>
    </>
  );
};
// }

export default SelectCurrency;
