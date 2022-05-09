//https://aboutreact.com/image-icon-inside-the-react-native-button/
import { StatusBar } from 'expo-status-bar';
import {TextInput,TouchableOpacity, StyleSheet,Image, Text, View } from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';


const App = () => {

  const handlerLongClick = () => {
    //handler for Long Click
    alert('Button Long Pressed');
  };

  const handlerClick = () => {
    //handler for Long Click
    alert('Button Pressed');
  };

  //const [loading, setLoading] = useState(false);

 /* const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };*/
  return (
    <View style={styles.container}>

      <View activeOpacity={0.6} style = {styles.text} onPress={handlerClick} onLongPress={handlerLongClick}
      onStartShouldSetResponder={() => alert('View Click')}>
       Souliyasone     
      </View>
      
      <TouchableOpacity onLongPress={handlerLongClick} onPress={handlerClick}
      activeOpacity={0.6}
      style={styles.buttonStyle}>
        <Text style = {styles.buttonTextStyle}>Press ME</Text>
      </TouchableOpacity>
      <TextInput
          style={styles.textInputStyle}
          placeholder= 'ກະລຸນາປ້ອນລະຫັດທີ່ເປັນໂຕເລກ'
          placeholderTextColor='#181614'
          numeric
          keyboardType={'numeric'}
        />
    
      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Login Using Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonGoogleStyle} 
          activeOpacity={0.5} >
          <View style={styles.buttonIconSeparatorStyle}  />
          <Text style={styles.buttonTextStyle}>
            Login Using Google
          </Text>
        </TouchableOpacity>
              <StatusBar style="auto" />
    </View>

  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F7F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "#120406",
   padding:10,
   fontSize:20,
   fontStyle:'italic',
   fontWeight:'bold',
  },
  buttonStyle:{
    color:"#ed1a3a",
    textAlign:'center',
    fontSize:16,
    fontWeight:'100'
  },
  buttonTextStyle: {
    color: '#13ced1',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: "black",
    height: 40,
    width:220,
    borderRadius: 5,
    margin: 5,
  },
buttonGoogleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: “white”,
    borderWidth: 0.5,
    borderColor: 'black',
    height: 40,
    borderRadius: 5,
    width:220,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#343b3b',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "white",
    width: 1,
    height: 40,
  },
  textInputStyle: {
    width: 550,
    backgroundColor: '#505959',
    padding: 16,
  },
  spinnerTextStyle: {
    color: '#262522',
  },

});

