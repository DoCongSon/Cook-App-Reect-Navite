import React, { useEffect, useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector } from 'react-redux';

const FavoritesScreen = ({ navigation }) => {
  // const favoritesMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  useEffect(() => {
    navigation.setOptions({ title: 'Your Favorites' });
  }, []);
  const displayedMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default FavoritesScreen;
