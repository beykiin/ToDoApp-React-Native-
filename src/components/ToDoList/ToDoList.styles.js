import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    todoItem:{
        backgroundColor: 'lawngreen',
        fontWeight: 'bold',
        fontSize:20,
        padding: 15,
        marginTop: 10,
        borderColor: '#bbb',
        margin:10,
        borderRadius:10
        
        
    },
    completedItem: {
        backgroundColor: 'red',
        margin:10,
        borderRadius:10
      },
      completedText: {
        textDecorationLine: 'line-through',
        color: 'aliceblue',
        fontWeight: 'bold',
        fontSize:20
    },
    todoText:{
        fontWeight: 'bold',
        fontSize:20
    }
})

export default styles