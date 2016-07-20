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
            uniquesData.push(arr[i][prop]);
        }
      }
      return uniquesData;
    }

    const flightDestination = removeDups(theFlightParse, 'departureAirport').map(function(element, index) {
      return (
        <option key={index}>{element}</option>
      );
    });

    const flightArrival = removeDups(theFlightParse, 'arrivalAirport').map(function(element, index) {
      return (
        <option key={index}>{element}</option>
      );
    });

         

    return(
      <div className={QuickFlightclasses}>
        <h2><span>Book a flight</span></h2>
        <div className="flight-search-wrapper">
          <form onSubmit={this._onSubmit} ref="form">
            <div className="form--panel">
              <label for="flightDest">Select a Destination</label>
              <select id="flightDest" className="easy-input">{flightDestination}</select>
            </div>
            <div className="form--panel">
              <label for="flightArriv">Select a Destination</label>
              <select id="flightArriv" className="easy-input">{flightArrival}</select>
            </div>
            <div className="form--panel"><input type="submit" className="button" value="Lets Go" /></div>
          </form>
        </div>
        <div className="flight-results">
          <div className="flight-results--inner">
          <h2><span>Results</span></h2>
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