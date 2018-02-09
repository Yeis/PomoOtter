import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


class ClockContainer extends Component{

    render(){
        return (
            <View style={styles.contentContainer}  ></View>
        )
    }

}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
        backgroundColor:'blue'
    }
}
