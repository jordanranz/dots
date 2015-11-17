'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var GoogleMapView = require('../GoogleMapView');

var DotGoogleMapScreen = React.createClass({

  getInitialState() {
    return {

    };
  },

  render() {
    return (
        <GoogleMapView 
            style={styles.map}
            showsUserLocation={true}
            mapMarkers={mapMarkers} 
        />
    );
  },

});

var styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

var mapMarkers = [{lat: 55, lng:37}, {lat: 0, lng:0}, {lat: -41.2864, lng:174.7762}]

module.exports = DotGoogleMapScreen;
