import { useState } from 'react'
const fill = require('../../assets/iconFill.png')
import { useRoute } from '@react-navigation/native'
import { ModalSubtask } from '../../components/ModalSubtask'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const SubtasksView = () => {
  const route = useRoute()
  const [newSubtask, setNewSubtask] = useState({
    name: '',
    description: '',
    exited: false,
  })
  const [isVisibleOptions, setIsVisibleOptions] = useState(0)
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleCreateSubtask = async () => {
    try {
      const response = await fetch('http://192.168.100.181:3000/api/subtasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId: route.params.idTask,
          name: newSubtask.name,
          description: newSubtask.description,
        }),
      })
      if (!response.ok) {
        console.error('Error response:', response)
      }
      setIsVisibleModal(false)
      return true
    } catch (error) {
      return console.error('Error:', error)
    }
  }

  return (
    <SafeAreaView
      style={{
        height: '100%',
        position: 'relative',
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}
    >
      <TouchableOpacity
        onPress={() => setIsVisibleModal(true)}
        style={{
          width: 150,
          borderRadius: 5,
          paddingVertical: 7,
          paddingHorizontal: 10,
          backgroundColor: '#34f300',
        }}
      >
        <Text style={{ fontSize: 22, color: 'white', fontWeight: '700' }}>
          Nueva tarea +
        </Text>
      </TouchableOpacity>
      <ModalSubtask
        isModalVisible={isVisibleModal}
        setIsModalVisible={setIsVisibleModal}
        handleCreateSubtask={handleCreateSubtask}
        setDescription={(description) =>
          setNewSubtask({ ...newSubtask, description })
        }
        setName={(name) => setNewSubtask({ ...newSubtask, name })}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>No inciado</Text>
        <View
          style={{
            shadowOffset: {
              width: 0,
              height: 3,
            },
            gap: 15,
            padding: 10,
            elevation: 5,
            marginTop: 20,
            borderRadius: 10,
            shadowRadius: 1.5,
            shadowColor: '#000',
            shadowOpacity: 0.25,
            position: 'relative',
            backgroundColor: '#f7f7f7',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Subtarea 1</Text>
            <TouchableOpacity onPress={() => setIsVisibleOptions(1)}>
              <Image source={fill} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
          </View>
          {isVisibleOptions === 1 && (
            <View
              style={{
                gap: 10,
                top: 35,
                right: 14,
                zIndex: 1,
                padding: 15,
                borderRadius: 5,
                position: 'absolute',
                backgroundColor: 'white',
              }}
            >
              <Text style={{ fontSize: 21 }}>Pasar a progreso</Text>
              <Text style={{ fontSize: 21, color: 'red' }}>Eliminar</Text>
              <TouchableOpacity onPress={() => setIsVisibleOptions(0)}>
                <Text style={{ fontSize: 21 }}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={{ fontSize: 18, color: 'gray' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae
            sapiente iste itaque labore impedit maiores aut deleniti expedita.
            Ut vero amet rerum tenetur cumque iusto dolores fugit error eveniet.
          </Text>
          <Text>Estado: no iniciado</Text>
        </View>
      </View>
      <Text>{route.params.idTask}</Text>
    </SafeAreaView>
  )
}
