import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../themes/Theme";

interface IButtonProps {
    title?: string
    color?: string
    grow?: boolean
    variant?: 'contained' | 'outlined'
    children?: React.ReactNode;
    onPress?: () => void
}

const Button = ({ children, title, grow, variant = 'contained', color, onPress }: IButtonProps) => {
  return (
    <Pressable
        onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button, 
        ...(pressed ? styles.buttonPressed : {}),
        ...(grow ? { flexGrow: 1 } : {}),
        ...(variant === "contained" ? styles.buttonContained : {}),
        ...(variant === "outlined" ? {
          ...styles.buttonOutlined,
          ...(color && {borderColor: color})
        } : {})
      })}
    >
      { children && children }
      { !children && <Text style={{
        ...styles.buttonText,
        ...(variant === "contained" ? styles.buttonContainedText : {}),
        ...(variant === "outlined" ? styles.buttonOutlinedText : {})
      }}>{title}</Text> }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 16,
  },
  buttonContained: {
    backgroundColor: theme.colors.primary,
  },
  buttonOutlined: {
   borderWidth: 2,
   borderColor: theme.colors.primary
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular
  },
  buttonContainedText: {
    color: theme.colors.primaryText,
  },
  buttonOutlinedText: {
    color: theme.colors.primary,
  }
});

export default Button;
