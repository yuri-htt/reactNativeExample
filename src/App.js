import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,  
  Platform,
  TouchableHighlight,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';

import List from './List';
var SampleArray = [] ;

class App extends Component {
  state = {  
   task:'',
   taskamt:'',
   names:[],
   totalp:0,
   totalv:0
 }
  changetotal=(e)=>this.setState({totalp:e.target.value}) 
  changetext=(e)=>this.setState({task:e.target.value})
  changetextamt=(e)=>this.setState({taskamt:e.target.value})
  updateinfo=() =>{
   var total=0;
    total=this.state.totalv+parseInt(this.state.taskamt);
    SampleArray.push({'name':this.state.task,'price':this.state.taskamt})   
    this.setState({names:SampleArray,totalv:total})
   
  } 
  render() {
    return (
       <View style={{
        flex: 1,
        flexDirection: 'column'                           
      }}>
        <View style={{flexDirection: 'row',justifyContent:'center' }}>
        <Text>Total person    </Text><TextInput  style={{height: 30}}   placeholder=""  onChange={this.changetotal}/>       
        </View>
       <View style={{flexDirection: 'row',justifyContent:'center'}}>
       <TextInput  style={{height: 40}}   placeholder="Place task"  onChange={this.changetext}  /> 
       <TextInput  style={{height: 40}}   placeholder="Place amt"  onChange={this.changetextamt}  /> 
       <Button onPress={this.updateinfo}  style={styles.button} title="+"/>   
     </View>
       <View style={{flexDirection: 'row',justifyContent:'center'}}>       
      <List names={this.state.names} total={this.state.totalv} totalp={this.state.totalp} />
      </View>
       </View>
    );
 }
 
}
const styles=StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  height:30,
  alignItems: 'center',
  backgroundColor: '#2196F3'
},

});
export default App;
