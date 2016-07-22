var React = require('react');
var classNames = require('classnames');
require('react-datetime');

// ES6
class DetailFlightInfo extends React.Component {

  render() {

    function makeTime(time){if(time==0){return "00";} else {return time;}}
    var fD = new Date(this.props.data.localDepartureTime); var fDfull = <span><b>{makeTime(fD.getHours())+":"+makeTime(fD.getMinutes())}</b> {fD.getDate()+"/"+fD.getMonth()+"/"}<small>{fD.getFullYear()}</small></span>
    var fA = new Date(this.props.data.localArrivalTime); var fAfull = <span><b>{makeTime(fA.getHours())+":"+makeTime(fA.getMinutes())}</b> {fA.getDate()+"/"+fA.getMonth()+"/"}<small>{fA.getFullYear()}</small></span>


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
        <h2><span>{this.props.data.arrivalAirport}</span></h2>
        <div className="flight--departure">From: {this.props.data.departureAirport} ({this.props.data.depTerminalName})</div>
        <div className="clearfix">
          <div className="detail-left"><div className="flight--departure-time">Departing: {fDfull}</div></div>
          <div className="detail-right"><div className="flight--arrival-time">Arriving: {fAfull}</div></div>
        </div>
        <div className="flight--price">From: £{this.props.data.prices.adult.value}</div>
        <div className="clearfix">
          <div className="detail-left"><h3>Adult Price:</h3>£{this.props.data.prices.adult.valueWithDebitCard}</div>
          <div className="detail-right"><h3>Child Price:</h3>£{this.props.data.prices.child.valueWithDebitCard}</div>
        </div>

        <a className="button">Book Now<span className="icon icon-angle-right"></span></a>

        <span className="button flight-close-button" onClick={this.props.onClick}>Close</span>
      </div>
    );
  }
};

module.exports = DetailFlightInfo;