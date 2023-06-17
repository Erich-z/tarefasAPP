import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container:{
    margin: 5,
    height: 'auto',
    flexDirection: 'row',
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,

    
   },

   boxtext:{
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    fontSize: 25,
    justifyContent: 'center',
    padding: 4
   },

   bottomView:{
    width: 80, 
    height: 80,
    borderRadius: 50,  
    backgroundColor: 'blue', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 5, 
  },
  textStyle:{
 
    color: '#fff',
    fontSize:22
  },
  checkbox: {
    alignSelf: 'center',
  },
});
