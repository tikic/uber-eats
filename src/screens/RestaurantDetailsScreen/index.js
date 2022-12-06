import { StyleSheet, Text, View, Image, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem.js'
import RestaurantHeader from '../RestaurantDetailsScreen/Header'
import {useRoute, useNavigation} from '@react-navigation/native'
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";


const RestaurantDetailsScreen = () => {

  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();
  const route = useRoute()
  const id = route.params?.id;


  useEffect(() => {
    if (!id) {
      return;
    }
    // fetch the restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);


    /// Temporary solution
    DataStore.query(Dish).then((dishes) =>{
      const arr = dishes.filter((item) => item.restaurantID === id);

      setDishes(arr)
    });
  }, [id]);

  if(!restaurant){
    return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator size='large' color='gray'/>  
    </View>)
  }


  return (
    <View style={styles.page}>


        <FlatList 
          keyExtractor={(item) => item.name}
          ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
          renderItem={(item, index) => {
          return(
            <DishListItem dish={item.item} key={index}/>
          )
        }} data={dishes}/> 

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