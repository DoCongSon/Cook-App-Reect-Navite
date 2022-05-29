import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({ data, navigation }) => {
  const renderItem = ({ item }) => {
    return <MealItem dataItem={item} onSelectMeal={() => navigation.navigate('MealDetail', { mealId: item.id })} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} style={{ width: '100%' }} />
    </View>
  );
};
const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center' } });

export default MealList;
