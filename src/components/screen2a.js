import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen2a = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtheader}>LOGIN</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.item}>
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput
            placeholder="Name"
            style={styles.input}
            underlineColor="transparent"
            activeUnderlineColor="transparent" 
          />
        </View>
        <View style={styles.item}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.txtLogin}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnCreate}>
          <Text style={styles.txtCreate}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eec002'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  txtheader: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    width: '90%',
    marginVertical: 8,
    paddingLeft: 10
  },
  btnLogin: {
    marginTop: 40,
    width: '90%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtLogin: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  txtCreate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default memo(Screen2a);
