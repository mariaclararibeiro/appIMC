import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export function Form() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');

    const [imcList, setImcList] = useState([]);


    function validarImc() 
    {
        console.log(imcList);
        if (peso !== undefined && altura !== undefined) {
            let totalImc = (peso / (altura * altura)).toFixed(2);

             imcList.push(totalImc) //add um novo indice
            setImc(totalImc) //Imc recebe novo resultado

            setAltura('');
            setPeso('');
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput
                onChangeText={setAltura}
                inputMode="numeric"
                    placeholder="Ex. 1.75"
                    value={altura}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    onChangeText={setPeso}
                    inputMode="numeric"
                    placeholder="Ex. 67.5"
                    value={peso}
                    style={styles.formInput}
                />

                <Pressable 
                    onPress={validarImc} 
                    style={styles.formButtom}>

                    <Text style={styles.formButtonText}>Calcular</Text>
                </Pressable>
                <Text style={styles.maridani}>{imc}</Text>

                <FlatList
                    data={imcList.reverse()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10,
    },
    formButtom: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    formButtonText: {
        fontSize: 20,
        color: "#fff",
    },
    maridani: {
        display: "flex",
        width: 150,
        textAlign: "center",
        textShadowColor: "1",
        borderRadius: 20,
        backgroundColor: "red",
        padding: 10,
        margin: 30,
        alignItems: "center", 
        justifyContent: "center",
        fontSize: 30,
        color: "blue",
        fontWeight: "bold",
    },
});
