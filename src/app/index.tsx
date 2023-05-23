// Libraries
import { View, Button } from 'react-native'
import { useRouter } from 'expo-router'

// Styles
import { styles } from './index.styles'

const Home = () => {
  const router = useRouter()

  const handleOnPress = (path: string) => {
    router.push(path)
  }

  return (
    <View style={styles.container}>
      <Button title='Start' onPress={() => handleOnPress('game')}/>
      <Button title='Join Session' />
      <Button title='Settings' />
      <Button title='Websocket Testing' onPress={() => handleOnPress('debug')} />
    </View>
  )
}

export default Home