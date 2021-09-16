import React from 'react'
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRef } from 'react'

const ToggleSwitch: React.FC<{}> = () => {

  const toggleAnim = useRef(new Animated.Value(0)).current

  const toggle = () => {
		Animated.timing(toggleAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
	}

  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={{...styles.toggleContainer, alignItems: toggleAnim ? 'flex-end' : 'flex-start'}}>
      <TouchableOpacity onPress={fadeIn}>
        <Animated.View style={styles.toggleWheelStyle}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    width: 45
  },
  toggleContainer: {
    width: 45,
    height: 25,
    marginLeft: 3,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  label: {
    marginRight: 2,
  },
  toggleWheelStyle: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 12.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  }
})

export default ToggleSwitch