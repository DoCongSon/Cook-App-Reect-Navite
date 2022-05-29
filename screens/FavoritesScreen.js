import React, { useEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Your Favorites' });
  }, []);
  const displayedMeals = MEALS.filter((meal) => ['m1', 'm2', 'm3', 'm4'].includes(meal.id));

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default FavoritesScreen;
