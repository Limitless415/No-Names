// https://blog.logrocket.com/create-customized-shareable-calendars-react-native/#using-agenda-component-advanced-use-cases 
// https://blog.expo.dev/5-easy-to-use-react-native-calendar-libraries-e830a97d5bf7
// https://www.youtube.com/watch?v=RdaQIkE47Og&t=629s

import { Agenda } from 'react-native-calendars';
import Navbar from "../components/Navbar";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native';
//import CalendarScreen from "../components/CustomCalendar";

const CalendarScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected="2022-12-05"
        items={{
          '2022-12-05': [{name: 'Chest'}], 
          '2022-12-06': [{name: 'Arms'}], 
          '2022-12-07': [{name: 'Back'}],
          '2022-12-08': [{name: 'Rest'}],
          '2022-12-09': [{name: 'Legs'}],
          '2022-12-10': [{name: 'Core'}],
          '2022-12-11': [{name: 'Rest'}],
          '2022-12-12': [{name: 'Chest'}],
          '2022-12-13': [{name: 'Arms'}],
          '2022-12-14': [{name: 'Back'}],
          '2022-12-15': [{name: 'Rest'}],
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Navbar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});

export default CalendarScreen;