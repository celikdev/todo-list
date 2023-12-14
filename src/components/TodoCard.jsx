import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TodoCard = ({ data, setTodos }) => {
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
    <View style={{ width: "100%", gap: 8 }}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: item.isCompleted
              ? "lightgreen"
              : index % 2 == 0
              ? "#E9E9E9"
              : "#F5F5F5",
          }}
        >
          <TouchableOpacity
            onPress={() => handleComplete(item)}
            style={{ width: "80%" }}
            key={index}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "900",
                textDecorationLine: item.isCompleted ? "line-through" : "none",
              }}
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
            style={{
              width: "20%",
            }}
          >
            <Text
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 14,
                fontWeight: "900",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoCard;
