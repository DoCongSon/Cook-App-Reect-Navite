import React from 'react';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const optionsNavigator = {
  headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white' },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerTitleAlign: 'center',
};

const screenOptions = ({ route }) => ({
  headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white' },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerTitleAlign: 'center',
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'MealsNavigator') {
      iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
    } else if (route.name === 'FavoritesNavigator') {
      iconName = focused ? 'ios-star' : 'ios-star-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textTransform: 'uppercase',
  },
});

const buttonDrawerShow = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='menu'
        iconName='ios-menu'
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

function MealsNavigator() {
  return (
    <Stack.Navigator screenOptions={optionsNavigator}>
      <Stack.Screen name='Categories' component={CategoriesScreen} options={buttonDrawerShow} />
      <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

function FavoritesNavigator() {
  return (
    <Stack.Navigator screenOptions={optionsNavigator}>
      <Stack.Screen name='Favorites' component={FavoritesScreen} options={buttonDrawerShow} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

function FiltersNavigator() {
  return (
    <Stack.Navigator screenOptions={optionsNavigator}>
      <Stack.Screen name='Filters' component={FiltersScreen} options={{ title: 'Filters' }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='MealsNavigator'
        component={MealsNavigator}
        options={{ headerShown: false, tabBarLabel: 'Meals', title: 'Meals Category' }}
      />
      <Tab.Screen
        name='FavoritesNavigator'
        component={FavoritesNavigator}
        options={{ headerShown: false, tabBarLabel: 'Favorites' }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={TabNavigator} options={{ headerShown: false }} />
        <Drawer.Screen name='Filter' component={FiltersNavigator} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
