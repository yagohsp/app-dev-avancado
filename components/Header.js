import React from 'react';
import { StyleSheet, View } from 'react-native';

function Header() {
  return (
    <View style={styles.header}></View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'rgb(29, 161, 242)',
  }
});

export default Header;