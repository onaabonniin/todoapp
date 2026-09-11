import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    /*justifyContent: 'flex-end',
    height: 120,
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
  donetext: {
    fontSize: 16,
    color: '#FFF',
    textDecorationLine: 'line-through',
  },
  textinput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    backgroundColor: '#EFE5D8',
    width: Dimensions.get('screen').width * 0.65,
    height: 30,
    borderRadius: 4,
    paddingLeft: 10,
  },
  inputcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addbutton: {
    backgroundColor: '#D3B792',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.2,
    height: 30,
    borderRadius: 3,
  },
  scrollcontainer: {
    marginTop: 10,
  },
  itemcontainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFE5D8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removebutton: {
    backgroundColor: '#550000',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.2,
    height: 30,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#FFF',
  }
});

const tasks = [
  {
    title: 'Feed the dog',
    done: false,
    date: new Date(),
  },
  {
    title: 'Do the laundry',
    done: false,
    date: new Date(),
  },
  {
    title: 'New task',
    done: true,
    date: new Date(),
  }
];

interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
  function renderItem({item}: {item:Task}) {
    return (
      <View style={styles.itemcontainer}>
        <TouchableOpacity>
          <Text style={item.done ? styles.donetext : styles.whitetext}>{item.title}</Text>
          <Text style={item.done ? styles.donetext : styles.whitetext}>Due date: {item.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {item.done && (
          <TouchableOpacity style={styles.removebutton}>
          <Text style={styles.whitetext}>Delete</Text>
          </TouchableOpacity> )
        }
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <View style={styles.inputcontainer}>
        <TextInput placeholder='Create a new task' style={styles.textinput}/>
        <TouchableOpacity style={styles.addbutton}>
          <Text style={styles.whitetext}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollcontainer}>
        <FlatList renderItem={renderItem} data={tasks}/>
      </View>
    </View>
    
  );
}