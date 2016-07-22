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
      searchExpanded: false,
      submitText: "Lets Go",
      FlightSearchData: {
        flightDepart: null,
        flightArriv: null,
        adults: null,
        kids: null,
        flightDateOut: null,
        flightDateReturn: null
      }
    };
  }

  render() {

    const QuickFlightclasses = classNames(
      'flight-search',
      'clearfix',
      {'search--expanded': this.state.searchExpanded}
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
    // Filters duplcates from arrives and departure airports - setup search form
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

    var flightResults = null, stateFlightData = this.state.FlightSearchData, fDs, fDd, flightResultsTemp, numPassengers;
    // Filter and Match Search Results
    if (stateFlightData.flightDepart) {

      // Iterate through available data
      flightResultsTemp = theFlightParse.filter(function(element, index) {

        // setup date time
        fDs = new Date(stateFlightData.flightDateOut); fDs = fDs.toLocaleDateString();
        fDd = new Date(element.localDepartureTime); fDd = fDd.toLocaleDateString();

        // calc total number of passengers
        numPassengers = (parseInt(stateFlightData.adults) + parseInt(stateFlightData.kids));

        //If matches
        if (fDs === fDd && numPassengers <= element.seatsAvailable){
          return true;
        } else {
          return false;
        }
      });

      flightResults = flightResultsTemp.map(function(element, index) {
        return (<QuickFlightInfo theData={element} isSearchResult={true} />);
      });

    }
    if(flightResults){
      if(flightResults.length == 0){
        flightResults = <div className="flights--error-message ">No Results Found :(</div>;
      }
    }
    

    return(
      <div className={QuickFlightclasses}>
        <h1 className="header-divider"><span>Book a flight</span></h1>
        <div className="flight-search-wrapper">
          <form onSubmit={this._onSubmit} ref="form">
            <div className="form-row-desktop clearfix">
              <div className="form-row">
                <div className="form--panel">
                  <label for="flightDepart">Going From:</label>
                  <span className="easy-input"><select id="flightDepart" ref="flightDepart" required><option value="" disabled selected>Select a Departure Airport</option>{flightDeparts}</select></span>
                </div>
                <div className="form--panel">
                  <label for="flightArriv">Going To:</label>
                  <span className="easy-input"><select id="flightArriv" ref="flightArriv" required><option value="" disabled selected>Select a Destination</option>{flightArrival}</select></span>
                </div>
              </div>
              <div className="form-row">
                <div className="form--panel">
                  <label for="adults">Adults (16+):</label>
                  <span className="easy-input"><input type="number" ref="adults" name="adults" required min="1" max="10" defaultValue="2" pattern="[0-9]*" /></span>
                </div>
                <div className="form--panel">
                  <label for="kids">Kids:</label>
                  <span className="easy-input"><input type="number" ref="kids" name="kids" min="0" max="10" defaultValue="0" /></span>
                </div>
              </div>
            </div>
            <div className="form-row-desktop clearfix">
              <div className="form-row">
                 <div className="form--panel">
                  <label for="flightDateOut">When are you flying out:</label>
                  <span className="easy-input"><input type="date" ref="flightDateOut" name="flightDateOut" min="2016-06-29" defaultValue="2016-06-30" required /></span>
                </div>
                 <div className="form--panel">
                  <label for="flightDateReturn">When are you flying back:</label>
                  <span className="easy-input"><input type="date" ref="flightDateReturn" name="flightDateReturn" min="2016-07-01" /></span>
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
      obj.setState({
        searchExpanded: true, 
        submitText: "Refine",
        FlightSearchData: {
          flightDepart: this.refs.flightDepart.value,
          flightArriv: null,
          adults: this.refs.adults.value,
          kids: this.refs.kids.value,
          flightDateOut: this.refs.flightDateOut.value,
          flightDateReturn: null
        }
    });

      //console.log( this.refs.flightArriv.value );
  }

};

module.exports = FlightSearch;