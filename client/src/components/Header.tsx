import React from 'react'
import { View } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'

const Header = () => {

    const headerHeight = useHeaderHeight()
    console.log(headerHeight)

    return (
        <View style={{height: 91, backgroundColor: 'black'}}></View>
    )
}

export default Header