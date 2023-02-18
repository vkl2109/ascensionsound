import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';

const screenWidth = Dimensions.get('window').width; 

export default function Login () {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} >
                <Text>Login</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollview: {
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: screenWidth
    }
});