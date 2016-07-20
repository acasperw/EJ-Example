var React = require('react');
var classNames = require('classnames');
require('react-datetime');

// ES6
class DetailFlightInfo extends React.Component {

  render() {
    // ID = this.props.data.id

    // arrivalAirport = this.props.data.arrivalAirport
    // arrivalAirportCode = this.props.data.arrivalAirportCode
    // depTerminalName = this.props.data.depTerminalName
    
    // departureAirport = this.props.data.departureAirport
    // departureAirportCode = this.props.data.departureAirportCode

    // flight carrier = this.props.data.flightNumber.carrierCode
    // flightNumber = this.props.data.flightNumber.number
    // isDisrupted = this.props.data.isDisrupted

    // localArrivalTime = this.props.data.localArrivalTime
    // localDepartureTime = this.props.data.localDepartureTime
    
    // Adult Price = this.props.data.prices.adult.valueWithDebitCard
    // Child Price = this.props.data.prices.child.valueWithDebitCard
    // seatsAvailable = this.props.data.seatsAvailable

    return(
      <div className="detail-flight--info">
        <h3>{this.props.data.arrivalAirport}</h3>
        <div className="flight--departure">From: {this.props.data.departureAirport}</div>
        <div className="flight--price">£{this.props.data.prices.adult.value}</div>
        <a className="button">Book Now<span className="icon icon-angle-right"></span></a>
        <span className="button flight-close-button" onClick={this.props.onClick}>Close</span>
      </div>
    );
  }
};

module.exports = DetailFlightInfo;