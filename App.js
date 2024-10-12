import { SafeAreaProvider } from 'react-native-safe-area-context'
import { HomeView } from './app/view/HomeView'
import { View } from 'react-native'

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <HomeView />
      </View>
    </SafeAreaProvider>
  )
}
