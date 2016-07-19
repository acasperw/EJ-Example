var React = require('react');

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
          <li><a key={index}>{element.departureAirportCode}</a></li>
        );
      });

      const cheapestFlights = theFlightParse.filter(function(value, index, ar) {
        console.log(value);
        console.log(index);
        console.log(ar);
      });


    }

    if (this.state.errorMessage) {
      return(<div className="flights--error-message">{this.state.errorMessage}</div>);
    }

    return (
      <div className="flight-view clearfix">
        <div>{EachFlight}</div>
        <div>{theErrorMessage}</div>
        <div>{cheapestFlights}</div>
      </div>
    );
  };

};

module.exports = FlightViewer;