import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function Form() {
const[Height, setHeight] = useState('');
const [Weight, setWeight] = useState('');
const [Imc, setImc] = useState('');

function imcCalculator()
{
    let totalImc = (Weight/(Height*Height)).toFixed(2)
    setImc(totalImc)
}

function validatorImc()
{
    if (weight != '' && height != ''){
        imcCalculator()
        setHeight('')
        setWeight('')
    }
}
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput
                 placeholder="Ex. 1.75"
                 value={height}
                 />

                 <Text>Peso:</Text>
                 <TextInput
                 placeholder="Ex. 67.5"
                 value={weight}
                 />

                 <Pressable
                     onPress={() => validatorImc()}
                 >
                    <Text>Calcular</Text>
                 </Pressable>
                    <Text>{imc}</Text>
            </View>
        </View>
    
}