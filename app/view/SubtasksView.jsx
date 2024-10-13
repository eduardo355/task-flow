import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { Text } from 'react-native'

export const SubtasksView = () => {
  const route = useRoute()
  return (
    <SafeAreaView
      style={{
        padding: 15,
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <Text>{route.params.id}</Text>
    </SafeAreaView>
  )
}
