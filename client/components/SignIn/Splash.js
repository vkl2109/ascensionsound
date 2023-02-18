import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function Splash () {
    return (
        <View style={styles.container}>
            <Text>Splash</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});