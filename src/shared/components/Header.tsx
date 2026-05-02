import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../themes/Theme'

interface IHeaderProps {
    name: string | undefined
}

const Header = ({ name }: IHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Ola,</Text>
      <Text style={styles.headerBoldText}>{!name ? 'seu nome?' : `${name}!`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    headerText: {
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.extraBold
    },
    headerBoldText: {
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.extraBold,
        color: theme.colors.primary
    }
})

export default Header
