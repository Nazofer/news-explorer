import {
  Stack,
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from 'expo-router';
import { useCallback, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const tabs = ['About', 'Qualifications'];

const NewsDetails = () => {
  const router = useRouter();
  // const params = useLocalSearchParams();
  // const {item} = useSearchParams()
  // const { item } = route.params;
  const params = useLocalSearchParams();
  const { name } = params;

  console.log(name);

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
          {name ? (
            <Text>{name}</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={item.urlToImage}
                jobTitle={item.title}
                companyName={item.source.name}
                location={item.source.author}
              />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default NewsDetails;
