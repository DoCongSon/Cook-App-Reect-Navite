import React, { useEffect } from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const categorySelected = CATEGORIES.find((c) => c.id === categoryId);

  useEffect(() => {
    navigation.setOptions({ title: categorySelected.title });
  }, []);

  const displayedMeals = MEALS.filter((meals) => meals.categoryIds.includes(categoryId));

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
