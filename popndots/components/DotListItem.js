'use strict'

var React = require('react-native');
var moment = require('moment');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var DotListItem = React.createClass({
    render() {
        return (
            <TouchableHighlight onPress={this.handleSelectComments} underlayColor="white">
				<View> 
					<Text style={styles.commentsText}>{story.descendants} comments</Text>
				</View>
	      	</TouchableHighlight>
        )
    } 
});

var styles = StyleSheet.create({
	row: {
	    height: 80,
	    flex: 1,
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'flex-start',
	    paddingLeft: 20,
	},
})

AppRegistry.registerComponent('DotListItem', () => DotListItem)