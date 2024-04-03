import { SafeAreaView, StyleSheet, Dimensions, Image, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input}>
        Username
      </TextInput>
      <TextInput style={styles.input}>
        Password
      </TextInput>
      <Button mode="outlined" style={styles.botao}>
        Login
      </Button>
      <Text style={styles.texto}>
        Forgot your login details? Get help signing in.
      </Text>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundImage: "linear-gradient(to bottom right, #, #019CAD)",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#fff",
    borderRadius: 8,
    backgroundColor: "#813D92",
  },
  botao: {
    margin: 20,
    color: "#212121",

  },
  texto:{
    alignContent: "center",
    justifyContent: 'center',
    padding: 8,
  }
});
