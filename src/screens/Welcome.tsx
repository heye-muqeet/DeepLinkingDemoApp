import { Linking, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const shareReferralLink = async () => {
        const referralCode = 'muqeet'
        try {
            const result = await Share.share({
                message: `Join DoYouSidenote with my referral link: myapp://profile/123`
                ,
            });
            if (result.action === Share.sharedAction) {
                console.log('Shared successfully');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const navigation = useNavigation();

    const handleDeepLink = (event) => {
        console.log('Deep Link:', event.url);
        navigation.navigate('WelcomeScreen');
    };



    useEffect(() => {
        Linking.addEventListener('url', handleDeepLink);
        return () => {
            Linking.removeEventListener('url', handleDeepLink);
        };
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={shareReferralLink} style={styles.button}>
                <Text style={styles.text}>send link</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
})


