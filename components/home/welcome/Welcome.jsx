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

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Stay informed with our News!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            style={styles.searchInput}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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
