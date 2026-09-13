import React from 'react-native';
import styles from './Styles';
import {Task} from './App';

import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

interface item {
    item: Task;
};
  
export default function RenderItem(item: item) {
    return (
        <View style={styles.itemcontainer}>
          <TouchableOpacity>
            <Text style={item.done ? styles.donetext : styles.text}>{item.title}</Text>
            <Text style={item.done ? styles.donetext : styles.text}>Due date: {item.date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {item.done && (
            <TouchableOpacity style={styles.removebutton}>
            <Text style={styles.whitetext}>Delete</Text>
            </TouchableOpacity> )
          }
        </View>
      );
}