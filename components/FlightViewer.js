var React = require('react');
var FlightSearch = require('./FlightSearch');
var QuickFlightInfo = require('./QuickFlightInfo');

// Setup Error Message
const ErrorMessage = (props) => {
  var theErrorMessage, theLoadingMessage;

  if(props.error){
    theErrorMessage =  <div className="flights--error-message">{props.error}</div>;
  }
  if (props.loading) {
    theLoadingMessage = <div className="flights--error-message message__loading"><span className="icon icon-spin5 animate-spin"></span><em>Loading</em></div>;
  }

  return(
    <div>
    <div>{theErrorMessage}</div>
    <div>{theLoadingMessage}</div>
    </div>
  );
};

// ES6 (statefull) Component
class FlightViewer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flightData: null,
      errorMessage: null,
      loading: true
    };
  }

  componentWillMount() {
    const obj = this;

    // Ajax into the data, set as const
    var request = new XMLHttpRequest();
    request.open('GET', obj.props.apiSource, true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
         obj.setState({
          flightData: this.response,
          loading: false
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
    var EachFlight, cheapestFlights, theErrorMessage, LoadingMessage,searchFlightsLoad;

    // If there is data, display all the different parts.
    if (this.state.flightData) {

      const theFlightJson = this.state.flightData;
      const theFlightParse = JSON.parse(theFlightJson);

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

      searchFlightsLoad = <FlightSearch theData={theFlightParse} />
      
    }

    return (
      <div className="flight-view clearfix">
        <div>{searchFlightsLoad}</div>
        <ErrorMessage error={this.state.errorMessage} loading={this.state.loading} />
        <div className="cheapestFlights clearfix">
          <h2><span>Our Latest Cheapest Flights</span></h2>
          <div>{cheapestFlights}</div>
          <ErrorMessage loading={this.state.loading} />
        </div>
      </div>
    );
  };

};

module.exports = FlightViewer;