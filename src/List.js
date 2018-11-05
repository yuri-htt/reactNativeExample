import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {   
   
   render() {   
    return (
         <View>
            {
               this.props.names.map((item) => (                
                <Text style = {styles.text}>
                        {item.name} - {item.price} 
                        
                
                 </Text>                 
               ))
              
               }
               <Text><hr/></Text>
             <Text>Total:{this.props.total}</Text>
             <Text>Divided Amt:{this.props.total/this.props.totalp}</Text>
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: 'red'
      
   }
})