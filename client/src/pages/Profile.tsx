import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {

}

const Profile: React.FC<Props> = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Profile
      </Text>
    </SafeAreaView>
  )
}

export default Profile