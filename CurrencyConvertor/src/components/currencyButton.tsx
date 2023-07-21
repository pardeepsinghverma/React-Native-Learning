import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyTypeButton = PropsWithChildren<{
    name: string;
    value: number;
    symbol: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyTypeButton): JSX.Element => {
    return (
        <View style={[styles.buttonContiner]}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    buttonContiner: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
    },
    flag: {
        fontSize: 30,
        marginEnd: 10,
        color: 'white',
    },
    name: {
        fontSize: 30,
        marginEnd: 10,
        color: 'white',
    },

})

export default CurrencyButton