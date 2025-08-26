import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from '../../components/SearchBar'
import {useRouter} from "expo-router";
export default function HomeScreen() {
    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            {/* Background image */}
            <Image source={images.bg} className="absolute w-full z-0" />

            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 10,
                }}
            >
                {/* Logo pinned to top, centered */}
                <Image
                    source={icons.logo}
                    className="w-12 h-10 mt-10 mb-5"
                    resizeMode="contain"
                    style={{ alignSelf: "center" }}
                />
                <View className="flex-1 px-5">
                    <SearchBar
                        onPress={() => router.push('/search')}
                        placeholder="Search for a movie"
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
