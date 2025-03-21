import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Button,
    Image,

} from "react-native";
import React, { useState } from "react";




const Child2 = (props) => {


    return (


        <View>
            <Text>{props.secondvalue}</Text>
            <Text>this is child 2</Text>
        </View>
    );
};

export default Child2;

const styles = StyleSheet.create({

});
