import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { Button } from '@rneui/themed';

const screenWidth = Dimensions.get('window').width; 

export default function Splash ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} >
                <Button
                    title={"Get Started"}
                    buttonStyle={{
                        backgroundColor: '#FFA500',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 150,
                        height: 50,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={() => navigation.navigate('Login')}
                    />
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