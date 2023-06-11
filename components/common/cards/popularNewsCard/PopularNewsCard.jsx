import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularnewscard.style';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const PopularNewsCard = ({ item, handleNavigate }) => {
  // console.log(item.id);
  return (
    <TouchableOpacity
      style={styles.container(screenWidth)}
      onPress={handleNavigate}
    >
      <Text style={styles.title} >
        {item.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularNewsCard;