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
      expanded: false,
      submitText: "Lets Go"
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
    //var byName = filterByProperty(theFlightParse, "departureAirport", "London Luton (LTN)");
    //console.log(byName);
         

    return(
      <div className={QuickFlightclasses}>
        <h1 className="header-divider"><span>Book a flight</span></h1>
        <div className="flight-search-wrapper">
          <form onSubmit={this._onSubmit} ref="form">
            <div className="form-row-desktop clearfix">
              <div className="form-row">
                <div className="form--panel">
                  <label for="flightDest">Going From:</label>
                  <span className="easy-input"><select id="flightDest" ref="flightDest"><option required value="" disabled selected>Select a Departure Airport</option>{flightDeparts}</select></span>
                </div>
                <div className="form--panel">
                  <label for="flightArriv">Going To:</label>
                  <span className="easy-input"><select id="flightArriv" ref="flightArriv"><option required value="" disabled selected>Select a Destination</option>{flightArrival}</select></span>
                </div>
              </div>
              <div className="form-row">
                <div className="form--panel">
                  <label for="adults">Adults (16+):</label>
                  <span className="easy-input"><input type="number" ref="adults" name="adults" required min="1" max="10" pattern="[0-9]*" /></span>
                </div>
                <div className="form--panel">
                  <label for="kids">Kids (2-14):</label>
                  <span className="easy-input"><input type="number" ref="kids" name="kids" min="0" max="10" pattern="[0-9]*" /></span>
                </div>
                <div className="form--panel">
                  <label for="infants">Infants:</label>
                  <span className="easy-input"><input type="number" ref="infants" name="infants" min="0" max="10"  pattern="[0-9]*"/></span>
                </div>
              </div>
            </div>
            <div className="form-row-desktop clearfix">
              <div className="form-row">
                 <div className="form--panel">
                  <label for="flightDateOut">When are you flying out:</label>
                  <span className="easy-input"><input type="date" name="flightDateOut" min="2016-06-30" value="2016-06-30" required /></span>
                </div>
                 <div className="form--panel">
                  <label for="flightDateReturn">When are you flying out:</label>
                  <span className="easy-input"><input type="date" name="flightDateReturn" min="2016-07-01" /></span>
                </div>
              </div>
              <div className="form--panel"><input type="submit" className="button" value={this.state.submitText} /></div>
            </div>
          </form>
        </div>
        <div className="flight-results">
          <div className="flight-results--inner">
          <h2><span>Choose a flight out</span></h2>
          {flightResults}
        </div>
        </div>
      </div>

    );
  }

  _onSubmit(e){
     e.preventDefault();
      const obj = this;
      obj.setState({expanded: true, submitText: "Refine"});

      console.log( this.refs.flightArriv.value );
  }

};

module.exports = FlightSearch;