import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/home/Home';
import ActivityIndicatorComponent from '../pages/home/ActivityIndicatorComponent';
import ButtonComponent from '../pages/home/ButtonComponent';
import DatePickerIOSComponent from '../pages/home/DatePickerIOSComponent';
import DrawerLayoutAndroidComponent from '../pages/home/DrawerLayoutAndroidComponent';
import ImageComponent from '../pages/home/ImageComponent';
import ImageBackgroundComponent from '../pages/home/ImageBackgroundComponent';
import KeyboardAvoidingViewComponent from '../pages/home/KeyboardAvoidingViewComponent';
import MaskedViewIOSComponent from '../pages/home/MaskedViewIOSComponent';
import ModalComponent from '../pages/home/ModalComponent';
import RefreshControlComponent from '../pages/home/RefreshControlComponent';
import SafeAreaViewComponent from '../pages/home/SafeAreaViewComponent';
import ScrollViewComponent from '../pages/home/ScrollViewComponent';
import SectionListComponent from '../pages/home/SectionListComponent';
import SegmentedControlIOSComponent from '../pages/home/SegmentedControlIOSComponent';
import SliderComponent from '../pages/home/SliderComponent';
import StatusBarComponent from '../pages/home/StatusBarComponent';
import SwitchComponent from '../pages/home/SwitchComponent';
import TextComponent from '../pages/home/TextComponent';
import TextInputComponent from '../pages/home/TextInputComponent';
import ViewComponent from '../pages/home/ViewComponent';
import VirtualizedListComponent from '../pages/home/VirtualizedListComponent';
import WebViewComponent from '../pages/home/WebViewComponent';

import Native from '../pages/native/Native';
import NativeModel from '../pages/native/NativeModel';
import MapViewComponent from '../pages/native/MapViewComponent';

import Style from '../pages/style/Style';
import FlexBoxComponent from '../pages/style/FlexBoxComponent';

import Reacts from '../pages/react/Reacts';

// todo: Stack
const Stack = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        {/*Home*/}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="ActivityIndicatorComponent"
          component={ActivityIndicatorComponent}
        />
        <Stack.Screen name="ButtonComponent" component={ButtonComponent} />
        <Stack.Screen
          name="DatePickerIOSComponent"
          component={DatePickerIOSComponent}
        />
        <Stack.Screen
          name="DrawerLayoutAndroidComponent"
          component={DrawerLayoutAndroidComponent}
        />
        <Stack.Screen name="ImageComponent" component={ImageComponent} />
        <Stack.Screen
          name="ImageBackgroundComponent"
          component={ImageBackgroundComponent}
        />
        <Stack.Screen
          name="KeyboardAvoidingViewComponent"
          component={KeyboardAvoidingViewComponent}
        />
        <Stack.Screen
          name="MaskedViewIOSComponent"
          component={MaskedViewIOSComponent}
        />
        <Stack.Screen name="ModalComponent" component={ModalComponent} />
        <Stack.Screen
          name="RefreshControlComponent"
          component={RefreshControlComponent}
        />
        <Stack.Screen
          name="SafeAreaViewComponent"
          component={SafeAreaViewComponent}
        />
        <Stack.Screen
          name="ScrollViewComponent"
          component={ScrollViewComponent}
        />
        <Stack.Screen
          name="SectionListComponent"
          component={SectionListComponent}
        />
        <Stack.Screen
          name="SegmentedControlIOSComponent"
          component={SegmentedControlIOSComponent}
        />
        <Stack.Screen name="SliderComponent" component={SliderComponent} />
        <Stack.Screen
          name="StatusBarComponent"
          component={StatusBarComponent}
        />
        <Stack.Screen name="SwitchComponent" component={SwitchComponent} />
        <Stack.Screen name="TextComponent" component={TextComponent} />
        <Stack.Screen
          name="TextInputComponent"
          component={TextInputComponent}
        />
        <Stack.Screen name="ViewComponent" component={ViewComponent} />
        <Stack.Screen
          name="VirtualizedListComponent"
          component={VirtualizedListComponent}
        />
        <Stack.Screen name="WebViewComponent" component={WebViewComponent} />

        {/* Native */}
        <Stack.Screen name="NativeModel" component={NativeModel} />
        <Stack.Screen name="MapViewComponent" component={MapViewComponent} />

        {/* Style */}
        <Stack.Screen name={'FlexBoxComponent'} component={FlexBoxComponent} />

        {/*  React  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// todo: Tab
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Native" component={Native} />
      <Tab.Screen name="Style" component={Style} />
      <Tab.Screen name={'Reacts'} component={Reacts} />
    </Tab.Navigator>
  );
}

export default AppStack;
