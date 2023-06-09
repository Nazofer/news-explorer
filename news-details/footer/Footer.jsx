import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';
import { icons } from '../../constants';

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => {
          if (!url) return;
          Linking.openURL(url);
        }}
      >
        <Text style={styles.applyBtnText}>Open in browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
