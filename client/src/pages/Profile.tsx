import React from 'react'
import { Text, SafeAreaView } from 'react-native'

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