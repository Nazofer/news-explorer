import { useReducer, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Stay informed with our News!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Welcome;
