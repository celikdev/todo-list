import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

export default function TodoCard({ data, setTodos }) {
  const handleComplete = (item) => {
    const newTodos = data.map((todo, index) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (item) => {
    const newTodos = data.filter((todo) => todo.id !== item.id);
    setTodos(newTodos);
  };

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            styles.itemContainer,
            {
              backgroundColor: item.isCompleted
                ? "lightgreen"
                : index % 2 == 0
                ? "#E9E9E9"
                : "#F5F5F5",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => handleComplete(item)}
            style={styles.touchableContainer}
            key={index}
          >
            <Text
              style={[
                styles.itemText,
                {
                  textDecorationLine: item.isCompleted
                    ? "line-through"
                    : "none",
                },
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
            onPress={() => {
              handleDelete(item);
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 12,
  },
  itemContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 8,
  },
  touchableContainer: {
    width: "80%",
  },
  itemText: {
    fontSize: 14,
    fontWeight: "900",
  },
  buttonContainer: {
    width: "20%",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "900",
    color: "red",
  },
});
