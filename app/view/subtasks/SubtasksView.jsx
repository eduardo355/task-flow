import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ModalSubtask } from '../../../components/ModalSubtask'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { CardSubtask } from '../../../components/CardSubtask'

export const SubtasksView = () => {
  const route = useRoute()
  const [subtasks, setSubtasks] = useState([])
  const [newSubtask, setNewSubtask] = useState({
    name: '',
    description: '',
    exited: false,
  })

  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleCreateSubtask = async () => {
    try {
      const response = await fetch('http://192.168.100.204:3000/api/subtasks', {
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

  const handleDeleteSubtask = async (idSubtask) => {
    try {
      const response = await fetch(
        `http://192.168.100.204:3000/api/subtasks/${idSubtask}`,
        {
          method: 'DELETE',
        }
      )
      const data = await response.json()
      if (data) {
        const newSubtasks = subtasks.filter(
          (subtask) => subtask.id !== idSubtask
        )
        setSubtasks(newSubtasks)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUpdateStatusSubtask = async (idSubtask, status) => {
    try {
      const response = await fetch(
        `http://192.168.100.204:3000/api/subtasks/${idSubtask}/${status}`,
        {
          method: 'PUT',
        }
      )
      const data = await response.json()
      if (data) setNewSubtask({ exited: !newSubtask.exited })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    const getSubtasksByIdTask = async () => {
      try {
        const response = await fetch(
          `http://192.168.100.204:3000/api/subtasks/${route.params.idTask}`
        )
        const data = await response.json()
        setSubtasks(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    if (route.params.idTask) getSubtasksByIdTask()
  }, [route.params.idTask, newSubtask.exited])

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
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={subtasks}
          renderItem={({ item }) =>
            item.subtask_status === 'not started' && (
              <CardSubtask
                name={item.name}
                idSubtask={item.id}
                description={item.description}
                subtask_status={item.subtask_status}
                handleDeleteSubtask={handleDeleteSubtask}
                handleUpdateStatusSubtask={handleUpdateStatusSubtask}
              />
            )
          }
          keyExtractor={(item) => item.id}
        />
        <Text style={{ fontSize: 25, fontWeight: '600' }}>Inciado</Text>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={subtasks}
          renderItem={({ item }) =>
            item.subtask_status === 'in progress' && (
              <CardSubtask
                name={item.name}
                idSubtask={item.id}
                description={item.description}
                subtask_status={item.subtask_status}
                handleDeleteSubtask={handleDeleteSubtask}
                handleUpdateStatusSubtask={handleUpdateStatusSubtask}
              />
            )
          }
          keyExtractor={(item) => item.id}
        />
        <Text style={{ fontSize: 25, fontWeight: '600' }}>Completado</Text>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={subtasks}
          renderItem={({ item }) =>
            item.subtask_status === 'completed' && (
              <CardSubtask
                name={item.name}
                idSubtask={item.id}
                description={item.description}
                subtask_status={item.subtask_status}
                handleDeleteSubtask={handleDeleteSubtask}
                handleUpdateStatusSubtask={handleUpdateStatusSubtask}
              />
            )
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}
