import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import ToDoList from "./components/ToDoList";


const App = () => {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [completedStatus, setCompletedStatus] = useState([]);


  const addTodo = () =>{
    if (text.length > 0) {
      setTodos([...todos, text]);
      setText("");
      const add = () =>{
        setNumber(number+1);
      }
      add();
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
    const remove = () =>{
      setNumber(number-1);
    }
      remove();
  };


  const toggleCompleted = (index) => {
    setCompletedStatus((prev) => {
      const newStatus = [...prev];
      newStatus[index] = !newStatus[index];
      return newStatus;
    });
    setNumber((prev) => prev + (!completedStatus ? -1  : 0));


  };
  


  



  

  return(
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Text style={styles.icon}>💤</Text>
        <Text style={styles.logo}>TODOS</Text>
      </View>
      <View>
      <Text style={styles.counterText}>TODOS: {number}</Text>
      </View>
      <FlatList
      data={todos}
      renderItem={({item,index})=>(
        <ToDoList
        item= {item}
        onLongPress={()=>removeTodo(index)}
        onPress={() => toggleCompleted(index)}
        />
      )}
      keyExtractor={(item, index)=>index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        onChangeText={(value)=> setText(value)}
        value={text}
        placeholder="Add..."
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
            <Text style={styles.addButtonText}>
              Add
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    flex:1
  },
  logo:{
    fontWeight: "bold",
    fontSize: 30,
    color:"#4180FF",

    
  },
  icon:{
    fontWeight: "bold",
    fontSize: 30,
    color:'aliceblue',
    flex:1,
    

  },
  logo_container:{
    backgroundColor:'black',
    padding:5,
    flexDirection:'row',
    
    
  },
  inputContainer:{
    // flexDirection:"row",
    // marginBottom:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4180FF",
    padding:10,
    margin:10,
    borderRadius:10
  },
  input:{
    // flex:1,
    height:40,
    width:350,
    // borderColor: 'transparent',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor:"transparent"
  },
  addButton: {
    backgroundColor: 'gold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    width:100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  counterText:{
    fontWeight: "bold",
    fontSize:30,
    textAlign:'center'
  }

})

export default App