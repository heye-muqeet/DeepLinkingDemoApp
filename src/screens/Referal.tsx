import { Linking, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Referal = () => {
    const shareReferralLink = async () => {
        const referralCode = 'muqeet'
        try {
            const result = await Share.share({
                message: `Join DoYouSidenote with my referral link: https://api.prod.doyousidenote.com/referral?code=${referralCode}`,
            });
            if (result.action === Share.sharedAction) {
                console.log('Shared successfully');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const navigation = useNavigation();

    const handleDeepLink = ({ url }) => {
        if (url) {
            // Parse URL, e.g., https://api.prod.doyousidenote.com/referral?code=ABC123
            const regex = /^https:\/\/api\.prod\.doyousidenote\.com\/referral\?code=([^&]+)/;
            const match = url.match(regex);
            if (match) {
                const referralCode = match[1]; // Extract code (e.g., ABC123)
                navigation.navigate('WelcomeScreen', { referralCode });
            }
        }
    };

    useEffect(() => {
        // Handle app opened via URL when already running
        Linking.addEventListener('url', handleDeepLink);

        // Handle app opened via URL when closed
        Linking.getInitialURL().then((url) => {
            if (url) handleDeepLink({ url });
        });

        return () => Linking.removeAllListeners('url');
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={shareReferralLink} style={styles.button}>
                <Text style={styles.text}>send link</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Referal

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