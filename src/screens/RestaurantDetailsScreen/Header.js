import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const RestaurantHeader  = ({ restaurant }) => {
  return (
    <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image} />

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                    
                    <Text style={styles.subTitle}> {restaurant.deliveryFee.toFixed(1)} {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
                    <Text style={styles.menuTitle}>Menu</Text>
            </View>

 </View>
  )
}

export default RestaurantHeader;

const styles = StyleSheet.create({
    page: {
        flex: 1,
      },
      image: {
        width: '100%',
        aspectRatio: 5/3,
      },
      menuTitle: {
        marginTop: 10,
        fontSize: 18,
        letterSpacing: .7
      },
      title: {
        fontSize: 35, 
        fontWeight: '600',
        marginVertical: 10
      },
      subTitle: {
        fontSize: 15,
        color: 'grey'
      },
      container: {
        margin:  10
      }  

})