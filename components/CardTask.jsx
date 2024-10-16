import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const CardTask = ({ name, icon, status, id }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Subtasks', { idTask: id })}
    >
      <View
        style={{
          shadowOffset: {
            width: 0,
            height: 3,
          },
          width: 170,
          height: 170,
          padding: 10,
          flexGrow: 1,
          elevation: 2,
          marginTop: 20,
          borderRadius: 10,
          shadowRadius: 1.5,
          shadowColor: '#000',
          shadowOpacity: 0.25,
          position: 'relative',
        }}
      >
        <View
          style={{
            height: '50%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#D5D4D4',
          }}
        ></View>
        <Text
          style={{
            left: 20,
            top: '43%',
            zIndex: 10,
            fontSize: 35,
            position: 'absolute',
          }}
        >
          {icon}
        </Text>
        <View
          style={{
            height: '50%',
            paddingTop: 30,
            paddingLeft: 15,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
