import React, { Children } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

interface iMyButtonProps {
  order: number; // prop
  children?: React.ReactNode; // children
  onPress?: () => void;
}

const MyButton = (props: iMyButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>{props.children || <Text>My button</Text>}</View>
    </TouchableOpacity>
  );
};

export default MyButton;
