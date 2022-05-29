import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import CategoryGirdTile from '../components/CategoryGirdTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Category Meals' });
  }, []);

  const renderGridItem = ({ item }) => {
    return (
      <CategoryGirdTile
        title={item.title}
        color={item.color}
        onChange={() => navigation.navigate('CategoryMeals', { categoryId: item.id })}
      />
    );
  };
  return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} keyExtractor={(item) => item.id} />;
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default CategoriesScreen;
