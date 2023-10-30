import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';

import {LoginForm} from '../../components';
import {Layout, Text} from '@ui-kitten/components';

const Login = ({}) => {
  return (
    <ScrollView>
      <View style={styles.upperSection}>
        <Image
          alt="Logo"
          source={require('../../assets/images/logo2.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Login to your account</Text>
      </View>
      <Layout style={styles.lowerSection}>
        <LoginForm />
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    height: Dimensions.get('screen').height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    height: Dimensions.get('screen').height * 0.6,
    backgroundColor: '#090428',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom:"5%"
  },
  text: {
    marginTop: '3%',
    fontSize: 24,
    fontWeight: '900',
    color: '#090428',
  },
  logo: {
    width: 250,
    height: 150,
  },
});

export default Login;
