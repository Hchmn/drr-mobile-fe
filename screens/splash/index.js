import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }) => {


  useEffect(() => {

    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000)
  }, []);

  return (
    <View style={styles.container}>
      <Image
        alt='Logo'
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 350,
    height: 350,
  },
});

export default Splash;
