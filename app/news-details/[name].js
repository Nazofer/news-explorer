import {
  Stack,
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from 'expo-router';
import { useCallback, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import Company from '../../news-details/company/Company';
import { ScreenHeaderBtn } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import { useSelector } from 'react-redux';
import Footer from '../../news-details/footer/Footer';
import About from '../../news-details/about/About';

const NewsDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { name } = params;
  const newsItem = useSelector((state) => state.news.newsItem);
  // console.log(newsItem.content);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: '',
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          {!newsItem ? (
            <Text>Something went wrong!</Text>
          ) : (
            <>
              <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                <Company
                  image={newsItem.urlToImage}
                  title={newsItem.title}
                  name={newsItem.source.name}
                  author={newsItem.author}
                />
              <About info={newsItem.content}/>
              </View>
            </>
          )}
        </ScrollView>

        <Footer url={newsItem?.url} />
      </>
    </SafeAreaView>
  );
};

export default NewsDetails;
