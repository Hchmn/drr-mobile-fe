import {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Icon, Input, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const LoginForm = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    <>
      <View style={styles.container}>
        <Input
          value={username}
          style={styles.input}
          label="Username"
          placeholder="Enter your username"
          status="primary"
          size="large"
          textStyle={styles.text}
          onChangeText={value => setUsername(value)}
        />
        <Input
          value={password}
          style={styles.input}
          label="Password"
          placeholder="Enter your password"
          status="basic"
          size="large"
          secureTextEntry={secureTextEntry}
          textStyle={styles.text}
          accessoryRight={renderIcon}
          onChangeText={value => setPassword(value)}
        />

        <View
          style={{
            width: Dimensions.get('screen').width * 0.75,
            marginBottom: '5%',
          }}>
          <Text
            style={[
              styles.link,
              {textDecorationLine: 'none', textAlign: 'right'},
            ]}>
            Forgot Password
          </Text>
        </View>

        <Button style={styles.button} status="control" size="large">
          LOGIN
        </Button>
      </View>

      <View
        style={{
          width: Dimensions.get('screen').width,
          height: 40,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 5,
    width: '50%',
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
