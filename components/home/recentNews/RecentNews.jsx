import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './recentnews.style';
import { COLORS } from '../../../constants';
import RecentNewsCard from '../../common/cards/recentNewsCard/RecentNewsCard';
import useFetch from '../../../hook/useFetch';
import { useDispatch } from 'react-redux';
import { addNewsItem } from '../../../store/store';

const RecentNews = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('everything', {
    q: 'news',
    sortBy: 'publishedAt',
    pageSize: 10,
  });
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent News</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading && (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        )}
        {error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((item) => (
            <RecentNewsCard
              item={item}
              key={Math.random().toString(36).substring(2, 9)}
              handleNavigate={() => {
                router.push({
                  pathname: `/news-details/${item.source.name}`,
                });
                dispatch(addNewsItem(item));
              }}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default RecentNews;
