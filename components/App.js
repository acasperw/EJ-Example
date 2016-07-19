var React = require('react');

var GlobalHeader = require('./GlobalHeader');
var FlightViewer = require('./FlightViewer');
var GlobalFooter = require('./GlobalFooter');

/* Data - This could be CMS Driven, CMS renders JSON data per page. */
var headerData = [
	{text: "English", link: "/en/"},
  {text: "Sign In", link: "/sign-in/"},
  {text: "Help", link: "/help/"}
];

var App = React.createClass({

	getInitialState(){
		return {
			favorites: favorites,
			currentAddress: 'Paris, France',
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},

	render(){
		// Global Main Renderer
		return (
			<div>
				<GlobalHeader data={headerData} />
				<main role="main" className="main-page clearfix">
					<div className="container clearfix">
						<FlightViewer apiSource="http://ejtestbed.herokuapp.com/flights" />
					</div>
				</main>
				<GlobalFooter />
			</div>
		);
	}
});

module.exports = App;

/*
<Search onSearch={this.searchForAddress} />
<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
<CurrentLocation address={this.state.currentAddress} 
favorite={this.isAddressInFavorites(this.state.currentAddress)} 
onFavoriteToggle={this.toggleFavorite} />
<LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentAddress} 
onClick={this.searchForAddress} />
*/