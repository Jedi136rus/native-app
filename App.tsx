import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image 
          source={require('./assets/pngwing.com.png')} 
          style={styles.logoStyle}
          // resizeMode='contain'
        />
        <View style={styles.formView}>
          <Input placeholder='Email'/> 
          <Input placeholder='Пароль'/>
          <Button
              title="Войти"
              color={Colors.redDark}
              accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Text style={{marginTop: 50}}>Восстановить пароль</Text>
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
