import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }) => {


  useEffect(() => {

    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2500)
  }, []);

  return (
    <View style={styles.container}>
      <Image
        alt='Logo'
        source={require("../../assets/images/logo2.png")}
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
    height: 200,
  },
});

export default Splash;
