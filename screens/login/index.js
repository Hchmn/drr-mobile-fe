import React, { useState } from 'react';
import {Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';

import {LoginForm, RegistrationForm} from '../../components';
import {Layout, Text} from '@ui-kitten/components';

const Login = ({}) => {
  const [component, setComponent] = useState("LOGIN");

  const components = {
    LOGIN: LoginForm,
    REGISTRATION: RegistrationForm
  }
  const NavigationComponent = components[component];

  return (
    <KeyboardAvoidingView style={{display:"flex"}}>
      <View style={styles.upperSection}>
        <Image
          alt="Logo"
          source={require('../../assets/images/logo2.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Login to your account</Text>
      </View>
      <Layout style={styles.lowerSection}>
        <NavigationComponent handleChangeComponent={setComponent}/>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    height: Dimensions.get('screen').height * 0.40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    height: Dimensions.get('screen').height * 0.60,
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
