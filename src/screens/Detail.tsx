import { useRoute } from "@react-navigation/native"
import { Text } from "react-native"
import { TRouteProps } from "../Routes"

const Detail = () => {

  const {params} = useRoute<TRouteProps<'detail'>>()

  return (
    <>
       <Text>Details</Text>
       <Text>{params.rate}</Text>
    </>
  )
}

export default Detail
