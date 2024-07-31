import { StyleSheet, Text, View, Image } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { ButtonC } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function Login() {
  const [local_error, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [{ access_token, isLoading, error}, login] = useAtom(loginAtom);

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
      <View style={styles.loginContainer}>
        <Image 
          source={require('../assets/pngwing.com.png')} 
          style={styles.logoStyle}
          // resizeMode='contain'
        />
        <View style={styles.formView}>
          <Input placeholder='Email' onChangeText={setEmail}/> 
          <Input isPassword placeholder='Пароль' onChangeText={setPassword}/>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    padding: 55
  },
  loginContainer: {
    alignItems: 'center',
    gap: Gaps.g50
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
});
