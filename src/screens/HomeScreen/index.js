import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import RestaurantItem from '../../../src/components/RestorauntItem';
import restaurants from '../../../assets/data/restaurants.json'


const HomeScreen = () => {
  return (
    <View style={{paddingTop: 40}}>
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
            />

  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({


})