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
import Child2 from "./child2";



const Child1 = ({ firstvalue }) => {


    return (


        <View>
            <Text>Child 12</Text>
            <Text>Child 3</Text>
            <Text>Child 4</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{firstvalue}</Text>
            <Child2 secondvalue={firstvalue} />
        </View>
    );
};

export default Child1;

const styles = StyleSheet.create({

});
