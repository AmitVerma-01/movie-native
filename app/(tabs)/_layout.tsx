import { Image, ImageBackground, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcons = ({ focused, icon, name }: any) => {
  if (focused) {
    return (
      <ImageBackground source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[100px] min-h-16 justify-center items-center rounded-full overflow-hidden gap-2'
      >
        <Image source={icon} />
        <Text>{name}</Text>
      </ImageBackground>
    )
  } else {
    return (
      <Image source={icon} />
    )
  }
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 5,
          marginBottom: 5,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        }
      }}
    >
      <Tabs.Screen name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>
              <TabIcons focused={focused} icon={icons.home} name="Home" />
            </>
          }
        }}
      />
      <Tabs.Screen name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>
              <TabIcons focused={focused} icon={icons.search} name="Search" />
            </>
          }
        }}
      />
      <Tabs.Screen name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>
              <TabIcons focused={focused} icon={icons.save} name="Saved" />
            </>
          }
        }}
      />

      <Tabs.Screen name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>
              <TabIcons focused={focused} icon={icons.person} name="Profile" />
            </>
          }
        }}
      />
    </Tabs>
  )
}

export default _layout