import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasketDishItem = ({basketDish}) => {
    return(<View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
        <Text style={{fontWeight: '600'}}>{basketDish.name}</Text>
        <Text style={{marginLeft: 'auto'}}>${basketDish.price}</Text>
      </View>)
}

export default BasketDishItem

const styles = StyleSheet.create({
   
      name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
        marginHorizontal: 10
      },
      quantityContainer: {
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
      },
})