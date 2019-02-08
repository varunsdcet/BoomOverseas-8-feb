import React, {Component} from 'react';
import {Platform, StyleSheet,StatusBar,ActivityIndicator,AppState, Share,Text,Alert,Linking, View,Image,Dimensions,FlatList,TouchableOpacity,AsyncStorage} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
import Button from 'react-native-button';
const GLOBAL = require('./Global');
const { width, height } = Dimensions.get('window');
import { NavigationActions,StackActions } from 'react-navigation';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
const equalWidth =  (width -20 )
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);
export default class Drawer extends Component<Props> {
  back = () => {

     this.props.navigation.goBack()
    }
    static navigationOptions = {



      header: null
    };
  constructor(props) {
    super(props)


    this.state = {
      moviesList: [],
      eventLists :[],
      brandLists: [],
      moviesLists: [],
      beer: [],
      result :'',
      name :'',
      email :'',
      gender :'',
      dob :'',
      count : "0",
       appState: AppState.currentState
    }

  }
 showLoading() {
       this.setState({loading: true})
    }

    hideLoading() {
       this.setState({loading: false})
    }
  _YesLogout=()=>{

  AsyncStorage.removeItem('userID');

   this.props
   .navigation
   .dispatch(StackActions.reset({
     index: 0,
     actions: [
       NavigationActions.navigate({
         routeName: 'Sliders',
         params: { someParams: 'parameters goes here...' },
       }),
     ],
   }))



}
  showResult(result){
      this.setState({result})
    }
    componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.props.navigation.addListener('willFocus',this._handleStateChange);

  }

  _handleStateChange = state => {
 //alert('arrivals')

};


  navigateToScreen1 = (route) => () => {

    Alert.alert('Logout!','Are you sure you want to Logout?',
      [{text:"Cancel"},
        {text:"Yes", onPress:()=>this._YesLogout()
 },
      ],
      {cancelable:false}
      )

  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  componentWillReceiveProps(){

  }

  _handleAppStateChange = (nextAppState) => {

    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    this.setState({appState: nextAppState});
  }
    componentWillMount() {

    //  {this.getMoviesFromApiAsync()}
     }
    _shareMessage(){
        Share.share({message:'This is a simple shared message'}).then(this._showResult);
    }

    _fancyShareMessage(){
      Share.share({
        message:'SJI APP', url:'https://www.google.com/'
      },{
        tintColor:'green',
        dialogTitle:'Share this app via....'
      }
      ).then(this._showResult);
    }

    getMoviesFromApiAsync = () => {
    this.showLoading();
          const url = GLOBAL.BASE_URL +  'get_profile'

         fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({

       user_id :GLOBAL.user_id,

     }),
   }).then((response) => response.json())
       .then((responseJson) => {
             this.hideLoading();
           this.setState({ name: responseJson.name })
           this.setState({ email: responseJson.email })
           this.setState({ gender: responseJson.gender})
           this.setState({ dob: responseJson.dob})
          GLOBAL.username =  responseJson.name;
            GLOBAL.email =  responseJson.email;
              GLOBAL.gender =  responseJson.gender;
                GLOBAL.dob =  responseJson.dob;


       })
       .catch((error) => {
         console.error(error);
             this.hideLoading();
       });
    }
  render() {
      TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
     if(this.state.loading){
  return(
    <View style={{flex: 1 ,backgroundColor: 'black'}}>
    <ActivityIndicator style = {styles.loading}

   size="large" color="#a71817" />
    </View>
  )
}
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#261650" barStyle="light-content" />





                <KeyboardAwareScrollView contentContainerStyle={{flex: 1,backgroundColor:'#261650'}}>
         <View style={styles.content}>

          <View style = {{flexDirection :'row'}}>

         <View style = {{backgroundColor :'#261650' ,height:120 ,width :window.width ,flexDirection:'column'}}>

         <Text style = {{marginLeft :30,marginTop:20 ,color :'white',fontSize:20,fontFamily:'Poppins-Medium'}}>
          varun
         </Text>
         <Text style = {{marginLeft :30 ,color :'white',fontSize:12,fontFamily:'Poppins-Medium'}}>
         varun.singhal78@gmail.com
         </Text>

         </View>
          </View>

         <TouchableOpacity
         onPress={() =>   Linking.openURL('https://play.google.com/store')}

          >
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:17,resizeMode:'contain' }}
               source={require('./a.png')} />
 <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Home'} />

         </View>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={() =>   Linking.openURL('http://thesji.com/about-us')}

          >
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./b.png')} />

                <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'My Jobs'} />
         </View>
         </TouchableOpacity>
<TouchableOpacity onPress={this._fancyShareMessage}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./c.png')} />

                         <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Recommended Jobs'} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={() =>   Linking.openURL('http://thesji.com/contact')}

          >
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop :15,resizeMode:'contain'  }}
               source={require('./d.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Upcoming Interview'} />
         </View>
          </TouchableOpacity>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Bookmark')}

          >
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop :15 ,resizeMode:'contain' }}
               source={require('./e.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Categories'} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./f.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Saved Jobs'} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./g.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Media'} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./h.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Rate App'} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./i.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Share App'} />
         </View>
         </TouchableOpacity>

         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./j.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'About Us'} />
         </View>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./k.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'Privacy Policy'} />
         </View>
         </TouchableOpacity>

         <TouchableOpacity
          onPress={this.navigateToScreen1('Login')}>
         <View style = {{backgroundColor :'#261650',flexDirection:'row',height :50 ,width :window.width,borderBottomWidth :0 ,borderBottomColor :'#c8848c'}}>
         <Image style={{height :20,width :20,resizeMode: 'contain',marginLeft:5,marginTop:15,resizeMode:'contain'  }}
               source={require('./l.png')} />

                  <PowerTranslator style={{color :'white',fontFamily:'Poppins-Medium',marginTop : 18 ,marginLeft :15}} text={'LogOut'} />
         </View>
         </TouchableOpacity>
          </View>
           </KeyboardAwareScrollView>
       </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#261650',
    height: APPBAR_HEIGHT,



  },
    loading: {
           position: 'absolute',
           left: window.width/2 - 30,

           top: window.height/2,

           opacity: 0.5,

           justifyContent: 'center',
           alignItems: 'center'
       },
  content: {
    flex: 1,
    backgroundColor:'#000000',
  },
});
