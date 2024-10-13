import { useEffect, useState } from 'react'
import { Modal } from '../../components/Modal'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CardTask } from '../../components/CardTask'
import { createTask, getTasks } from './actions'

export const HomeView = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    name: '',
    icon: '',
    exited: false,
  })
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleCreateTask = async () => {
    if (!newTask.name) Alert.alert('Error', 'El nombre es requerido')
    const response = await createTask(newTask.name, newTask.icon)
    console.log(response)
    if (response) {
      setIsModalVisible(false)
      setNewTask({ exited: response })
    }
  }

  useEffect(() => {
    const getTasksC = async () => {
      const response = await getTasks()
      if (response) {
        setTasks(response)
      }
    }
    getTasksC()
  }, [newTask.exited])

  return (
    <SafeAreaView
      style={{
        padding: 15,
        height: '100%',
        position: 'relative',
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
        <Text style={{ fontSize: 25, fontWeight: '700' }}>
          Flujo de proyectos
        </Text>
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={{
            borderRadius: 5,
            paddingVertical: 7,
            paddingHorizontal: 10,
            backgroundColor: '#1cf902',
          }}
        >
          <Text style={{ fontSize: 22, color: 'white', fontWeight: '700' }}>
            Nuevo +
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        icon={newTask.icon}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleCreateTask={() => handleCreateTask()}
        setName={(name) => setNewTask({ ...newTask, name })}
        setIcon={(icon) => setNewTask({ ...newTask, icon })}
      />

      <View>
        <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 40 }}>
          Area de proyectos
        </Text>
        <FlatList
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 80,
          }}
          data={tasks}
          renderItem={({ item }) => (
            <CardTask
              id={item.id}
              icon={item.icon}
              name={item.name}
              status={item.status}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
