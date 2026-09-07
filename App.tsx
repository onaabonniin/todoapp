import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    /*justifyContent: 'flex-end',
    height: '120',
    alignItems: 'flex-start',*/
    backgroundColor: '#403728',
    width: '100%',
    padding: 20,
    marginTop: 40,
  }, 
  title: {
    fontSize: 20,
    color: '#FFF',
  },
  text: {
    fontSize: 16,
    color: '#403728',
  },
  whitetext: {
    fontSize: 16,
    color: '#FFF',
  },
  textinput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    backgroundColor: '#EFE5D8',
    width: Dimensions.get('screen').width * 0.6,
    height: 30,
    borderRadius: 3,
    paddingLeft: 10,
  },
  inputcontainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  addbutton: {
    backgroundColor: '#D3B792',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.2,
    height: 30,
    borderRadius: 3,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.textinput}/>
        <TouchableOpacity style={styles.addbutton}>
          <Text style={styles.whitetext}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}