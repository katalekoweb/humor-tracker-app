import { StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";
import { ClearButton } from "./ClearButton";

interface IHeaderProps {
  name: string | undefined;
}

const Header = ({ name }: IHeaderProps) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Olá,</Text>
        <Text style={styles.headerBoldText}>
          {!name ? "seu nome?" : `${name}!`}
        </Text>
      </View>
      { name && (
       <>
        <Text style={styles.subtitle}>O seu diário pessoal, na palma da mão</Text>
        <ClearButton />
      </>
      ) }
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  headerText: {
    fontSize: theme.fonts.sizes.title,
    fontFamily: theme.fonts.family.extraBold,
  },
  headerBoldText: {
    fontSize: theme.fonts.sizes.title,
    fontFamily: theme.fonts.family.extraBold,
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.extraBold,
    color: theme.colors.text,
    paddingHorizontal: 16,
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default Header;
