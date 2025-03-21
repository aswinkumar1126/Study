import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
  ScrollView,
  SectionList,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Child1 from "../components/child1";


const HomeScreen = () => {

const [data, setData] = useState('');


function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json()) // Parse JSON response
    .then((json) => {
      setData(json); // Store the data in state
      setLoading(false); // Set loading to false
    })
    .catch((error) => {
      console.error(error); // Log any errors
      setLoading(false); // Set loading to false
    });
}


  return (

    <SafeAreaView style={{ flex: 1 }}>
      
      <View>
        <Text>{data.title}</Text>
        <Text>{data.body}</Text>
        <Child1 firstvalue={data.title} />
      </View>
      <Button title="Fetch Data" onPress={fetchData} />
    </SafeAreaView>



  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "blue",
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
  },
});
