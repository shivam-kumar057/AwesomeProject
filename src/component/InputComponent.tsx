import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

interface props {
    placeHolder?: string,
    buttonStyle?: object,
    headingStyle?: object,
    ref?: any,
    placeholderTextColor?: string,
    onChangeText?: ((text: string) => void)
    icons?: boolean
    rightIcon?: any
    headingtext?: string,
    headingTextStyle: object
}

const InputComponent = ({ placeHolder, buttonStyle, headingStyle, ref, placeholderTextColor, onChangeText, icons, rightIcon, headingtext, headingTextStyle }: props) => {
    return (
        <View style={[styles.container, buttonStyle]}>
            <View style={[styles.heading, headingStyle]}>
                <Text> <Text style={[styles.textStyle, headingTextStyle]}>{headingtext}</Text></Text>
            </View>
            <TextInput
                ref={ref}
                placeholder={placeHolder}
                style={styles.placeHoderStyle}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
            />
            {
                icons && (<Text style={{ color: 'white' }}>{rightIcon}</Text>)
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    heading: {
        position: 'absolute',
        left: 40,
        top: -12,
        right: 0,
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    textStyle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'black',
    },
    placeHoderStyle: {
        padding: 5,
        marginLeft: 10
    }
})

export default InputComponent