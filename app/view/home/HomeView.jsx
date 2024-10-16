import { useEffect, useState } from 'react'
import { createTask, getTasks } from './actions'
import { Modal } from '../../../components/Modal'
import { CardTask } from '../../../components/CardTask'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'

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
    if (response) {
      setIsModalVisible(false)
      setNewTask({ exited: response })
    }
  }

  useEffect(() => {
    const getTasksC = async () => {
      const response = await getTasks()
      console.log(response)
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
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Task Flow</Text>
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={{
            width: 121,
            height: 33,
            paddingVertical: 7,
            paddingHorizontal: 10,
            backgroundColor: '#45DD13',
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
        <Text style={{ fontSize: 18, fontWeight: 'medium', marginTop: 40 }}>
          Area de proyectos
        </Text>
        <FlatList
          contentContainerStyle={{
            gap: 10,
            flexWrap: 'wrap',
            paddingBottom: 80,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
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
