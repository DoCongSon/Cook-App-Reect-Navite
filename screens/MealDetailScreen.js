import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ navigation, route }) => {
  const { mealId } = route.params;
  const SelectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    const headerTitle = SelectedMeal.title.length > 23 ? SelectedMeal.title.slice(0, 20) + '...' : SelectedMeal.title;
    const options = {
      headerTitle: headerTitle,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='favorite'
              iconName='ios-star'
              onPress={() => {
                console.log('favorite');
              }}
            />
          </HeaderButtons>
        );
      },
    };

    navigation.setOptions(options);
  }, []);

  return (
    <View style={styles.container}>
      <Text>MealDetailScreen {mealId}</Text>
      <Text>MealDetailScreen {SelectedMeal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center' } });

export default MealDetailScreen;
