import { HomeView } from './app/view/home/HomeView'
import { NavigationContainer } from '@react-navigation/native'
import { SubtasksView } from './app/view/subtasks/SubtasksView'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Subtasks"
            component={SubtasksView}
            options={{
              headerTitle: 'Subtareas',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
              headerBackTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#E6E6E6',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
