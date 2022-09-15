import { useState } from 'react';
import { View, TouchableOpacity, Textinput, ScrollView, Text} from 'react-native';

export default function App() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [listar, setLista] = useState("");

  return (
      <View>
        <Text>Nome do func.</Text>
        <Textinput placeholder='Nome do func.' value={value} onChangeText={(val) => { setValue(val) }} />
        <Text>Cargo</Text>
        <Textinput placeholder='Cargo' value={value1} onChangeText={(val1) => { setValue1(val1) }} />
      <TouchableOpacity>Cadastrar</TouchableOpacity>
    </View>
  )
};