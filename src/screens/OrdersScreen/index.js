import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListItem'

import orders from '../../../assets/data/orders.json'


const OrderScreen = () => {
  return (
    <View style={{flex: 1, width: '100%'}}>
        <FlatList renderItem={({item}) => <OrderListItem order={item}/>} data={orders}/>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})