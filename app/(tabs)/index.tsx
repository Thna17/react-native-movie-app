import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

export default function HomeScreen() {
        return (
            <View className="flex-1 bg-primary">
                <Image source={images.bg} className="absolute w-full z-0" />
                <ScrollView className="flex-1 px-5"
                showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}>
                    <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                </ScrollView>
            </View>
        );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0B0A1A', padding: 20, paddingTop: 64 },
    h1: { color: '#FFFFFF', fontSize: 28, fontWeight: '700', marginBottom: 8 },
    p: { color: '#B6B8D6', fontSize: 16, marginBottom: 16 },
    code: { fontFamily: 'Courier', color: '#E9E9F7' },
    link: {
        marginTop: 16,
        color: '#A8B5DB',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
