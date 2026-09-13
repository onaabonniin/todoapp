import React from 'react';
import styles from './Styles';
import {Task} from './App';

import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

interface itemProp {
    item: Task;
    markDone: (task: Task) => void;
    deleteFunction: (task: Task) => void;
};
  
export default function RenderItem({item, markDone, deleteFunction}: itemProp) {
    return (
        <View style={styles.itemcontainer}>
          <TouchableOpacity onPress={()=>markDone(item)}>
            <Text style={item.done ? styles.donetext : styles.text}>{item.title}</Text>
            <Text style={item.done ? styles.donedatetext : styles.datetext}>Due date: {item.date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {item.done && (
            <TouchableOpacity style={styles.removebutton} onPress={()=>deleteFunction(item)}>
            <Text style={styles.whitetext}>Delete</Text>
            </TouchableOpacity> )
          }
        </View>
      );
}