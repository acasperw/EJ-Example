var React = require('react');
require('react-datetime');

const QuickFlightInfo = (props) => {

    return(
      <div className="quick-flight--info">
        <h3>{props.theData.arrivalAirport}</h3>
        <div className="flight--departure">From: {props.theData.departureAirport}</div>
        <div className="flight--price">£{props.theData.prices.adult.value}</div>
        <a className="button">See Flight</a>
      </div>
    );
};

module.exports = QuickFlightInfo;