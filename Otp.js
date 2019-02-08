import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View ,AsyncStorage,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CodeInput from 'react-native-confirmation-code-input';


const equalWidth =  (width/2 )
type Props = {};
export default class Otp extends Component {
  static navigationOptions = {
            title: 'MOBILE VERIFICATION',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#261650',
            },
            headerTitleStyle: {
              fontSize: 18,
            },
        };

constructor(props) {
    super(props)
    this.state = {
      mobilePlaceholder : '',
      passwordPlaceholder : '',
        forgotPassword : '',
        login : '',
      isScreen :'',
      states : false,
        moviesList: [],
        moviesLists: [],
        languageCode :"hi",
        username :'',
         backgroundColors: 'white',

    }
  }

_onFulfill(code){

}

 componentWillMount() {
  TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
   const translator = TranslatorFactory.createTranslator();
translator.translate('Enter Your Mobile no.').then(translated => {

 mobilePlaceholder = translated;
   this.setState({ mobilePlaceholder: mobilePlaceholder });

   //Do something with the translated text
});

translator.translate('Enter Your Password').then(translated => {


   this.setState({ passwordPlaceholder: translated });

   //Do something with the translated text
});

translator.translate('Forgot Password ?').then(translated => {


   this.setState({ forgotPassword: translated });

   //Do something with the translated text
});

translator.translate('LOGIN').then(translated => {


   this.setState({ login: translated });

   //Do something with the translated text
});
  }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }

 buttonClickListener = () =>{
this.props.navigation.navigate('SelectType')
};





  render() {
    var mobilePlaceholder = "";




    return (
     <KeyboardAwareScrollView style = {{flex :1}}>

     <Image style= {{resizeMode:'contain',marginTop : 50 ,marginLeft : window.width/2 - 100 ,width : 200 ,height : 150}}
         source={require('./otps.png')} />

         <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#333333',marginTop : 30,textAlign:'center' ,marginLeft :20,width : window.width -40 }} text={'We have sent you an SMS with a OTP code to your number for verification'} />

     <View style = {{flexDirection :'row'}}>
     <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#333333',marginTop : 30,textAlign:'center' ,marginLeft :window.width/2 -100,width : 160,  textDecorationLine: 'underline' }} text={'+91 - 9896904632'} />

<PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#261650',marginTop : 31, width : 200 }} text={'Edit Number'} />
     </View>

     <CodeInput
      ref="codeInputRef1"
      secureTextEntry
      className={'border-b'}
      space={5}
      size={30}
      inputPosition='center'
      activeColor = '#261650'
      inactiveColor =  '#261650'
      onFulfill={(code) => this._onFulfill(code)}
    />

<PowerTranslator style={{textAlign:'center',fontFamily: "Poppins-Medium",fontSize : 13,color :'black',marginTop : 31, width :window.width-20 ,margin :10 }} text={'Didn\'t receive the OTP?'} />

<PowerTranslator style={{textAlign:'center',fontFamily: "Poppins-Medium",fontSize : 13,color :'#261650',marginTop : 13, width :window.width-20 ,margin :10 }} text={'RESEND CODE'} />

<View style = {{marginTop : 15,width :window.width-60,marginLeft:30, height:40, borderRadius:20, backgroundColor: '#261650'}}>
 <PowerTranslator style={{textAlign :'center',fontFamily: "Poppins-Medium",padding :12 ,color :'white'}} text={'SUBMIT'} />
</View>

     </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'relative',
    width :  window.width,
    height :  window.height,
  },
  content: {
    flex: 1,
    marginTop : - window.height ,
    height: window.height,

    width : window.width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
   logoImage1: {
        marginLeft : window.width/2 - 65,
        marginTop : 60,
        width : 130,
        height :120,
        position: 'absolute',

    },

     logoImage2: {
        resizeMode: 'contain',
        width : window.width - 20,
        height :800,
        position: 'absolute',

    },
  text: {
    color : 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
     marginTop: 150,
      marginLeft: 0 ,
      width :  window.width,
      textAlign:'center'
  },
  container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    account :{
     margin : 30,
    textAlign : 'center',
    color : '#ffffff',

  } ,

createaccount :{
     margin : 30,
    color : '#ce8c04',

  } ,
  facebookicon: {
    width: 15,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },
  facebookColor: {


   flexDirection :'row',
    margin: 20,
    height: 40,

    backgroundColor: '#284ca0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },


  gmailColor: {
//de584e

   flexDirection :'row',
    marginLeft: 20,
    height: 40,
    marginTop : 0,
    marginRight : 20,
    backgroundColor: '#de584e',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },
  textColor : {
    marginLeft : 50,
    marginTop : 8,
    color : '#ffffff',
    fontSize: 18,

   textAlign: 'center',


  },
   gmailIcon: {
    width: 27,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },


});
