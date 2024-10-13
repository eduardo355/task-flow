export const createTask = async (name, icon) => {
  try {
    const response = await fetch('http://192.168.100.181:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        icon: icon,
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

export const getTasks = async () => {
  try {
    const response = await fetch('http://192.168.100.181:3000/api/tasks')
    if (!response.ok) {
      console.error('Error response:', response)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
