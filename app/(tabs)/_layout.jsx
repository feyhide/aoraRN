import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import {icons} from '../../constants'

const TabIcon =({icon,color,name,focused})=>{
  return(
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-5 h-5"
      />
      <Text style={{color:color}} className={`text-xs ${focused ? "font-psemibold":"font-pregular"}`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:"#FFA001",
        tabBarInactiveTintColor:"#CDCDE0",
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:"#161622",
          borderTopWidth:1,
          borderTopColor:"#232533",
          height:60
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title:"Home",
          headerShown:false,
          tabBarIcon: ({color,focused})=>(
            <TabIcon icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title:"Create",
          headerShown:false,
          tabBarIcon: ({color,focused})=>(
            <TabIcon icon={icons.plus}
              color={color}
              focused={focused}
              name="Create"
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title:"Profile",
          headerShown:false,
          tabBarIcon: ({color,focused})=>(
            <TabIcon icon={icons.profile}
              color={color}
              focused={focused}
              name="profile"
            />
          )
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title:"Bookmark",
          headerShown:false,
          tabBarIcon: ({color,focused})=>(
            <TabIcon icon={icons.bookmark}
              color={color}
              focused={focused}
              name="Bookmark"
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout