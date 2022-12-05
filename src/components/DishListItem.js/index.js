import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const DishListItem = ({dish}) => {
    const navigation = useNavigation()
  return (
    <Pressable style={styles.container} onPress={() => {
        navigation.navigate('Dish')
    }}>
        <View style={{flex: 1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.price}>{dish.price}</Text>
        </View>

        {dish.image && 
            <Image source={{uri: dish.image}} style={styles.dishImage}/>
        }
    </Pressable>
  )
}

export default DishListItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flexDirection: 'row'

    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: .5
    },
    description: {
        color: 'gray',
        marginVertical: 5
    },
    price: {
        fontSize: 16,
    },
    dishImage: {
       height: 75,
       aspectRatio: 1,    
    }
})