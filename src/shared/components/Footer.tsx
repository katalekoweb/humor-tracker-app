import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../themes/Theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IFooterProps {
    children?: React.ReactNode
}

const Footer = ({ children }: IFooterProps) => {

    const insets = useSafeAreaInsets()

  return (
    <View style={{...styles.footerContainer, paddingBottom: insets.bottom + 20}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    footerContainer: {
        padding: 16,
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        ...theme.shadows.default,
        backgroundColor: theme.colors.paper
    }
})

export default Footer
