import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [randomBackground, setRandomBackground] = useState("#fff");
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color);
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <TouchableOpacity
      onPress={generateColor}>
        <View style={styles.actionbtn}>
          <Text style={styles.actionbtnText}>
            Press Me
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionbtn: {
    backgroundColor: "#111111",
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 10,
  },
  actionbtnText: {
    color: "#ffffff"

  },
})