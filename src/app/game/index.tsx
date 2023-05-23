import { useEffect } from 'react'
import { View, Text } from 'react-native'

const Game = () => {
  useEffect(() => {
    return () => ws.close()
  }, [])
  const ws = new WebSocket('ws://localhost:8080')

  ws.onopen = () => {
    ws.send(JSON.stringify(
      {
        action: 'startSession',
        numberOfPlayers: 5
      }
    ))
  }
  ws.onmessage = (data) => {
    if (typeof data !== 'string') {
      // ws.close()
    }
    console.warn('message: ', data)
  }

  return (
    <View>
      <Text> game screen </Text>
    </View>
  )
}

export default Game