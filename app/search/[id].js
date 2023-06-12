import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import axios from 'axios';

import { ScreenHeaderBtn, NearbyJobCard } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from './search.style';
import PopularNewsCard from '../../components/common/cards/popularNewsCard/PopularNewsCard';

const SearchNews = () => {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.id;
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);
  
  const fetchData = async () => {
    setSearchLoader(true);
    setSearchResult([]);
    const options = {
      method: 'GET',
      url: `https://newsapi.org/v2/everything`,
      params: {
        q: query,
        apiKey: '92dc3b19a99f441289468d6a8aee3fad',
        sortBy: 'publishedAt',
        page: page.toString(),
        pageSize: 10,
        language: 'en',
      },
    };

    try {
      const response = await axios.request(options);
      setSearchResult(response.data?.articles);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
      console.log(searchResult);
    }
  }, [query]);

  const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      fetchData();
    } else if (direction === 'right') {
      setPage(page + 1);
      fetchData();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: '',
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <PopularNewsCard
            item={item}
            handleNavigate={() =>
              router.push(`/news-details/${item.source.name}`)
            }
          />
        )}
        keyExtractor={() => Math.random().toString(36).substring(2, 9)}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{query}</Text>
              <Text style={styles.noOfSearchedJobs}>Searched news:</Text>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size='large' color={COLORS.primary} />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('left')}
            >
              <Image
                source={icons.chevronLeft}
                style={styles.paginationImage}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('right')}
            >
              <Image
                source={icons.chevronRight}
                style={styles.paginationImage}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchNews;
