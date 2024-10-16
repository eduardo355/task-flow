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
        height: 112,
        elevation: 2,
        marginTop: 20,
        borderRadius: 10,
        shadowRadius: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        paddingVertical: 10,
        position: 'relative',
        paddingHorizontal: 20,
        backgroundColor: '#E6E6E6',
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
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
        {subtask_status !== 'completed' && (
          <TouchableOpacity onPress={() => setIsVisibleOptions(idSubtask)}>
            <Image source={fill} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        )}
      </View>
      {isVisibleOptions === idSubtask && (
        <View
          style={{
            top: 13,
            right: 30,
            zIndex: 10,
            width: 140,
            height: 100,
            borderRadius: 10,
            position: 'absolute',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          {subtask_status !== 'not started' && (
            <TouchableOpacity
              onPress={() =>
                handleUpdateStatusSubtask(idSubtask, 'not started')
              }
            >
              <Text style={{ fontSize: 15, fontWeight: 'regular' }}>
                Pasar a no iniciado
              </Text>
            </TouchableOpacity>
          )}
          {subtask_status !== 'in progress' && (
            <TouchableOpacity
              onPress={() =>
                handleUpdateStatusSubtask(idSubtask, 'in progress')
              }
            >
              <Text style={{ fontSize: 15, fontWeight: 'regular' }}>
                Pasar a progreso
              </Text>
            </TouchableOpacity>
          )}
          {subtask_status !== 'completed' && (
            <TouchableOpacity
              onPress={() => handleUpdateStatusSubtask(idSubtask, 'completed')}
            >
              <Text style={{ fontSize: 15, fontWeight: 'regular' }}>
                Completar
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => handleDeleteSubtask(idSubtask)}>
            <Text style={{ fontSize: 15, color: 'red', fontWeight: 'regular' }}>
              Eliminar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsVisibleOptions(0)}>
            <Text style={{ fontSize: 15, fontWeight: 'regular' }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={{ fontSize: 15, color: '#464646' }}>{description}</Text>
      <Text style={{ fontSize: 13, color: '#656565' }}>
        Estado: {subtask_status}
      </Text>
    </View>
  )
}
