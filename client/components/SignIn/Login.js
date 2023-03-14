import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { IconButton } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width; 

export default function Login ({ navigation }) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isHidden, setIsHidden ] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview} >
                <View style={styles.inputs}>
                    <Text>Your email:</Text>
                    <TextInput style={styles.input}
                        onChangeText={() => setUsername()}
                        placeholder={'johnsmith@example.com'}
                        value={username}/>
                    <Text>Your password:</Text>
                    <View style={styles.pwinput}>
                        <TextInput 
                            style={styles.pwtextinput}
                            onChangeText={() => setPassword()}
                            placeholder={'password'}
                            secureTextEntry={isHidden}
                            value={password}/>
                        <IconButton icon="eye" style={styles.eye} onPress={() => setIsHidden(isHidden => !isHidden)} />
                    </View>
                </View>
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
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: screenWidth * 0.6,
        height: screenWidth * 0.1,
        padding: 10,
        margin: 10
    },
    pwtextinput: {
        flex: 1
    },
    eye:{
        padding: 4
    },
    pwinput: {
        borderWidth: 1,
        borderRadius: 10,
        width: screenWidth * 0.6,
        height: screenWidth * 0.1,
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        flexDirection: 'column'
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