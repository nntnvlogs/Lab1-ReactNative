import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { memo } from 'react';

const Screen1d = () => {
    return (
        <View style={styles.containerFS}>
            <View style={styles.Header}>
                <Text style={styles.txtHeader}>LOGIN</Text>
            </View>
            <View style={styles.Button}>
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor='black'
                    keyboardType="default"
                    style={styles.inputButton}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='black'
                    
                    style={styles.inputButton}
                />
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.txtLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text>When you agree to terms and conditions</Text>
                <TouchableOpacity>
                    <Text style={styles.txtForgot}>Forgot your password?</Text>
                </TouchableOpacity>
                <Text>Or login with</Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image 
                            source={require('../../assets/img/fbLogo.png')} 
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image 
                            source={require('../../assets/img/googleLogo.png')} 
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image 
                            source={require('../../assets/img/github-logo.png')} 
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerFS: { flex: 1, alignItems: "center", backgroundColor: "#D8EFDF" },
    Header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    Button: {
        flex: 1.5,
        width: '100%',
        alignItems: 'center'
    },
    inputButton: {
        backgroundColor: '#CAE1D1',
        width: '90%',
        height: 40,
        marginVertical: 20,
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
    txtLogin: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtForgot:{
        color:'#5D25FA' 
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        width:'100%'
    },
    socialButtons: {
        flexDirection: 'row',
        width: '90%',
        justifyContent:'space-around',
        marginTop:20
    },
    socialButton: {
        
    },
    socialIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
});

export default memo(Screen1d);
