export const getSubtasksByIdTask = async (id) => {
  try {
    const response = await fetch(`http://192.168.0.93:3000/api/subtasks/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

export const createSubtask = async (idTask, name, description) => {
  try {
    const response = await fetch('http://192.168.0.93:3000/api/subtasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId: idTask,
        name: name,
        description: description,
      }),
    })
    if (!response.ok) {
      console.error('Error response:', response)
    }
    return true
  } catch (error) {
    return console.error('Error:', error)
  }
}

export const updateStatusSubtask = async (idSubtask, status) => {
  try {
    const response = await fetch(
      `http://192.168.0.93:3000/api/subtasks/${idSubtask}/${status}`,
      {
        method: 'PUT',
      }
    )
    await response.json()
    return true
  } catch (error) {
    console.error('Error:', error)
  }
}

export const deleteSubtask = async (idSubtask) => {
  try {
    const response = await fetch(
      `http://192.168.0.93:3000/api/subtasks/${idSubtask}`,
      {
        method: 'DELETE',
      }
    )
    await response.json()
    return true
  } catch (error) {
    console.error('Error:', error)
  }
}
