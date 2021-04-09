import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Header() {
  return (
    <View style={styles.footer}>
      <Text style={styles.address}>Products Bela Vista - 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: 'rgb(96, 96, 96)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  address: {
    color: '#fff'
  }
});

export default Header;