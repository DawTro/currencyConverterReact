import "./Info.css";

function Info(props) {
  if (props.finalValue <= 0) {
    return (
      <div className="info">
        <h2>Tu pokaże się kwota w PLN</h2>
      </div>
    );
  } else {
    return (
      <div className="info">
        <h2>To {props.finalValue} PLN</h2>
      </div>
    );
  }
}

export default Info;
