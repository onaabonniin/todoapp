import React, {useState, useEffect} from 'react';
import styles from './Styles';
import RenderItem from './RenderItem';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('mytodotasks', JSON.stringify(value));
      console.log('Tareas guardadas:', value);
    } catch (e) {
      console.log('Error guardando:', e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytodotasks');
  
      console.log('Datos recuperados:', value);
  
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      console.log('Error leyendo:', e);
    }
  };

  useEffect(()=> {
    getData();


  }, []);

  const addTask = () => {
    const temp = [...tasks];

    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };

    temp.push(newTask);

    setTasks(temp);
    storeData(temp);
    setText('');
  };
  const markDone = (task: Task) => {
    const temp = [...tasks];

    const index = temp.findIndex(elem => elem.title === task.title);

    const todo = temp[index];

    todo.done = !todo.done;

    setTasks(temp);
    storeData(temp);
  };

  const deleteFunction = (task: Task) => {
    const temp = [...tasks];

    const index = temp.findIndex(elem => elem.title === task.title);
    
    temp.splice(index, 1);

    setTasks(temp);
    storeData(temp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <Text style={styles.subtitle}>by Ona Bonnin</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder='Create a new task'
          onChangeText={(t: string)=>setText(t)}
          value={text}
          style={styles.textinput}
        />
        <TouchableOpacity onPress={addTask} style={styles.addbutton} >
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollcontainer}>
        <FlatList 
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
    
  );
}