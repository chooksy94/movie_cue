import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const SupermanDetails =() => {
    const { id2 } = useLocalSearchParams();

    return (
        <View>
            <Text> Superman Movie details: {id2} </Text>
        </View>
    )
}

export default SupermanDetails;

const styles = StyleSheet.create({})