import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Image,Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItem } from '../utilities/asyncStorage';

const { width , height } = Dimensions.get('window')


export default function Home(){

    const navigation = useNavigation()
    const handleReset = async() => {
        await removeItem('onboarded')
        navigation.push('OnboardingScreen')
    }
     
    return(
        <SafeAreaView style={styles.container}>
            <Text>HOME</Text>
            <TouchableOpacity style={styles.reset} onPress={handleReset}>
                <Text>Reset the state of onboarding</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                
            </View>
        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',

    },
    reset: {
        padding:width*0.03,
        backgroundColor: '#00ff00',
        borderRadius:width*5,
    }
})