import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* (tabs) is the group that holds our bottom tabs */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* Dynamic movie details lives outside the tabs */}
            <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
        </Stack>
    );
}
