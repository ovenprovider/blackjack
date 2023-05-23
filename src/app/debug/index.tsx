import { useEffect } from 'react'
import { View, Text } from 'react-native'

const Debug = () => {
  const ws = new WebSocket('ws://localhost:8080')

  ws.onopen = () => {
    ws.send(JSON.stringify(
      {
        action: 'joinSession',
        id: 'test'  
      }
    ))
  }
  ws.onmessage = (data) => {
    if (typeof data !== 'string') {
      //ws.close()
    }
    console.warn('message: ', data)
  }

  useEffect(() => {
    return () => ws.close()
  }, [])
  return (
    <View>
      <Text> game screen </Text>
    </View>
  )
}

export default Debug