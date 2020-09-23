import React from "react";

import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput style={{ ...styles.input, ...props.style }} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 20,
  },
});
