import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native'
const close = require('../assets/close.png')

export const Modal = ({ isModalVisible, setIsModalVisible }) => {
  const { height, width } = Dimensions.get('window')

  if (!isModalVisible) return
  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        height: height,
        width: width,
        zIndex: 1,
        left: 0,
        top: 0,
        left: 0,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          flexGrow: 1,
        }}
      >
        <View
          style={{
            width: 350,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: '600' }}>
              Nuevo Proyecto
            </Text>
            <TouchableHighlight onPress={() => setIsModalVisible(false)}>
              <Image source={close} style={{ width: 30, height: 30 }} />
            </TouchableHighlight>
          </View>
          <TextInput style={{ height: 60, fontSize: 60, padding: 5 }} />
          <Text style={{ fontSize: 20 }}>Nombre</Text>
          <TextInput
            style={{ fontSize: 20, padding: 5 }}
            placeholder="Ejemplo.."
          />
        </View>
      </ScrollView>
    </View>
  )
}
