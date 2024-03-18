import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from './navigationString';
import HomeStack from '../screens/Home/HomeStack';
import SearchStack from '../screens/Search/SearchStack';
import PostStack from '../screens/Post/PostStack';
import NotificationStack from '../screens/Notification/NotificationStack';
import ProfileStack from '../screens/Profile/ProfileStack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import Colors from '../constonts/Colors';


const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === navigationString.tabs.homeTab) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === navigationString.tabs.searchTab) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === navigationString.tabs.postTab) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === navigationString.tabs.notificationTab) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === navigationString.tabs.profileTab) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={26} color={isDark?(focused?Colors.light.primary:"gray"):(focused?Colors.light.primary:"gray")} />;
        },
        tabBarStyle: {
          backgroundColor: isDark ? Colors.light.background : Colors.light.background,
          borderTopColor: 'rgba(0, 0, 0, 0.1)',
          // minHeight: 80,
          // marginBottom: 100,
          // paddingBottom:5
          padding:5

        },
        tabBarActiveTintColor:Colors.dark.primary,
        labelStyle: {
          // fontSize: 12,
          // marginTop: -15, // Adjust vertical position of label
        },
      })}
    >
      <Tab.Screen
        name={navigationString.tabs.homeTab}
        component={HomeStack}
        options={{ title: 'Search', headerShown: false }}
      />
      <Tab.Screen
        name={navigationString.tabs.searchTab}
        component={SearchStack}
        options={{ title: 'Search', headerShown: false }}
      />
      <Tab.Screen
        name={navigationString.tabs.postTab}
        component={PostStack}
        options={{ title: 'Post', headerShown: false }}
      />
      <Tab.Screen
        name={navigationString.tabs.notificationTab}
        component={NotificationStack}
        options={{ title: 'Notifications', headerShown: false }}
      />
      <Tab.Screen
        name={navigationString.tabs.profileTab}
        component={ProfileStack}
        options={{ title: 'Profile', headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;