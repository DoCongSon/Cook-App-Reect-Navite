import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';

const MealItem = ({ onSelectMeal, dataItem }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android') {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.container}>
      <TouchableComponent onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: dataItem.imageUrl }} style={styles.backgroundImg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {dataItem.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{dataItem.duration}m</Text>
            <Text>{dataItem.complexity.toUpperCase()}</Text>
            <Text>{dataItem.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 200,
    flex: 1,
    backgroundColor: '#E8F9FD',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    // backgroundColor: 'rgba(255,255,255,0.6)',
    // paddingVertical: 3,
    // paddingHorizontal: 5,
    textAlign: 'center',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
});

export default MealItem;
