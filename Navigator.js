import { createStackNavigator ,createAppContainer ,createDrawerNavigator} from 'react-navigation';
import Language from './Language.js';
import SelectType from './SelectType.js';
import Slider from './Slider.js';
import Login from './Login.js';
import Otp from './Otp.js';
import Category from './Category.js';
import SetFilter from './SetFilter.js';
import Signup from './Signup.js';
import Privacy from './Privacy.js';
import News from './News.js';
import Upcoming from './Upcoming.js';
import JobDetail from './JobDetail.js';
import Healthcare from './Healthcare.js';
import Home from './Home.js';
import Drawer from './Drawer.js';
import SavedJob from './SavedJob.js';
import Media from './Media.js';
import Notification from './Notification.js';
import Newsdetail from './Newsdetail.js';
import About from './About.js';
import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Button} from 'react-native';



const StackNavigator = createStackNavigator({


   Language: { screen: Language },
   SelectType: { screen: SelectType },
   Slider: { screen: Slider },
   Login: { screen: Login },
   Signup: { screen: Signup },
   News: { screen: News },
    Media: { screen: Media },
      Notification: { screen: Notification },
      About: { screen: About },
      Privacy: { screen: Privacy },
      Healthcare: { screen: Healthcare },
        SavedJob: { screen: SavedJob },
        Category: { screen: Category },
          SetFilter: { screen: SetFilter },
            JobDetail: { screen: JobDetail },
          Home: { screen: Home },
          Drawer: { screen: Drawer },
   Newsdetail: { screen: Newsdetail },
   Upcoming: { screen: Upcoming },
   Otp: { screen: Otp ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#261650',
     headerTintColor: 'red',
    headerTitleStyle: { color: 'white' }
    },

  }),
  },


});

export default createAppContainer(StackNavigator);
