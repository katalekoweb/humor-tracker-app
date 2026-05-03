import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";

interface IBaseInputProps {
  children?: React.ReactNode;
  label: string
  asButton?: boolean
  onPress?: () => void
}

const BaseInput = ({ children, label, asButton, onPress }: IBaseInputProps) => {
  return (
    <View style={styles.baseInputContainer}>
      <Text style={styles.label}>{label}</Text>
        { asButton && <Pressable onPress={onPress}
        style={({pressed}) => pressed ? styles.baseInputPressed : styles.baseInput}
        >{children}</Pressable> }
        { !asButton && <View style={styles.baseInput}>{children}</View> }
    </View>
  );
};

const styles = StyleSheet.create({
  baseInputContainer: {
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.body,
    color: theme.colors.text,
  },
  baseInput: {
    borderRadius: 8,
    backgroundColor: theme.colors.background,
  },
  baseInputPressed: {
    opacity: 0.5,
    borderRadius: 8,
    backgroundColor: theme.colors.backgroundHighlight,
  },
});

export default BaseInput;
