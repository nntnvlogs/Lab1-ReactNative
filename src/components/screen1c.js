import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { memo } from 'react';
import { LinearGradient } from "expo-linear-gradient";

const Screen1b = () => {
    return (
        <View style={styleFirstScreen.containerFS}>
            <View style={styleFirstScreen.wrapHeader}>
                <Text style={styleFirstScreen.txtHeader}>CODE</Text>
            </View>
            <View style={styleFirstScreen.wrapBody}>
                <Text style={styleFirstScreen.textBody}>VERIFICATION</Text>
                <Text style={styleFirstScreen.textBodySub}>
                    Enter onetime password sent on{'\n'}++84909265798
                </Text>
            </View>
            <View style={styleFirstScreen.rowContainer}>
                {/* Tạo 6 ô nhập liệu */}
                {Array.from({ length: 6 }, (_, index) => (
                    <TextInput
                        key={index}
                        style={styleFirstScreen.inputBox}
                        keyboardType="default"
                    />
                ))}
            </View>
            <LinearGradient colors={['#ccf4f7', '#00ccf9']} style={styleFirstScreen.wrapFooter}>
                <View style={styleFirstScreen.wrapButton}>
                    <TouchableOpacity style={styleFirstScreen.button}>
                        <Text style={styleFirstScreen.txtButton}>VERIFY CODE</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styleFirstScreen = StyleSheet.create({
    containerFS: { flex: 1, alignItems: "center", backgroundColor: "#ccf4f7" },
    txtHeader: { fontSize: 60, fontWeight: "700" },
    wrapHeader: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center" },
    wrapBody: { flex: 1, width: "100%", alignItems: "center", justifyContent: 'space-around' },
    textBody: { fontSize: 25, fontWeight: "700" },
    textBodySub: { fontSize: 15, fontWeight: 'bold', textAlign: 'center' },
    rowContainer: { flexDirection: 'row', justifyContent: 'center', width: '90%',marginVertical:30},
    inputBox: { 
        width: '14%', // Mỗi ô chiếm 1/6 chiều rộng 
        height: 50, 
        borderWidth: 1, 
        textAlign: 'center' 
    },
    wrapFooter: { width: "100%", paddingBottom: 80 },
    wrapButton: { width: "100%", alignItems: "center" },
    button: { height: 50, width: "90%", backgroundColor: "#e3c000", justifyContent: "center", alignItems: "center", marginBottom: 20 },
    txtButton: { fontSize: 20, fontWeight: "700" }
});

export default memo(Screen1b);
