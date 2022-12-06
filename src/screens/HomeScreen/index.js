import { StyleSheet, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import RestaurantItem from '../../../src/components/RestorauntItem';
import {DataStore, Auth} from 'aws-amplify'
import {Restaurant} from '../../models'




const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaraunt = async() => {
    try {
      const result = await DataStore.query(Restaurant);
      setRestaurants(result);

      console.log(result)
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    fetchRestaraunt()
  }, [])

  return (
    <View style={{padding: 10}}>
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