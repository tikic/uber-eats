import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem.js'
import RestaurantHeader from '../RestaurantDetailsScreen/Header'

const restaurant =  restaurants[0]

const RestaurantDetailsScreen = () => {

  return (
    <View style={styles.page}>


        <FlatList 
          ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
          renderItem={(item, index) => {
          return(
            <DishListItem dish={item.item} key={index}/>
          )
        }} data={restaurant.dishes}/> 

       <View style={styles.iconContainer}>
            <Ionicons  name='arrow-back-circle' size={45} color='white' style={styles.imageIcon} />
        </View>
    </View>
  )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer :{
    position: 'absolute',
    top: 40,
    left: 15,
    borderRadius: 50
  }, 
})