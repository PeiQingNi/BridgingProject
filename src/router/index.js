import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/Home';
import ActivityIndicatorComponent from '../pages/ActivityIndicatorComponent';
import ButtonComponent from '../pages/ButtonComponent';
import DatePickerIOSComponent from '../pages/DatePickerIOSComponent';
import DrawerLayoutAndroidComponent from '../pages/DrawerLayoutAndroidComponent';
import ImageComponent from '../pages/ImageComponent';
import ImageBackgroundComponent from '../pages/ImageBackgroundComponent';
import KeyboardAvoidingViewComponent from '../pages/KeyboardAvoidingViewComponent';
import MaskedViewIOSComponent from '../pages/MaskedViewIOSComponent';
import ModalComponent from '../pages/ModalComponent';

import RefreshControlComponent from '../pages/RefreshControlComponent';
import SafeAreaViewComponent from '../pages/SafeAreaViewComponent';
import ScrollViewComponent from '../pages/ScrollViewComponent';
import SectionListComponent from '../pages/SectionListComponent';
import SegmentedControlIOSComponent from '../pages/SegmentedControlIOSComponent';
import SliderComponent from '../pages/SliderComponent';
import StatusBarComponent from '../pages/StatusBarComponent';
import SwitchComponent from '../pages/SwitchComponent';
import TextComponent from '../pages/TextComponent';
import TextInputComponent from '../pages/TextInputComponent';
import ViewComponent from '../pages/ViewComponent';
import VirtualizedListComponent from '../pages/VirtualizedListComponent';
import WebViewComponent from '../pages/WebViewComponent';

const HomeNavigator = createStackNavigator({
  Home,
  ActivityIndicatorComponent,
  ButtonComponent,
  DatePickerIOSComponent,
  DrawerLayoutAndroidComponent,
  ImageComponent,
  ImageBackgroundComponent,
  KeyboardAvoidingViewComponent,
  MaskedViewIOSComponent,
  ModalComponent,

  RefreshControlComponent,
  SafeAreaViewComponent,
  ScrollViewComponent,
  SectionListComponent,
  SegmentedControlIOSComponent,
  SliderComponent,
  StatusBarComponent,
  SwitchComponent,
  TextComponent,
  TextInputComponent,
  ViewComponent,
  VirtualizedListComponent,
  WebViewComponent,
});

export default createAppContainer(HomeNavigator);
