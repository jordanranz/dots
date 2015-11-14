'use strict'

var React = require('react-native')
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React

//var DotListScreen = require('./components/DotListScreen');
var Routes = require('./Routes');

var popndots = React.createClass({
    render: function () {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={Routes.DotList()}
            />
        )
    } 
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

AppRegistry.registerComponent('popndots', () => popndots)