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
    markDone: () => void;
    deleteFunction: () => void;
};
  
export default function RenderItem({item, markDone, deleteFunction}: itemProp) {
    return (
        <View style={styles.itemcontainer}>
          <TouchableOpacity onPress={markDone}>
            <Text style={item.done ? styles.donetext : styles.text}>{item.title}</Text>
            <Text style={item.done ? styles.donetext : styles.datetext}>Due date: {item.date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {item.done && (
            <TouchableOpacity style={styles.removebutton} onPress={deleteFunction}>
            <Text style={styles.whitetext}>Delete</Text>
            </TouchableOpacity> )
          }
        </View>
      );
}