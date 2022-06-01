import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const FilterSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.filtersContainer}>
      <DefaultText style={styles.filterLabel}>{label}</DefaultText>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ true: Colors.blue, false: Colors.blue }}
        thumbColor={Colors.green}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation, route }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appLiedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appLiedFilter);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Filter Meals',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='save' iconName='ios-save' onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <DefaultText style={styles.title}>Available filters / Restrictions</DefaultText>
      <FilterSwitch label='Gluten-free' value={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose-free' value={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegan' value={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
      <FilterSwitch label='Vegetarian' value={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 20, textAlign: 'center', textTransform: 'uppercase', marginVertical: 15, color: Colors.blue },
  filtersContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterLabel: {
    fontFamily: 'Poppins-Regular',
  },
});

export default FiltersScreen;
