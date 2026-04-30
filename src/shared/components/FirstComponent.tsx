import { Text, View } from 'react-native'

interface iFirstComponentProps {
    order: number
}

const FirstComponent = (props: iFirstComponentProps) => {
  return (
    <View>
        <Text>First Component {props.order}</Text>
    </View>
  )
}

export default FirstComponent