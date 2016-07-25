let React = require("react");

// ES5 Stateless Component
function GlobalHeader(props) {
  return (
    <div className="footer">
      <div className="container clearfix">
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
        <div className="footerCol" >
          <h3>Customer service</h3>
          <ul className="menuUl">
            <li><a href="http://www.easyjet.com/en/help">Help</a></li>
            <li><a href="/en/policy/accessibility">Accessibility</a></li>
            <li><a href="http://www.easyjet.com/en/help/preparing-to-fly/latest-travel-information">Latest travel information</a></li>
            <li><a href="http://www.easyjet.com/en/help/preparing-to-fly/special-assistance">Special assistance</a></li>
            <li><a href="http://www.easyjet.com/en/sitemap">Site map</a></li>
          </ul>
        </div>
        <div className="footerCol" >
          <h3>About easyJet</h3>
          <ul className="menuUl">
            <li><a href="http://careers.easyjet.com/?utm_source=ej_CMS&utm_medium=en_Homepage&utm_term=Career&utm_content=StaticLink_AEJ5&utm_campaign=Footer" >Careers</a></li>
            <li><a href="http://corporate.easyjet.com/default.aspx?utm_source=ej_CMS&utm_medium=en_Homepage&utm_term=CompanyInfo&utm_content=StaticLink_AEJ1&utm_campaign=Footer" >Company information</a></li>
            <li><a href="http://corporate.easyjet.com/corporate-responsibility.aspx?sc_lang=en&utm_source=ej_CMS&utm_medium=en_Homepage&utm_term=Sustainability&utm_content=StaticLink_AEJ4&utm_campaign=Footer" >Corporate responsibility</a></li>
            <li><a href="http://corporate.easyjet.com/investors.aspx?utm_source=ej_CMS&utm_medium=en_Homepage&utm_term=Investors&utm_content=StaticLink_AEJ2&utm_campaign=Footer" >Investors</a></li>
            <li><a href="http://mediacentre.easyjet.com" >Media</a></li>
            <li><a href="/en/unicef" >Unicef</a></li>
            <li><a href="/en/help/booking/customer-charter" >Customer Charter</a></li>
            <li><a href="http://fearlessflyer.easyjet.com/" >Fearless Flyer course</a></li>
            <li><a href="http://www.easyjet.com/en/spirit" >easyJet Spirit</a></li>
            <li><a href="http://www.easyjet.com/partnerships?link=footerold" >Advertise with us</a></li>
          </ul>
        </div>
        <div className="footerCol">
          <h3>The small print</h3>
          <ul className="menuUl">
            <li><a href="/en/policy/acceptable-use" >Acceptable use policy</a></li>
            <li><a href="/en/policy/cookies" >Cookie policy</a></li>
            <li><a href="http://www.easyjet.com/en/terms-and-conditions/dangerous-goods" >Dangerous goods</a></li>
            <li><a href="/en/terms-and-conditions/fees-and-charges" >Fees and charges</a></li>
            <li><a href="/en/policy/privacy" >Privacy policy</a></li>
            <li><a href="/en/terms-and-conditions" >Terms and conditions</a></li>
          </ul>
        </div>
      </div>
  </div>
  );
}

module.exports = GlobalHeader;
