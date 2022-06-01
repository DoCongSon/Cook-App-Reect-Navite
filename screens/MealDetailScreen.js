import React, { useEffect, useContext } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favoritesSlice';

const ListItem = ({ children, index }) => {
  return (
    <View style={styles.ListItem}>
      <DefaultText style={styles.text}>
        <DefaultText style={{ color: Colors.primary }}>{index}</DefaultText>: {children}
      </DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ navigation, route }) => {
  const { mealId } = route.params;
  const SelectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteMeal = () => {
    if (mealIsFavorite) {
      // favoriteMealContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useEffect(() => {
    const headerTitle = SelectedMeal.title.length > 23 ? SelectedMeal.title.slice(0, 20) + '...' : SelectedMeal.title;
    const options = {
      headerTitle: headerTitle,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='favorite'
              iconName={mealIsFavorite ? 'ios-star' : 'ios-star-outline'}
              onPress={changeFavoriteMeal}
            />
          </HeaderButtons>
        );
      },
    };

    navigation.setOptions(options);
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: SelectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.mealDetail}>
        <DefaultText style={styles.text}>{SelectedMeal.duration}m</DefaultText>
        <DefaultText style={styles.text}>{SelectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText style={styles.text}>{SelectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <DefaultText style={styles.title}>Ingredients</DefaultText>
      {SelectedMeal.ingredients.map((ingredient, index) => (
        <ListItem index={index + 1} key={ingredient}>
          {ingredient}
        </ListItem>
      ))}
      <DefaultText style={styles.title}>Steps</DefaultText>
      {SelectedMeal.steps.map((step, index) => (
        <ListItem index={index + 1} key={step}>
          {step}
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 5,
    padding: 10,
  },
  container: { flex: 1 },
  image: {
    width: '100%',
    height: 200,
  },
  mealDetail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 22,
    textAlign: 'center',
    color: Colors.blue,
  },
  text: {
    fontSize: 16,
  },
});

export default MealDetailScreen;
