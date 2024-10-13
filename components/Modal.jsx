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

export const Modal = ({
  icon,
  setName,
  setIcon,
  isModalVisible,
  handleCreateTask,
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
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
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
            <Text style={{ fontSize: 23, fontWeight: '600' }}>
              Nuevo Proyecto
            </Text>
            <TouchableHighlight onPress={() => setIsModalVisible(false)}>
              <Image source={close} style={{ width: 30, height: 30 }} />
            </TouchableHighlight>
          </View>
          <TextInput
            value={icon}
            onChangeText={(icon) => {
              const emojiRegex = /^[\p{Emoji}]$/u
              if (icon === '' || emojiRegex.test(icon)) {
                setIcon(icon)
              }
            }}
            style={{ height: 60, fontSize: 60, padding: 5 }}
          />
          <Text style={{ fontSize: 20 }}>Nombre</Text>
          <TextInput
            placeholder="Ejemplo.."
            style={{ fontSize: 20, padding: 5 }}
            onChangeText={(name) => setName(name)}
          />
          <TouchableHighlight
            onPress={() => handleCreateTask()}
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
