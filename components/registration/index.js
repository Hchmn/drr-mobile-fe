import {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Icon, Input, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {PersonalInfo} from './personal-info';
import {AccountInfo} from './account-info';

export const RegistrationForm = ({navigation, handleChangeComponent}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const handleNext = values => {
    setFormData({...formData, ...values});
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = values => {
    setFormData({...formData, ...values});
    console.log('VALUES', formData);
  };

  return (
    <>
      {currentStep === 0 && (
        <PersonalInfo
          handleChangeComponent={handleChangeComponent}
          handle
          onNext={handleNext}
          values={formData}
        />
      )}
      {currentStep === 1 && (
        <AccountInfo
          handleChangeComponent={handleChangeComponent}
          onPrevious={handlePrevious}
          handleRegister={handleSubmit}
        />
      )}
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
