import React, {useState} from "react";
import styles from "./ToDoList.styles";
import { View, Text, TouchableOpacity } from "react-native";

const ToDoList = ({item, onLongPress, onPress}) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const toggleCompleted = () => {
        setIsCompleted(!isCompleted);
        if (onPress) {
            onPress();
        }
        
      };

    return(

        <TouchableOpacity onLongPress={onLongPress}  onPress={toggleCompleted}>
            <View style={[styles.todoItem, isCompleted && styles.completedItem]}>
                <Text style={[styles.todoText ,isCompleted && styles.completedText]}>
                    {item}
                </Text>
            </View>
        </TouchableOpacity>


    )
}

export default ToDoList