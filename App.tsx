import { Text, SafeAreaView, StyleSheet } from 'react-native';
import BikeShop from './assets/web/component/index.tsx'
import { Provider } from 'react-redux';
import { store } from './assets/web/redux/store';
import AddBike from './assets/web/component/AddBike.tsx';

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <BikeShop/>
          {/* <AddBike/> */}
        </SafeAreaView>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
