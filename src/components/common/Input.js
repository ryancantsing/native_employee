import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style = {containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secure} 
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value= {value}
                onChangeText= {onChangeText}

/>
        </View>
    )
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        textAlignVertical: 'top'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}
export { Input };