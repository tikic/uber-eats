import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem.js'
import RestaurantHeader from '../RestaurantDetailsScreen/Header'
import {useRoute, useNavigation} from '@react-navigation/native'

const restaurant =  restaurants[0]

const RestaurantDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const id = route.params?.id;

  return (
    <View style={styles.page}>


        <FlatList 
          keyExtractor={(item) => item.name}
          ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
          renderItem={(item, index) => {
          return(
            <DishListItem dish={item.item} key={index}/>
          )
        }} data={restaurant.dishes}/> 

       <Pressable style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <Ionicons  name='arrow-back-circle' size={45} color='white' style={styles.imageIcon} />
        </Pressable>
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