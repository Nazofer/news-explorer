import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularnews.style';
import { COLORS, SIZES } from '../../../constants';
import PopularNewsCard from '../../common/cards/popularNewsCard/PopularNewsCard';
import useFetch from '../../../hook/useFetch';
import { useState } from 'react';

const PopularNews = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('everything', {
    q: 'news',
    sortBy: 'popularity',
    pageSize: 10,
  });

  const [selectedNews, setSelectedNews] = useState();

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
                handleNavigate={() =>  router.push({
                  pathname: `/news-details/${item.source.name}`, // or whatever your details route is
                  params: { item: item }, // Pass the data as a parameter
                })}
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
