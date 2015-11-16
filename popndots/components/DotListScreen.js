var React = require('react-native');

var _ = require('underscore');
var {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableHighlight
} = React;

var TimerMixin = require('react-timer-mixin');
var RefreshInfiniteListView = require('react-native-refresh-infinite-listview');

var DotListItem = require('./DotListItem');

var DotsListScreen = React.createClass({
    getInitialState() {
        var baseDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
        return {
            dataSource: baseDataSource.cloneWithRows(['Dot 1', 'Dot 2', 'Dot 3']),
        };
    },

    getData() {

    },

    renderDotListItem(text) {
        return (
            <View style={styles.row}>
                <TouchableHighlight onPress={this.handleItemClick} underlayColor="white">
                    <Text>{text}</Text>
                </TouchableHighlight>
            </View>
        )
    },

    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID+rowID}/>
        );
    },

    onRefresh() {
        console.log("refresh");
    },
    
    render() {
        return ( 
            <View style={{flex:1}}>
                <RefreshInfiniteListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderDotListItem}
                    renderSeparator={this.renderSeparator}
                    onRefresh = {this.onRefresh}
                />
            </View>
        );
    }
})

var styles = StyleSheet.create({
    row: {
        height: 80,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },

    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
});

module.exports = DotsListScreen