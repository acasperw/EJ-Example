var React = require('react');

function GlobalHeader(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerCol">
        <h3>Flight info</h3>
          <ul className="menuUl">
            <li><a href="javascript:Popup.OnlineCheckin();">Check-in online</a></li>
            <li><a href="/en/cheap-flights">Cheap flights</a></li>
            <li><a href="http://www.easyjet.com/en/flight-tracker">Arrivals and departures</a></li>
            <li><a href="https://www.easyjet.com/EN/secure/MyEasyJet.mvc/SignIn">Manage bookings</a></li>
            <li><a href="http://www.easyjet.com/EN/routemap">Where we fly</a></li>
            <li><a href="/en/help/preparing-to-fly/baggage">Baggage allowance</a></li>
          </ul>
        </div>
        <div class="footerCol" >
          <h3>Customer service</h3>
          <ul className="menuUl">
            <li><a href="http://www.easyjet.com/en/help">Help</a></li>
            <li><a href="/en/policy/accessibility">Accessibility</a></li>
            <li><a href="http://www.easyjet.com/en/help/preparing-to-fly/latest-travel-information">Latest travel information</a></li>
            <li><a href="http://www.easyjet.com/en/help/preparing-to-fly/special-assistance">Special assistance</a></li>
            <li><a href="http://www.easyjet.com/en/sitemap">Site map</a></li>
          </ul>
        </div>
      </div>
  </div>
  );
}

module.exports = GlobalHeader;