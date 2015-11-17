'use strict';
//#B794E3 : purple
//#bbebbe : dark purple
//#7FC8FA : light blue
//#7FFAAA : green

//dot purple: #867FDB
// purple outline: #979DFF alpha: 70%

//dot blue: #509FEB
// purple outline: #97D5FF alpha: 70%

//dot green: #48DF6E
// purple outline: #80FF6E alpha: 70%

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
var {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBarIOS,
    View,
    TabBarIOS,
} = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var Routes = require('../Routes');

var DotMapScreen = React.createClass({
    mixins: [Mapbox.Mixin],

    getInitialState() {
        return {
            center: {
                latitude: 47.60621,
                longitude: -122.332071
            },

            zoom: 12,

            annotations: [{
                coordinates: [47.612399, -122.346427],
                'type': 'point',
                title: 'Foundation Nightclub',
                subtitle: '',
                annotationImage: {
                    url: 'https://s3-us-west-2.amazonaws.com/pop-dot/dot_purple.png',
                    height: 30,
                    width: 30
                },
                id: 'marker1'
            },{
                coordinates: [47.613731, -122.320355],
                'type': 'point',
                title: 'Q Nightclub',
                subtitle: '',
                annotationImage: {
                    url: 'https://s3-us-west-2.amazonaws.com/pop-dot/dot_blue.png',
                    height: 30,
                    width: 30
                },
                id: 'marker2'
            },{
                coordinates: [47.616869, -122.331184],
                'type': 'point',
                title: 'Kremwerk',
                subtitle: '',
                annotationImage: {
                    url: 'https://s3-us-west-2.amazonaws.com/pop-dot/dot_green.png',
                    height: 30,
                    width: 30
                },
                id: 'marker3'
            }]
        }
    },

    onRegionChange(location) {
        this.setState({ currentZoom: location.zoom });
    },
    onRegionWillChange(location) {
        console.log(location);
    },
    onUpdateUserLocation(location) {
        console.log(location);
    },
    onOpenAnnotation(annotation) {
        this._handleNextButtonPress();
    },
    onRightAnnotationTapped(e) {
        console.log(e);
    },

    _handleNextButtonPress: function() {
        this.props.navigator.push(Routes.DotGoogleMapScreen());
    },

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 0.8,
    },
    tabBar: {
        flex:0.2,
    }
});

var mapMarkers = [{lat: 55, lng:37}, {lat: 0, lng:0}, {lat: -41.2864, lng:174.7762}]

module.exports = DotMapScreen;