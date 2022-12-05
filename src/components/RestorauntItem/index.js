import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'

const RestorauntItem = ({restaurant}) => {

  const navigation = useNavigation();

    const {
      name, 
      image, 
      deliveryFee,
      minDeliveryTime, 
      rating,
      maxDeliveryTime} = restaurant;

     const onPress = () => {
      navigation.navigate('Restaurant', {id: restaurant.id})
     } 

    return (
        <Pressable style={styles.restorauntContainer} onPress={onPress}>

          <View style={styles.imageCOntainer}>
            <Image style={styles.image} source={{uri: image}}/>
            <AntDesign name="hearto" size={24} color="white" style={styles.icon}/>
          </View>
    

           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                  <Text style={styles.title}>{name}</Text>
                  <Text style={styles.subtitle}>${deliveryFee} &#8226; {minDeliveryTime} - {maxDeliveryTime} minutes</Text>
              </View>
          

              <View style={styles.rating}>
                <Text>{rating}</Text>
                </View> 
           </View>
         </Pressable>
      )
}

export default RestorauntItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
      },
      restorauntContainer :{
        width: "100%",
        marginVertical: 10
      },
      image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5
      },
      title: {
        fontSize: 16,
        fontWeight: '500',
        marginVerical: 10
      },
      subtitle: {
        color: 'grey',
      }, 
      rating: {
        backgroundColor: '#F8F8F8',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
      icon: {
        position: 'absolute',
        top: 15,
        right:15
      }
})