import React from 'react';
import { View, StyleSheet, Platform, Pressable } from 'react-native';
import DefaultText from './DefaultText';

const CategoryGirdTile = ({ title, color, onChange }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [{ flex: 1, backgroundColor: color }, pressed ? { opacity: 0.5 } : null]}
        onPress={onChange}>
        <View style={styles.container}>
          <DefaultText style={styles.title}>{title}</DefaultText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    textAlign: 'right',
  },
});

export default CategoryGirdTile;
