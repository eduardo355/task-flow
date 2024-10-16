import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { CardSubtask } from '../../../components/CardSubtask'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ModalSubtask } from '../../../components/ModalSubtask'
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  createSubtask,
  deleteSubtask,
  getSubtasksByIdTask,
  updateStatusSubtask,
} from './actions'

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
    const response = await createSubtask(
      route.params.idTask,
      newSubtask.name,
      newSubtask.description
    )
    if (response) {
      setNewSubtask({ exited: !newSubtask.exited })
      setIsVisibleModal(false)
    }
  }

  const handleDeleteSubtask = async (idSubtask) => {
    const response = deleteSubtask(idSubtask)
    if (response) {
      const newSubtasks = subtasks.filter((subtask) => subtask.id !== idSubtask)
      setSubtasks(newSubtasks)
    }
  }

  const handleUpdateStatusSubtask = async (idSubtask, status) => {
    const response = updateStatusSubtask(idSubtask, status)
    if (response) setNewSubtask({ exited: !newSubtask.exited })
  }

  useEffect(() => {
    const getSubtasks = async () => {
      const result = await getSubtasksByIdTask(route.params.idTask)
      setSubtasks(result)
    }
    getSubtasks()
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
      <ModalSubtask
        isModalVisible={isVisibleModal}
        setIsModalVisible={setIsVisibleModal}
        handleCreateSubtask={handleCreateSubtask}
        setDescription={(description) =>
          setNewSubtask({ ...newSubtask, description })
        }
        setName={(name) => setNewSubtask({ ...newSubtask, name })}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => setIsVisibleModal(true)}
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

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No inciado</Text>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 10,
              paddingHorizontal: 12,
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
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Inciado</Text>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 10,
              paddingHorizontal: 12,
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
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Completado</Text>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 10,
              paddingHorizontal: 12,
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
      </ScrollView>
    </SafeAreaView>
  )
}
