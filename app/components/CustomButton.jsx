import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
        className={`${isLoading? 'opacity-50': ""} ${containerStyles} bg-secondary rounded-xl
        min-h-[62px] justify-center items-center`}>
      <Text  className={` text-primary font-psemibold text-lg ${textStyles} `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton