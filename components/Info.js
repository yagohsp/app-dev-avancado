import React, { Fragment, useState } from 'react';
import { StyleSheet, View, Text, Picker, Button, Switch, Slider } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function Info() {

  const [possuiBolsa, setPossuiBolsa] = useState(false);
  const [nome, setNome] = useState();
  const [curso, setCurso] = useState();
  const [turno, setTurno] = useState();
  const [periodo, setPeriodo] = useState();
  const [sexo, setSexo] = useState();
  const [idade, setIdade] = useState();
  const [renda, setRenda] = useState();
  const [showInfo, setShowInfo] = useState(false);

  const toggleSwitch = () => setPossuiBolsa(previousState => !previousState);

  return (
    <View style={styles.container}>
      {
        !showInfo ? (
          <Fragment>
            <Text style={styles.title}>Solicitar Bolsa</Text>
            <TextInput style={styles.textInput} placeholder="Nome" placeholderTextColor="#555" onChangeText={a => setNome(a)} />

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Curso</Text>
              <Picker
                selectedValue={curso}
                style={styles.picker}
                onValueChange={itemValue => setCurso(itemValue)}
                value={curso}
              >
                <Picker.Item label="Sistemas de informação" value="Sistemas de informação" />
                <Picker.Item label="Medicina Veterinária" value="Medicina Veterinária" />
                <Picker.Item label="Psicologia" value="Psicologia" />
              </Picker>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Período</Text>
              <Picker
                selectedValue={periodo}
                style={styles.picker}
                onValueChange={itemValue => setPeriodo(itemValue)}
                value={periodo}
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="7" value="7" />
              </Picker>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Turno</Text>
              <Picker
                selectedValue={turno}
                style={styles.picker}
                onValueChange={itemValue => setTurno(itemValue)}
                value={turno}
              >
                <Picker.Item label="Matutino" value="Matutino" />
                <Picker.Item label="Vespertino" value="Vespertino" />
                <Picker.Item label="Noturno" value="Noturno" />
              </Picker>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Sexo</Text>
              <Picker
                selectedValue={sexo}
                style={styles.picker}
                onValueChange={itemValue => setSexo(itemValue)}
                value={sexo}
              >
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>

            <TextInput style={styles.textInput} placeholder="Idade" placeholderTextColor="#555" onChangeText={a => setIdade(a)} />
            
            <Slider 
              minimumValue={0}
              maximumValue={100}
              onValueChange={a => setRenda(a)}
              value={renda} 
            />

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Já ganhou bolsa</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#ffa580" }}
                ios_backgroundColor="#fff"
                onValueChange={toggleSwitch}
                value={possuiBolsa}
              />
            </View>

            <Button color="#ffa580" title="Salvar" onPress={() => setShowInfo(true)}/>
          </Fragment>
        )
        :(
            <Fragment>
              <Text style={styles.label}>{nome}</Text>
              <Text style={styles.label}>{curso}</Text>
              <Text style={styles.label}>{periodo}</Text>
              <Text style={styles.label}>{turno}</Text>
              <Text style={styles.label}>{sexo}</Text>
              <Text style={styles.label}>{idade}</Text>
              <Text style={styles.label}>{renda}</Text>
              <Text style={styles.label}>{possuiBolsa ? 'Sim' : 'Não'}</Text>
            </Fragment>
          )
        }
    </View>
  );
}

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f4e5'
  },
  inlineContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 15
  },
  textInput: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 5,
    borderBottomColor: 'rgba(0,0,0,1)',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: 18,
    marginBottom: 15
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  picker: {
    width: '70%',
    fontFamily: 'Fjalla One, sans-serif',
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 6,
    border: 0
  },
  label: {
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: 18,
    marginHorizontal: 12,
    color: '#555'
  }
});