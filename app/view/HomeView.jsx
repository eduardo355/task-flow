import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeView = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <SafeAreaView style={{ padding: 15, position: 'relative', height: '100%' }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: '700' }}>
          Flujo de proyectos
        </Text>
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={{
            backgroundColor: '#1cf902',
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 22, color: 'white', fontWeight: '700' }}>
            Nuevo +
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />

      <View>
        <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 40 }}>
          Area de proyectos
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: '48%',
              height: 200,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              position: 'relative',
              borderRadius: 10,
            }}
          >
            <View style={{ backgroundColor: '#f0f0f0', height: '50%' }}></View>
            <Text
              style={{
                fontSize: 50,
                position: 'absolute',
                top: '40%',
                left: 20,
                zIndex: 10,
              }}
            >
              💩
            </Text>
            <View
              style={{
                height: '50%',
                backgroundColor: 'white',
                paddingTop: 30,
                paddingLeft: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>
                Proyecto 1
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
