var React = require('react');
var QuickFlightInfo = require('./QuickFlightInfo');

// ES6 (statefull) Component
class FlightViewer extends React.Component {
  
  constructor() {
    super();
    this.state = {
      flightData: null,
      errorMessage: null
    };
  }

  componentWillMount() {
    const obj = this;

    // Ajax into the data, set as const
    var request = new XMLHttpRequest();
    request.open('GET', this.props.apiSource, true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
         obj.setState({
          flightData: this.response
         });
      } else {
        // We reached our target server, but it returned an error
        obj.setState({
          errorMessage: "Error getting data"
         });
      }
    };
    request.onerror = function() {
      obj.setState({
        errorMessage: "Error connecting to Server"
      });
    };
    request.send();
  }

  render() {
    var EachFlight, cheapestFlights, theErrorMessage;

    // If there is data, display all the different parts.
    if (this.state.flightData) {

      const theFlightJson = this.state.flightData;
      const theFlightParse = JSON.parse(theFlightJson);
      EachFlight = theFlightParse.map(function(element, index) {
        return (
          <li><a key={index}>{element.prices.adult.value}</a></li>
        );
      });

      // Sort Price and return lowest three
      var cheapestFlightsJson = theFlightParse.sort(function (a, b) {
        if (a.prices.adult.value > b.prices.adult.value) {return 1}
        if (a.prices.adult.value < b.prices.adult.value) {return -1}
        return 0;
      }).slice(0, 3);

      // Show Cheapest Flights, for each flight
      cheapestFlights = cheapestFlightsJson.map(function(element, index) {
        return (
          <QuickFlightInfo theData={element} />
        );
      });
      
    }

    if (this.state.errorMessage) {
      return(<div className="flights--error-message">{this.state.errorMessage}</div>);
    }

    return (
      <div className="flight-view clearfix">
        <div>{EachFlight}</div>
        <div>{theErrorMessage}</div>
        <cheapestFlightsSection />
        <div className="cheapestFlights clearfix">
          <h2><span>Our Latest Cheapest Flights</span></h2>
          <div>{cheapestFlights}</div>
        </div>
      </div>
    );
  };

};

module.exports = FlightViewer;