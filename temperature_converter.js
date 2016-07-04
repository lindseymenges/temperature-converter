var TemperatureContainer = React.createClass({
  getInitialState: function() {
    return {degrees: '100', type: 'fahrenheit'};
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var inputValue = document.getElementById('form-degrees-input').value.trim();

    // Some browsers, including Safari, ignore HTML5 input attributes 'pattern'
    // and 'required' - this if/else statement and alert accounts for those cases

    if ((/^-?\d*\.?\d+$/.test(inputValue)) && (-100000 <= inputValue) && (inputValue <= 100000)) {
      this.setState({degrees: inputValue,
        type: document.getElementById('form-temperature-type').value});
    } else {
      alert("Please enter a valid number between -100,000 and 100,000. Acceptable characters: '-', '.', and 0 - 9");
    };
  },
  convertedTemp: function(thermometerType, formType) {
    if(thermometerType != formType) {
      return parseFloat(this.convertTemperature(thermometerType, this.state.degrees));
    } else {
      return parseFloat(parseFloat(this.state.degrees).toFixed(2));
    }
  },
  convertTemperature: function (thermometerType, degrees) {
    if (thermometerType == 'fahrenheit') {
      var inFahrenheit = (parseFloat(degrees) * (9/5)) + 32;
      return inFahrenheit.toFixed(2);
    } else {
      var inCelsius = (parseFloat(degrees) - 32) * (5/9);
      return inCelsius.toFixed(2);
    }
  },
  render: function() {
    return (
      <div className='temp-container'>
        <div className='displays'>
          <TemperatureDisplay thermometerType='fahrenheit' temperature={this.convertedTemp('fahrenheit', this.state.type)}/>
          <TemperatureDisplay thermometerType='celsius' temperature={this.convertedTemp('celsius', this.state.type)}/>
        </div>
        <form className='temperature-form' onSubmit={this.handleSubmit}>
          <div className='form-selectors'>
            <input id='form-degrees-input' type='text' required='true' pattern="^-?\d*\.?\d+$" defaultValue='100' title="Enter a valid number. Acceptable inputs: '-', '.', and 0 - 9"/>
            <select id='form-temperature-type'>
              <option value='fahrenheit'>Fahrenheit</option>
              <option value='celsius'>Celsius</option>
            </select>
          </div>
          <input id='temperature-submit' type='submit' value='Convert' />
        </form>
      </div>
    );
  }
});

var TemperatureDisplay = React.createClass({
  render: function() {
    return (
      <div className={"temperature-display " + this.props.thermometerType}>
        <h2>{this.props.temperature}{String.fromCharCode(176)}</h2>
        <h4>{this.props.thermometerType.toUpperCase()}</h4>
      </div>
    );
  }
});

ReactDOM.render(
  <TemperatureContainer />,
  document.getElementById('container')
);
