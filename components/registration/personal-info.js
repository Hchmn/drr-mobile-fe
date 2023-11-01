import {useState} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';

export const PersonalInfo = ({onNext, values, handleChangeComponent}) => {
  return (
    <>
      <Formik
        initialValues={{
          ...values,
        }}
        onSubmit={values => {
          onNext(values);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
            <Input
              value={values.fullName}
              style={styles.input}
              label="Full Name"
              placeholder="Enter your fullname"
              status="primary"
              size="large"
              textStyle={styles.text}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
            />

            <Input
              value={values.mobileNumber}
              style={styles.input}
              label="Mobile Number"
              placeholder="Enter your mobile number"
              status="primary"
              size="large"
              textStyle={styles.text}
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
            />

            <Input
              value={values.email}
              style={styles.input}
              label="Email Address"
              placeholder="Enter your email address"
              status="primary"
              size="large"
              textStyle={styles.text}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />

            <View
              style={{
                width: Dimensions.get('screen').width * 0.75,
                marginTop: '2%',
              }}>
              <TouchableOpacity
                style={{
                  width: 125,
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  height: 40,
                }}>
                <Button
                  style={styles.button}
                  status="control"
                  size="large"
                  onPress={handleSubmit}>
                  NEXT
                </Button>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: Dimensions.get('screen').width,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={[styles.text,{color:"#fff"}]}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  handleChangeComponent('LOGIN');
                }}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  input: {
    width: 320,
    borderRadius: 14,
    backgroundColor: '#fff',
    height: 80,
  },

  text: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: '#000',
  },

  button: {
    marginTop: 2,
    width: '100%',
    height: 45,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  link: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
