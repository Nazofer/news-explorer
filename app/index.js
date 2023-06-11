import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS, icons, SIZES } from '../constants';
import { Welcome, ScreenHeaderBtn, PopularNews } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <PopularNews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
