import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native'
const close = require('../assets/close.png')

export const ModalSubtask = ({
  setName,
  setDescription,
  isModalVisible,
  handleCreateSubtask,
  setIsModalVisible,
}) => {
  const { height, width } = Dimensions.get('window')

  if (!isModalVisible) return
  return (
    <View
      style={{
        top: 0,
        left: 0,
        left: 0,
        zIndex: 1,
        width: width,
        height: height,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          marginTop: 100,
        }}
      >
        <View
          style={{
            gap: 10,
            width: 350,
            padding: 20,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: '600' }}>Nueva Tarea</Text>
            <TouchableHighlight onPress={() => setIsModalVisible(false)}>
              <Image source={close} style={{ width: 30, height: 30 }} />
            </TouchableHighlight>
          </View>
          <Text style={{ fontSize: 20 }}>Nombre</Text>
          <TextInput
            placeholder="Ejemplo.."
            style={{ fontSize: 20, padding: 5 }}
            onChangeText={(name) => setName(name)}
          />
          <Text style={{ fontSize: 20 }}>Descripcion</Text>
          <TextInput
            placeholder="Ejemplo.."
            style={{ fontSize: 20, padding: 5 }}
            onChangeText={(description) => setDescription(description)}
          />
          <TouchableHighlight
            onPress={() => handleCreateSubtask()}
            style={{
              padding: 10,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: 'black',
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Crear</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  )
}
