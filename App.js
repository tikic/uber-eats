import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DushDetailsScreen from './src/screens/DushDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrdersScreen';
import OrderDetails from './src/screens/OrderDetails';




export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DushDetailsScreen /> */}
      {/* <Basket/>
       */}
       {/* <OrderScreen />
        */}

        <OrderDetails />
      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
