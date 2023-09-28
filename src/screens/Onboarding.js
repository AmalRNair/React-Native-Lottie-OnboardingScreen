import { View, Text,StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utilities/asyncStorage';

const { width , height } = Dimensions.get('window')

export default function OnboardingScreen() {

    const navigation = useNavigation();

    const handleDone = () =>{
        navigation.navigate('Home')
        setItem('onboarded','1')
    }
    const doneButton = ({...props}) => {
        return (
            <TouchableOpacity {...props} style={styles.doneButton}>
                <Text>Get Started</Text>
            </TouchableOpacity>
        )
        
    
    }

  return (
    <View style={styles.container}>
        <Onboarding
            onDone = {handleDone}
            onSkip = {handleDone}
            DoneButtonComponent = {doneButton}
            bottomBarHighlight={false}
           style={{paddingHorizontal: 15}}
            pages={[
                {
                backgroundColor: '#5aeda9',
                image: (
                    <View>
                        <LottieView 
                        style={{
                            width: width * 0.9,
                            height: width,
                             }}
                             source={require('../assets/connecting_people.json')} autoPlay loop />
                    </View>
                ),
                title: 'Get Connected',
                subtitle: 'Connect with People and Bussiness around',
                },
                {
                backgroundColor: '#f2f063',
                image: (
                    <View>
                        <LottieView 
                        style={{
                            width: width * 0.9,
                            height: width,
                             }}
                            source={require('../assets/breaking_news.json')} autoPlay loop />
                    </View>
                ),
                title: 'Know It First',
                subtitle: 'Get the latest and daily articles from trusted sources',
                },
                {
                    backgroundColor: '#87d7e6',
                    image: (
                        <View>
                            <LottieView 
                            style={{
                                width: width * 0.9,
                                height: width,
                                 }}
                                source={require('../assets/best_sale.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Offers and Deals',
                    subtitle: 'Get to the best deals and offers near you',

                }
                
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    doneButton: {
        padding:width*0.03,
        backgroundColor: '#69c9db',
        borderRadius:width*5,
        marginRight: width*0.01,
        justifyContent:"center",
        alignItems:'center',
        
    },

})