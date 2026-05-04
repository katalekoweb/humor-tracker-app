import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../themes/Theme";

interface IButtonProps {
    title?: string
    children?: React.ReactNode;
}

const Button = ({ children, title }: IButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({...styles.button, ...(pressed ? styles.buttonPressed : {})})}
    >
      { children && children }
      { !children && <Text style={styles.buttonText}>{title}</Text> }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    backgroundColor: theme.colors.primary,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: theme.colors.primaryText,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular
  }
});

export default Button;
