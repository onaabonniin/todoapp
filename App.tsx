import React, {useState} from 'react';
import styles from './Styles';
import RenderItem from './RenderItem';

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

  const addTask = () => {
    const temp = [...tasks];

    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };

    temp.push(newTask);

    setTasks(temp);

    setText('');
  };
  const markDone = () => {
    console.log('markDone');
  };

  const deleteFunction = () => {
    console.log('delete');
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