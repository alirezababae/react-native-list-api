import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';


export default  class App extends React.Component{

constructor(props){
super(props);



this.state = {
lodaing:false,
pokemon:[],

url:'https://pokeapi.co/api/v2/pokemon'



}




}



componentDidMount(){

this.getpokemon();

}

getpokemon = () => {

this.setState({ lodaing:true }) 

fetch(this.state.url)
.then(res => res.json())
.then(res => {

this.setState({
pokemon: res.results,
url:res.next,
lodaing:false




})



});

};



render(){
if(this.state.lodaing){

  return(

    <View style={stulee.bac}>
    <Text>درحال بارگذاری...</Text>
    
    </View>
    
    ); 


}


return(

  <View style={stulee.bac}>

<FlatList

data={this.state.pokemon}
renderItem={
({item}) => <Text>{item.name}</Text>

}
keyExtractor={(item,index)=> index.toString()}

/>


  </View>
  
  );





}

}


const stulee = StyleSheet.create({
bac:{
backgroundColor:'#bdc3c7',
flex:1,
alignItems:'center',
paddingTop:50,
paddingLeft:5
},
fl:{
width:''


}




})
