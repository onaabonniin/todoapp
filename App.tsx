import React from 'react';
import styles from './Styles';
import {RenderItem} from './RenderItem'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

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

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
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
        <FlatList renderItem={RenderItem} data={tasks}/>
      </View>
    </View>
    
  );
}