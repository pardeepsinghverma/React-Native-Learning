import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
//Constants
import { currencyByRupee } from './constant/constants';
//Components
import CurrencyButton from './components/currencyButton'; 
import Snackbar from 'react-native-snackbar';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [resultValue, setResult] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#FFFFFF',
      });
    } 
    const inputAmmount = parseFloat(inputValue);
    if (!isNaN(inputAmmount)) {
      const convertedValue = inputAmmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} `;
      setResult(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a Valid number to Convert',
        backgroundColor: '#EA7773',
        textColor: '#FFFFFF',
      });
    }
  }

  return (
    <SafeAreaView>
      <StatusBar
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              keyboardType="numeric"
              maxLength={10}
              value={inputValue}
              clearButtonMode='always'
              placeholder="Enter Amount"
              placeholderTextColor="#000000"
              onChangeText={setInputValue}
              />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(item) => item.name}
            renderItem={(item) => (
              <Pressable
                style={[styles.button, targetCurrency === item.item.name && styles.selected]}
                onPress={() => buttonPressed(item.item)}>
                <CurrencyButton name={item.item.name} flag={item.item.flag} />
                </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: '#515151',
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
