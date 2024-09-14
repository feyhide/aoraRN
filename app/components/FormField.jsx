import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../constants'; // Make sure this path is correct

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 w-full ${otherStyles}`}>
            <Text className="text-base px-2 text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className="relative w-full h-16 px-4 border-2 bg-black-100 border-white rounded-2xl">
                <TextInput
                    className="flex-1 w-full text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor='#7b7b8b'
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                {title === 'Password' && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute right-5 h-full justify-center"
                    >
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
