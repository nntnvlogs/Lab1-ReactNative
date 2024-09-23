import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { memo } from 'react';
import { RadioButton } from 'react-native-paper';
const Screen1e = () => {
    return (
        <View style={styles.containerFS}>
            <View style={styles.Header}>
                <Text style={styles.txtHeader}>REGISTER</Text>
            </View>
            <View style={styles.Button}>
                <TextInput 
                    placeholder="Name"
                    placeholderTextColor='black'
                    keyboardType="default"
                    style={styles.inputButton}
                />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor='black'
                    
                    style={styles.inputButton}
                />
                 <TextInput
                    placeholder="Email"
                    placeholderTextColor='black'
                    
                    style={styles.inputButton}
                />
                 <TextInput
                    placeholder="Password"
                    placeholderTextColor='black'
                    
                    style={styles.inputButton}
                />
                 <TextInput
                    placeholder="Birthday"
                    placeholderTextColor='black'
                    
                    style={styles.inputButton}
                />
                <View style={styles.radios}>
                <RadioButton  value="male"/>
                <Text>Male</Text>
                <RadioButton  value="female"/>
                <Text>Female</Text>
                </View>
              
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.txtLogin}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.txtFooter}>When you agree to terms and conditions</Text>
            </View>
    
        </View>
    );
}

const styles = StyleSheet.create({
    containerFS: { flex: 1, alignItems: "center", backgroundColor: "#D8EFDF" },
    Header: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    Button: {
        flex: 2,
        width: '100%',
        alignItems: 'center'
    },
    inputButton: {
        backgroundColor: '#CAE1D1',
        width: '90%',
        height: 40,
        marginVertical: 10,
        paddingLeft: 10,
        fontSize: 16
    },
    btnLogin: {
        width: '90%',
        height: 50,
        backgroundColor: '#C34E3B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 30
    },
    txtLogin:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    radios:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    footer: {
        flex: 0.5,
        alignItems: 'center',
        width:'100%'
    }
});

export default memo(Screen1e);
