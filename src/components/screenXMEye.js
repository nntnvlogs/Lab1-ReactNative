import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Biểu tượng chính */}
      <Image source={require('../../assets/img/image.png')} style={styles.logo} />

      {/* Nhập tài khoản */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} color="gray" />
        <TextInput style={styles.input} placeholder="Please input user name" />
      </View>

      {/* Nhập mật khẩu */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="gray" />
        <TextInput style={styles.input} placeholder="Please input password"  />
      </View>

      {/* Nút Đăng Nhập */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Đăng ký và Quên mật khẩu */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Phương thức đăng nhập khác */}
      <Text style={styles.otherMethodsText}>Other Login Methods</Text>

      {/* Nút đăng nhập khác */}
      <View style={styles.otherMethodsContainer}>
        <TouchableOpacity>
          <Icon name="user-plus" size={74} color="dodgerblue" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="wifi" size={74} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="facebook" size={74} color="dodgerblue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 140,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomWidth:.4,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginVertical: 20,
    width:'80%',
    alignItems:'center'
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  optionText: {
  },
  otherMethodsText: {
    color: 'black',
    marginBottom: 20,
  },
  otherMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default LoginScreen;
