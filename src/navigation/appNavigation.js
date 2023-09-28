import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import { getItem } from "../utilities/asyncStorage";


const Stack = createNativeStackNavigator()

export default function AppNavigation(){
    
    const [showOnboarding, setShowOnboarding] = useState(null)
    useEffect(()=>{
        checkIfAlreadyOnboarded()
    },[])

    const checkIfAlreadyOnboarded = async ()=>{
        let onboarded = await getItem('onboarded')
        if(onboarded==1){
            //hide the onboarding
            setShowOnboarding(false)

        }else{
            //show the onboarding
            setShowOnboarding(true)

        }
    }
    
    if(showOnboarding==null){
        return null
    }



    if(showOnboarding){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="OnboardingScreen">
                    <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
                    <Stack.Screen name="OnboardingScreen" options={{headerShown: false}} component={OnboardingScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }else{
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
                    <Stack.Screen name="OnboardingScreen" options={{headerShown: false}} component={OnboardingScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    
}