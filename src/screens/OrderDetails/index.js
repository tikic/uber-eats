import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'


import restaurants from '../../../assets/data/restaurants.json'
import orders from '../../../assets/data/orders.json'
import OrderListItem from '../../components/OrderListItem'
import BasketDishItem from '../../components/BasketDishItem'

const order = orders[0]

const OrderDetailsHeader = () => {
  return (
    <View style={{flex: 1}}>
     <View style={styles.page}>
            <Image source={{uri: order.Restaurant.image}} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>
                <Text style={styles.subTitle}>{order.status} 2 days ago</Text>
                <Text style={styles.menuTitle}>Your order</Text>
            </View>

    </View>
    
    </View>
    
  )
}

const OrderDetails = () => {
    return (

            <FlatList 
                ListHeaderComponent={() => <OrderDetailsHeader />}
                data={restaurants[0].dishes} 
                renderItem={({item}) => <BasketDishItem basketDish={item} />}
            /> 
  
    )
}

export default OrderDetails

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