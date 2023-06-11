import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import styles from './popularnews.style';
import { COLORS, SIZES } from '../../../constants';
import PopularNewsCard from '../../common/cards/popularNewsCard/PopularNewsCard';
import useFetch from '../../../hook/useFetch';

const PopularNews = () => {
  const { data, isLoading, error } = useFetch("everything", {
    q: "news",
    sortBy: "popularity",
    pageSize: 10,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular News</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularNewsCard
                item={item}
              />
            )}
            keyExtractor={() => Math.random().toString(36).substring(2, 9)}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </ScrollView>
  );
};

export default PopularNews;
