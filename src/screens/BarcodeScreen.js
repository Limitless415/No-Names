import BarcodeCreator, { BarcodeFormat } from '@kichiyaki/react-native-barcode-generator';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const BarcodeScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

  return <View style={styles.background}>
    <Text style={styles.texter} > </Text>
    {/* <QRCode style={styles.qrCode} value={searchTerm}/> */}
    <BarcodeCreator value={searchTerm} />
    <Text style={styles.texter} >ID#: {searchTerm}</Text>
    <SearchBar searchTerm={searchTerm} onTermChange={(newTerm) => setSearchTerm(newTerm) }
            onSearchTermSubmit={() => { (newTerm) => setSearchTerm(newTerm) }} style={styles.searchbar}/>
    <Navbar />
  </View>;
  
}

const styles = StyleSheet.create({
  background: {
    // //   marginTop: 100,
    //   // backgroundColor: '#cccccc',
    //   // height: 50,
    // //   borderRadius: 5,
    //   // marginHorizontal: 80,
    //   // flexDirection: 'row',
    //   // marginBottom: 10
       flexDirection: 'column',
       alignItems: "center",
    //   justifyContent: "space-around", 
    // //   borderWidth: 3,
    // //   borderColor: 'red'
      height: 450,
      flex: 1,
      overflow: 'scroll'
  },
  inputStyle : {
    borderWidth: 3,
    borderColor: 'red'
  },
  qrCode : {
    borderWidth: 3,
    borderColor: 'red',
    height: 2000
  },
  texter : {
    // borderWidth: 3,
    // borderColor: 'red'
    fontSize: 30
  },
  // searchbar : {
  //   borderWidth: 3,
  //   borderColor: 'red'
  // },
  iconStyle : {
      fontSize: 40,
      alignSelf: 'center',
      marginHorizontal: 10
  }

});

export default BarcodeScreen;





