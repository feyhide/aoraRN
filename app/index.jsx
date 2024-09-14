
import { Redirect,router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView,Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {images} from '../constants'
import CustomButton from "./components/CustomButton";

export default function App(){
    return(
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{
                height:"100%"
            }}>
                <View className="w-full items-center justify-center h-full px-4" >
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />
                    <View className="relative mt-2">
                        <Text className="text-3xl text-white font-psemibold text-center">Discover Endless Possiblities With {''}
                            <Text className="font-psemibold text-secondary-200">Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            resizeMode="contain"
                            className="w-[136px] h-[16px] absolute -bottom-1 -right-10"
                        />
                    </View>
                    <View className="relative w-full mt-2">
                        <CustomButton
                            title="Continue With Email"
                            handlePress={()=>{router.push("/signin")}}
                            containerStyles='w-full text-center'
                        />
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="light" backgroundColor="#161622"/>
        </SafeAreaView>
    )
}