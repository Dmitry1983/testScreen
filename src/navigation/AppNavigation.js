import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {blankScreen, wineScreen} from '../screens/tabs/';
import {Header} from '../components';
import {COLOR} from '../constants/theme';
import {Home, Wineries, Wines, Favorites, Profile} from '../assets/SvgIcons';

const Tab = createBottomTabNavigator();

const tabBarLabelStyleCustom = {
  fontFamily: 'PTSerif-Bold',
  fontSize: 12,
  marginBottom: 5,
  fontWeight: '900',
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Wines'}
        screenOptions={{
          headerMode: 'screen',
          tabBarStyle: {
            height: 85,
            backgroundColor: COLOR.CLR_WHITE_01,
          },

          tabBarActiveTintColor: COLOR.CLR_GRAY,
          tabBarInactiveTintColor: COLOR.CLR_GRAY_LIGHT,
          header: props => <Header {...props} />,
        }}>
        <Tab.Screen
          name="Home"
          component={blankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) => (
              <Home
                color={focused ? COLOR.CLR_GRAY : COLOR.CLR_GRAY_LIGHT}
                props={{height: 32}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wineries"
          component={blankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) => (
              <Wineries
                color={focused ? COLOR.CLR_GRAY : COLOR.CLR_GRAY_LIGHT}
                props={{height: 32}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wines"
          component={wineScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) => (
              <Wines
                color={focused ? COLOR.CLR_GRAY : COLOR.CLR_GRAY_LIGHT}
                props={{height: 32}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={blankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            tabBarIcon: ({focused}) => (
              <Favorites
                color={focused ? COLOR.CLR_GRAY : COLOR.CLR_GRAY_LIGHT}
                props={{height: 32}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={blankScreen}
          options={{
            tabBarLabelStyle: tabBarLabelStyleCustom,
            //  tabBarBadge: 1,
            tabBarIcon: ({focused}) => (
              <Profile
                color={focused ? COLOR.CLR_GRAY : COLOR.CLR_GRAY_LIGHT}
                props={{height: 32}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
