import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { ButtonC } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';
import { useScreenOrientation } from '../shared/hooks';
import { Orientation } from 'expo-screen-orientation';

export default function Login() {
  const [local_error, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [{ access_token, isLoading, error}, login] = useAtom(loginAtom);
  const orientation = useScreenOrientation();

  const submit = () => {
    if (!email || email == ''){
      setLocalError('Не введен email');
      return;
    } 
    if (!password || password == ''){
      setLocalError('Не введен пароль');
      return;
    }
    login({ email, password });
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (access_token) {
      router.replace('/');
    }
  }, [access_token])

  return (
    <View style={styles.container}>
      <ErrorNotification error={local_error}/>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.loginContainer}>
        <Image 
          source={require('../assets/pngwing.com.png')} 
          style={styles.logoStyle}
          // resizeMode='contain'
        />
        <View style={styles.formView}>
          <View style={{...styles.inputs, flexDirection: orientation === Orientation.PORTRAIT_UP ? 'column' : 'row'}}>
            <Input style={{
              width: 
                orientation === Orientation.PORTRAIT_UP 
                ? 'auto' 
                : Dimensions.get('window').width / 2 - 16 - 48,
            }} placeholder='Email' onChangeText={setEmail}/> 
            <Input style={{
              width: 
                orientation === Orientation.PORTRAIT_UP 
                ? 'auto' 
                : Dimensions.get('window').width / 2 - 16 - 48,
            }}
              isPassword 
              placeholder='Пароль' 
              onChangeText={setPassword}/>
          </View>
          <ButtonC
                text="Войти"
                onPress={submit}
                isLoading={isLoading}
            />
        </View>
        <CustomLink
          href={'/restore'} 
          style={{marginTop: 50}}
          text='Восстановить пароль'>
        </CustomLink>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 55
  },
  loginContainer: {
    alignItems: 'center',
    gap: Gaps.g50,
    // maxWidth: 400,
    // minWidth: '50%'
  },
  formView: {
    alignSelf: 'stretch',
    gap: Gaps.g16
  },
  logoStyle: {
    width: 200,
    height: 100,
    marginBottom: 50
  },
  inputs: {
    gap: Gaps.g16
  },
});
