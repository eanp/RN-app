import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App =  () => {
 const [data,setData] = useState(null)

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json))
},[])
 
  return (
    <SafeAreaView >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        // translucent
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
        <View style={{height:30,width:30,backgroundColor:"skyblue",borderRadius:15,alignSelf:'center'}}/> 
      </View>
      <ScrollView>
        {/* <Text>{JSON.stringify(data)}</Text> */}
            <Text style={{fontWeight:"900",fontSize:24,margin:20}}>{data?.title ?? "-"}</Text>
          <View style={styles.box} >
            <Text style={{fontWeight:"500",fontSize:20}}>{data?.body ?? "-"}</Text>
        </View>
        
      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  box: {
    margin: 20,
    paddingTop:5,
    backgroundColor:"salmon"
  },
  header:{
    backgroundColor:"grey",
    justifyContent:"space-between",
    flexDirection:'row',
    paddingHorizontal: 20

  },
  headerText:{
    fontWeight:"bold",
    fontSize:40,
  }
});

export default App;
