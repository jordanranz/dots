var React = require('react-native');
var { requireNativeComponent } = React;

class GoogleMapView extends React.Component {
  	render() {
    	return <RCTGoogleMapView {...this.props} />;
  	}
}

GoogleMapView.propTypes = {
	markers: React.PropTypes.array
}

var RCTGoogleMapView = requireNativeComponent('RCTGoogleMapView', GoogleMapView);

module.exports = GoogleMapView;