'use strict'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

var Routes = require('./Routes');

var popndots = React.createClass({
    render: function () {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={Routes.DotMapBoxScreen()}
                barTintColor={"#867FDB"}
                tintColor={"#FFF"}
                titleTextColor={"#FFF"}
            />
        )
    } 
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('popndots', () => popndots)