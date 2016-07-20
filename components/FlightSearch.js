var React = require('react');
var classNames = require('classnames');
var QuickFlightInfo = require('./QuickFlightInfo');
var DetailFlightInfo = require('./DetailFlightInfo');
require('react-datetime');

// ES6
class FlightSearch extends React.Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this.state = {
      expanded: false
    };
  }

  render() {

    const QuickFlightclasses = classNames(
      'flight-search',
      'clearfix',
      {'expanded': this.state.expanded}
    );
    
    const theFlightParse = this.props.theData;

    // Return Unique Values
    function removeDups(arr, prop){
      var tempData = [], uniquesData = [] ,index;
      for (var i = 0; i < arr.length; i++) {
        index = tempData.indexOf(arr[i][prop]);
        if(index == -1){
          tempData.push(arr[i][prop]);
          uniquesData.push(arr[i]);
        }
      }
      return uniquesData;
    }
    // Filters duplcates from arrives and departure airports
    const flightDeparts = removeDups(theFlightParse, 'departureAirport').map(function(element, index) {
      return (
        <option key={index} value={element.departureAirportCode}>{element.departureAirport}</option>
      );
    });
    const flightArrival = removeDups(theFlightParse, 'arrivalAirport').map(function(element, index) {
      return (
        <option key={index} value={element.arrivalAirportCode}>{element.arrivalAirport}</option>
      );
    });

    var flightResults = "test";

    // Return <option> times 10
    var oneto11Form = ["1","2","3","4","5","6","7","8","9","10","11"].map(function(element, index) {
      return (
        <option key={index} value={element}>{element}</option>
      );
    });

    function filterByProperty(array, prop, value){
      var filtered = [];
      for(var i = 0; i < array.length; i++){
        var obj = array[i];
        for(var key in obj){
          if(typeof(obj[key] == "object")){
            var item = obj[key];
            if(item[prop] == value){
              filtered.push(item);
            }
          }
        }
      }
      return filtered;
    }
    var byName = filterByProperty(theFlightParse, "departureAirport", "London Luton (LTN)");
    console.log(byName);
         

    return(
      <div className={QuickFlightclasses}>
        <h2><span>Book a flight</span></h2>
        <div className="flight-search-wrapper">
          <form onSubmit={this._onSubmit} ref="form">
            <div className="form-row-desktop clearfix">
              <div className="form-row">
                <div className="form--panel">
                  <label for="flightDest">Going From:</label>
                  <span className="easy-input"><select id="flightDest" ><option value="" disabled selected>Select a Departure Airport</option>{flightDeparts}</select></span>
                </div>
                <div className="form--panel">
                  <label for="flightArriv">Going To:</label>
                  <span className="easy-input"><select id="flightArriv"><option value="" disabled selected>Select a Destination</option>{flightArrival}</select></span>
                </div>
              </div>
              <div className="form-row">
                <div className="form--panel">
                  <label for="adults">Adults (16+):</label>
                  <span className="easy-input"><select id="adults">{oneto11Form}</select></span>
                </div>
                <div className="form--panel">
                  <label for="kids">Kids (2-14):</label>
                  <span className="easy-input"><select id="kids" className="easy-input">{oneto11Form}</select></span>
                </div>
                <div className="form--panel">
                  <label for="infants">Infants:</label>
                  <span className="easy-input"><select id="infants" className="easy-input">{oneto11Form}</select></span>
                </div>
              </div>
            </div>
            <div className="form--panel"><input type="submit" className="button" value="Lets Go" /></div>
          </form>
        </div>
        <div className="flight-results">
          <div className="flight-results--inner">
          <h2><span>Results</span></h2>
          {flightResults}
        </div>
        </div>
      </div>

    );
  }

  _onSubmit(e){
     e.preventDefault();
     console.log("clicked");
      const obj = this;
      obj.setState({expanded: true});
  }

};

module.exports = FlightSearch;