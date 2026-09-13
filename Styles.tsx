
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      /*justifyContent: 'flex-end',
      height: 120,
      alignItems: 'flex-start',*/
      backgroundColor: '#FFF',
      width: '100%',
      padding: 20,
      marginTop: 40,
    }, 
    title: {
      fontSize: 20,
      color: '#403728',
    },
    subtitle: {
      fontSize: 14,
      color: '#403728',
    },
    text: {
      fontSize: 16,
      color: '#403728',
    },
    datetext: {
      fontSize: 14,
      color: '#756A59',
    },
    whitetext: {
      fontSize: 16,
      color: '#FFF',
    },
    donetext: {
      fontSize: 16,
      color: '#403728',
      textDecorationLine: 'line-through',
    },
    donedatetext: {
      fontSize: 14,
      color: '#756A59',
      textDecorationLine: 'line-through',
    },
    textinput: {
      borderColor: '#403728',
      borderWidth: 1,
      /*backgroundColor: '#EFE5D8',*/
      backgroundColor: '#F4EEE1',
      width: Dimensions.get('screen').width * 0.65,
      height: 40,
      borderRadius: 4,
      paddingLeft: 10,
    },
    inputcontainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    addbutton: {
      /*backgroundColor: '#D3B792',*/
      borderColor: '#403728',
      borderWidth: 1,
      backgroundColor: '#F4EEE1',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('screen').width * 0.2,
      height: 40,
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
      /*borderWidth: 1,
      borderColor: '#FFF',*/
    }
  });

export default styles;