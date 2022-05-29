import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import MainNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Poppins-Light': require('./assets/Font/Poppins-Light.ttf'),
          'Poppins-Regular': require('./assets/Font/Poppins-Regular.ttf'),
          'Poppins-SemiBold': require('./assets/Font/Poppins-SemiBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return <MainNavigator />;
}
