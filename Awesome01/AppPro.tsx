import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
} from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode =useColorScheme() ==='dark';
    return(
        // <SafeAreaView style={}>
            // <View style={styles.container}>
            <View style={[isDarkMode ? styles.blackBackground : styles.whiteBackground, styles.container]}>
                <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                    Hello
                </Text>
            </View>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blackBackground: {
        backgroundColor: '#222222',
    },
    whiteBackground: {
        backgroundColor: '#f4f4f4',
    },
    whiteText: {
        color: '#ffffff'
    },
    blackText: {
        color: '#000000'
    }
});

export default AppPro;