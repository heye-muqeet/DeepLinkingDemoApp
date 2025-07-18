


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Referal = ({ routes }) => {
    const referralCode = routes.params?.referralCode;
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>{`WELCOME BY THE REFERAL CODE ${referralCode}`}</Text>
        </View>
    )
}

export default Referal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    }
})    