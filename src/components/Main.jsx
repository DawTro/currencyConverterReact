import React from "react";
import Logo from "./Logo";
import Input from "./Input";
import SelectCurrency from "./SelectCurrency";
import ConvertButton from "./ConvertButton";
import Info from "./Info";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      currency: [],
      selectValue: "Wybierz walutę",
      finalValue: "0",
    };
  }

  componentDidMount() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/a/today/")
      .then((response) => response.json())
      .then((data) => {
        let obj = data[0];
        let arrayOfCurrencies = obj.rates;
        let currencies = arrayOfCurrencies.filter((c) =>
          ["CHF", "EUR", "USD"].includes(c.code)
        );
        console.log(currencies);

        this.setState({
          currency: currencies,
          selectValue: "",
        });
      });
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
    console.log(e.target.value);
  };

  handleOptionsChange = (e) => {
    this.setState({ selectValue: e.target.value }, () => {
      console.log("wybrano walute", this.state.selectValue);
    });
  };

  handleMultiButton = () => {
    this.setState({
      finalValue: (this.state.inputValue * this.state.selectValue).toFixed(2),
    });
  };

  render() {
    const showCurrency = this.state.currency.map((currence) => (
      <option key={currence.mid} value={currence.mid}>
        {currence.code}
      </option>
    ));

    return (
      <>
        <div className="content container">
          <Logo />
          <Input
            onChangeInputValue={this.handleInputChange}
            inputValue={this.state.inputValue}
          />
          <SelectCurrency
            onChangeSelectValue={this.handleOptionsChange}
            selectValue={this.state.selectValue}
            showCurrency={showCurrency}
          />
          <ConvertButton onSetFinalValue={this.handleMultiButton} />
          <Info finalValue={this.state.finalValue} />
        </div>
      </>
    );
  }
}

export default Main;
