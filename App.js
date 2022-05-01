import { useState } from 'react';
import { 
  Button,
  FlatList,
  StyleSheet, 
  Text,
  TextInput, 
  View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')  
  const [nomeTel, setNomeTel] = useState([])
  var validacaoNum = /^[0-9.]+$/;

  const validar = () =>{
    let erro = true
    if(nome.length == 0){
      alert("Preencha o campo nome")
      erro = false
    }
    else if(telefone.length == 0){
      alert("Preencha o campo telefone")
      erro = false
    }
    return erro
  }
  const nomeCapturado = (nomeDigitado) =>{
    setNome(nomeDigitado)
  }
const telefoneCapturado = (telefoneDigitado) =>{
  setTelefone(telefoneDigitado)
}
  const adicionarNomeTelefone = ()=>{
    if(validar()){      
      setNomeTel(nomeTel =>{
        setContadorID(contadorID + 1)
        return [{key: contadorID.toString(), valueN: nome, valueT: telefone}, ...nomeTel]  
      })
    }
  }
  const [contadorID, setContadorID] = useState(0);

  return (
    <View>
      <View style={styles.telaPrincipalView}>
        <View style={{marginBottom: 8}}>         
          <TextInput 
            onChangeText={nomeCapturado}
            placeholder='Nome'
            style ={{borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 8, padding: 12}}           
            
          />
          <TextInput 
            onChangeText={telefoneCapturado}
            placeholder='Telefone'
            style ={{borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginBottom: 8, padding: 12}}
            
          />
          <Button 
            title="Adicionar Lembrete"
            onPress={adicionarNomeTelefone}
          />
        </View>
        <FlatList
            data={nomeTel}
            //dataTel = {telefones}
              renderItem={ /*mapeamento*/
              nomeTel => ( /*dado um lembrete, gera uma view*/
            <View style={styles.itemNaLista}>
              <Text>{"Nome: " +nomeTel.item.valueN}</Text>
              <Text>{"Telefone: " +nomeTel.item.valueT}</Text>
              
            </View>
          )
}
/>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  itemNaLista:{
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8, 
    marginBottom: 8,
  }
});
