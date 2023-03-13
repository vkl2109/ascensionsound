import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';

const screenWidth = Dimensions.get('window').width; 

export default function Login ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} >
                <View style={styles.inline}>
                    <Text>Not a member?</Text> 
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}> 
                        <Text style={styles.signup}> Sign Up </Text> 
                    </TouchableOpacity>
                </View>
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
    },
    inline: {
        flexDirection: 'row'
    },
    signup: {
        textDecorationLine: 'underline'
    }
});