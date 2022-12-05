import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import restaurants from '../../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem'

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>


      <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 19}}>Your items</Text>

      <FlatList 
        renderItem={({item}) => <BasketDishItem basketDish={item}/>}
        data={restaurant.dishes} />


      <View style={styles.separator}/>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>

    </View>
  )
}

export default Basket

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40, // temp fix
        padding: 10,
      },
      name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
      },
      description: {
        color: "gray",
      },
      separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
      },
      quantity: {
        fontSize: 25,
        marginHorizontal: 20,
      },
      button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
      },
      buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
      },
      button: {
            backgroundColor: 'black',
            marginTop: 'auto',
            padding: 20,
            alignItems: 'center'
      },
      buttonText: {
            color: 'white',
            fontWeight: '600',
            fontSize: 20
      },
      quantityContainer: {
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
      },
})