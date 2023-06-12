import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from '../../constants';

const Company = ({ image, title, name, author }) => {
  console.log(image, title, author, name);
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: image
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.name}>{name} / </Text>
        <View style={styles.locationBox}>
          <Text style={styles.locationName}>Written by {author}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;