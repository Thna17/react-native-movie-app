import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SavedScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Saved</Text>
            <Text style={styles.p}>This is <Text style={styles.code}>app/(tabs)/saved.tsx</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0B0A1A', padding: 20, paddingTop: 64 },
    h1: { color: '#FFFFFF', fontSize: 24, fontWeight: '700', marginBottom: 8 },
    p: { color: '#B6B8D6', fontSize: 16 },
    code: { fontFamily: 'Courier', color: '#E9E9F7' },
});
