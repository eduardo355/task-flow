import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
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
            width: 313,
            height: 244,
            padding: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'semibold' }}>
              Nuevo Proyecto
            </Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Image source={close} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
          </View>
          <TextInput
            value={icon}
            onChangeText={(icon) => {
              const emojiRegex = /^[\p{Emoji}]$/u
              if (icon === '' || emojiRegex.test(icon)) {
                setIcon(icon)
              }
            }}
            style={{ height: 60, fontSize: 60 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'medium' }}>Nombre</Text>
          <TextInput
            placeholder="Ejemplo.."
            style={{ fontSize: 18, padding: 5 }}
            onChangeText={(name) => setName(name)}
          />
          <TouchableOpacity
            onPress={() => handleCreateTask()}
            style={{
              padding: 10,
              marginTop: 20,
              backgroundColor: 'black',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Crear
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
