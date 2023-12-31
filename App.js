import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import TodoCard from "./src/components/TodoCard";

import Logo from "./assets/pooly-logo.png";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random().toString(),
      text: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.todoContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter Todo"
          placeholderTextColor={"#000"}
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => handleAddTodo()}
          activeOpacity={0.8}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TodoCard data={todos} setTodos={setTodos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
    gap: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
  },
  textInput: {
    fontSize: 14,
    fontWeight: "900",
    height: 50,
    padding: 4,
    width: "100%",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
  },
  todoContainer: {
    width: "100%",
    alignItems: "center",
    gap: 8,
  },
  addButton: {
    backgroundColor: "#538DFF",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
  },
});
