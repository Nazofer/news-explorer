import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./recentnewscard.style";

const RecentNewsCard = ({ item, handleNavigate }) => {
  console.log(item);
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title || item.name}
        </Text>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentNewsCard;