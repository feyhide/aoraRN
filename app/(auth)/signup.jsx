import { View,ScrollView, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

const signup = () => {
  const [isSubmitting,setisSubmitting] = useState(false)
  const [form,setForm] = useState({
    email:"",
    password:""
  })

  const submit = () => {

  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[90vh] px-4 my-6">
          <Image
            resizeMode='contain'
            className="w-[115px] h-[35px]"
            source={images.logo}
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e)=>setForm({...form,email:e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e)=>setForm({...form,password:e})}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles='mt-7 w-full'
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Already have account ?
            </Text>
            <Link className='text-lg text-secondary font-psemibold' href='/signin'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signup