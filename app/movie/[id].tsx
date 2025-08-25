import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function MovieDetails() {
    const { id } = useLocalSearchParams<{ id?: string }>();

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Movie Details</Text>
            <Text style={styles.p}>
                You’re viewing: <Text style={styles.code}>{id}</Text>
            </Text>
            <Text style={styles.note}>
                Tip: Try changing the URL param, e.g. <Text style={styles.code}>/movies/ironman</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0B0A1A', padding: 20, paddingTop: 64 },
    h1: { color: '#FFFFFF', fontSize: 26, fontWeight: '700', marginBottom: 8 },
    p: { color: '#B6B8D6', fontSize: 16, marginBottom: 12 },
    code: { fontFamily: 'Courier', color: '#E9E9F7' },
    note: { color: '#8F92B9' },
});
