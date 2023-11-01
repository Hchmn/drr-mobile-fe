import {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Icon, Input, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';

export const AccountInfo = ({
  onPrevious,
  handleRegister,
  values,
  handleChangeComponent,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={handleToggleIcon}>
      <Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
        fill="#090428"
      />
    </TouchableWithoutFeedback>
  );

  const handleToggleIcon = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <Formik
      initialValues={{
        ...values,
      }}
      onSubmit={values => {
        handleRegister(values);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Input
            value={values.userName}
            style={styles.input}
            label="Username"
            placeholder="Enter your username"
            status="primary"
            size="large"
            textStyle={styles.text}
            onChangeText={handleChange('userName')}
            onBlur={handleBlur('userName')}
          />

          <Input
            value={values.password}
            style={styles.input}
            label="Password"
            placeholder="Enter your password"
            status="basic"
            size="large"
            secureTextEntry={secureTextEntry}
            textStyle={styles.text}
            accessoryRight={renderIcon}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />

          <Input
            value={values.confirmPassword}
            style={styles.input}
            label="Confirm Password"
            placeholder="Enter your password"
            status="basic"
            size="large"
            secureTextEntry={secureTextEntry}
            textStyle={styles.text}
            accessoryRight={renderIcon}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
          />

          <View
            style={{
              width: Dimensions.get('screen').width * 0.75,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
                width: 130,
              }}>
              <Button
                style={styles.button}
                status="control"
                size="large"
                onPress={onPrevious}>
                BACK
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 130,
              }}>
              <Button
                style={styles.button}
                status="control"
                size="large"
                onPress={handleSubmit}>
                REGISTER
              </Button>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width,
              height: 70,
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
    marginTop: 5,
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
