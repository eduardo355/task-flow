import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
const fill = require('../assets/iconFill.png')

export const CardSubtask = ({
  name,
  description,
  subtask_status,
  idSubtask,
  handleDeleteSubtask,
  handleUpdateStatusSubtask,
}) => {
  const [isVisibleOptions, setIsVisibleOptions] = useState(0)
  return (
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
        <Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
        {subtask_status !== 'completed' && (
          <TouchableOpacity onPress={() => setIsVisibleOptions(idSubtask)}>
            <Image source={fill} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        )}
      </View>
      {isVisibleOptions === idSubtask && (
        <View
          style={{
            gap: 10,
            top: 10,
            right: 14,
            zIndex: 10,
            padding: 15,
            borderRadius: 5,
            position: 'absolute',
            backgroundColor: 'white',
          }}
        >
          {subtask_status !== 'not started' && (
            <TouchableOpacity
              onPress={() =>
                handleUpdateStatusSubtask(idSubtask, 'not started')
              }
            >
              <Text style={{ fontSize: 21 }}>Pasar a no iniciado</Text>
            </TouchableOpacity>
          )}
          {subtask_status !== 'in progress' && (
            <TouchableOpacity
              onPress={() =>
                handleUpdateStatusSubtask(idSubtask, 'in progress')
              }
            >
              <Text style={{ fontSize: 21 }}>Pasar a progreso</Text>
            </TouchableOpacity>
          )}
          {subtask_status !== 'completed' && (
            <TouchableOpacity
              onPress={() => handleUpdateStatusSubtask(idSubtask, 'completed')}
            >
              <Text style={{ fontSize: 21 }}>Completar</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => handleDeleteSubtask(idSubtask)}>
            <Text style={{ fontSize: 21, color: 'red' }}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsVisibleOptions(0)}>
            <Text style={{ fontSize: 21 }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={{ fontSize: 18, color: 'gray' }}>{description}</Text>
      <Text>Estado: {subtask_status}</Text>
    </View>
  )
}
