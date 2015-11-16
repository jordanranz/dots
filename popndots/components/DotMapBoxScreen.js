'use strict';
//#B794E3 : purple
//#bbebbe : dark purple
//#7FC8FA : blue
//#7FFAAA : green
var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
var {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBarIOS,
    View,
} = React;

var DotMapScreen = React.createClass({
    mixins: [Mapbox.Mixin],

    getInitialState() {
        return {
            center: {
                latitude: 47.60621,
                longitude: -122.332071
            },

            zoom: 11,

            annotations: [{
                coordinates: [47.613731, -122.320355],
                'type': 'point',
                title: 'Capitol Hill',
                subtitle: '',
                id: 'marker1'
            }] 
        }
    },



    render() {
        return (
            <Mapbox
                style={styles.map}
                direction={0}
                rotateEnabled={true}
                scrollEnabled={true}
                zoomEnabled={true}
                showsUserLocation={true}
                ref={mapRef}
                accessToken={'pk.eyJ1Ijoiam9yZGFucmFueiIsImEiOiJjaWgxbmhiaGIweDhiNG1tM3U3aXo5ZWpqIn0.1w-JojM1g7gULggAjidcVA'}
                styleURL={'asset://styles/streets-v8.json'}
                centerCoordinate={this.state.center}
                zoomLevel={this.state.zoom}
                onRegionChange={this.onRegionChange}
                onRegionWillChange={this.onRegionWillChange}
                annotations={this.state.annotations}
                onOpenAnnotation={this.onOpenAnnotation}
                onRightAnnotationTapped={this.onRightAnnotationTapped}
                onUpdateUserLocation={this.onUpdateUserLocation}
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

module.exports = DotMapScreen;