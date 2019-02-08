import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
const { width, height } = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);

export default class Signup extends Component<Props> {
  static navigationOptions = {
    title: 'Signup',
    header: null
  };
  constructor(props) {
      super(props)
      this.state = {
      firstname : '',
      lastname :'',
      middlename :'',
      iama :'',
        email :'',
        mobile :'',
        password :'',
        register :'',
         hidden: true ,

      }
    }


    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('First Name').then(translated => {


      this.setState({ firstname: translated });

      //Do something with the translated text
   });

   translator.translate('Middle Name').then(translated => {


      this.setState({ middlename: translated });

      //Do something with the translated text
   });

   translator.translate('Last Name').then(translated => {


      this.setState({ lastname: translated });

      //Do something with the translated text
   });
   translator.translate('Email').then(translated => {


      this.setState({ email: translated });

      //Do something with the translated text
   });
   translator.translate('Mobile').then(translated => {


      this.setState({ mobile: translated });

      //Do something with the translated text
   });
   translator.translate('Password').then(translated => {


      this.setState({ password: translated });

      //Do something with the translated text
   });

   translator.translate('Register Now').then(translated => {


      this.setState({ register: translated });

      //Do something with the translated text
   });

     }
   render() {
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {{width : width ,height :APPBAR_HEIGHT ,flexDirection :'row'}} >
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style = {{margin : 20 ,height : 22 ,width : 22,resizeMode :'contain'}}
        source = {require('./close.png')}/>
          </TouchableOpacity >
           <PowerTranslator style={{fontSize : 22,fontFamily: "Poppins-Regular" ,marginTop : 14 ,marginLeft : 18 ,color :'#333333'}} text={'REGISTER'} />
        </View>
      <KeyboardAwareScrollView style = {{flex:1}}
      keyboardShouldPersistTaps={true}>
       <View style = {{flexDirection :'row',justifyContent:'space-between',marginLeft : 20,marginRight:20 ,marginTop : 22}}>

       <TextInput style  = {{width : 85 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
       placeholder = {this.state.firstname}
       placeholderTextColor = '#4c4c4c'
       />
       <TextInput style  = {{width : 85 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
       placeholder = {this.state.middlename}
       placeholderTextColor = '#4c4c4c'
       />
       <TextInput style  = {{width : 85 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
       placeholder = {this.state.lastname}
       placeholderTextColor = '#4c4c4c'
       />
 </View>

   <View style = {{width :width ,height : 40,marginLeft : 20 ,marginTop : 25 ,flexDirection : 'row'}}>
    <PowerTranslator style={{fontSize : 14,fontFamily: "Poppins-Regular" ,marginTop : 16  ,color :'#4c4c4c'}} text={'I am'} />

   <View style = {{width : 110,height : 50,flexDirection:'row',marginLeft : 15 ,borderBottomWidth :1 ,borderLeftWidth :1 ,borderRightWidth :1,borderTopWidth :1 ,borderBottomColor :'#aec0c7',borderTopColor :'#aec0c7',borderLeftColor :'#aec0c7',borderRightColor :'#aec0c7'}}>
    <Image style = {{marginLeft :2,marginTop : 12,width : 27 ,height : 27,resizeMode :'contain'}}
source = {require('./male.png')}/>
 <PowerTranslator style={{fontSize : 14,fontFamily: "Poppins-Regular" ,marginTop : 14 ,marginLeft : 7 ,color :'#333333'}} text={'Male'} />
   </View>

   <View style = {{width : 110,height : 50,flexDirection:'row',marginLeft : 15 ,borderBottomWidth :1 ,borderLeftWidth :1 ,borderRightWidth :1,borderTopWidth :1 ,borderBottomColor :'#aec0c7',borderTopColor :'#aec0c7',borderLeftColor :'#aec0c7',borderRightColor :'#aec0c7'}}>
    <Image style = {{marginLeft :2,marginTop : 12,width : 27 ,height : 27,resizeMode :'contain'}}
   source = {require('./female.png')}/>
 <PowerTranslator style={{fontSize : 14,fontFamily: "Poppins-Regular" ,marginTop : 14 ,marginLeft : 7 ,color :'#333333'}} text={'Female'} />
   </View>


   </View>

   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.email}
   placeholderTextColor = '#4c4c4c'
   />

   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.mobile}
   keyboardType={'phone-pad'}
   placeholderTextColor = '#4c4c4c'
   />
   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.password}
   placeholderTextColor = '#4c4c4c'
   secureTextEntry={this.state.hidden}
   />
   <TouchableOpacity
             onPress={ () => this.setState({ hidden: !this.state.hidden })}
           >
   <Image style = {{marginTop : -32 ,marginLeft : width - 50,height : 22 ,width : 22,resizeMode :'contain'}}
   source = {require('./toggle.png')}/>
</TouchableOpacity>
   <Button
containerStyle={{width:width-40,marginLeft : 20,marginTop : 60,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>

{this.state.register}
</Button>
<TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
   <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 12,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20,textAlign : 'center'}} text={'By Clicking here ,you agree to the Terms & Conditions '} />
</TouchableOpacity>
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
  content: {
    flex: 1
  },
});
