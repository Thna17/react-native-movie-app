import React from 'react';
import {View, StyleSheet, Image, ScrollView, ActivityIndicator, Text, FlatList} from 'react-native';
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from '@/components/SearchBar'
import {useRouter} from "expo-router";
import {fetchMovies} from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";
import {getTrendingMovies} from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";
export default function HomeScreen() {
    const router = useRouter();

    const {
        data: trendingMovies,
        loading: trendingLoading,
        error: trendingError
    } = useFetch(getTrendingMovies);
    const { data: movies, loading: movieLoading, error: movieError } = useFetch( () => fetchMovies({
        query: ''
    }))

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

                {
                    movieLoading || trendingLoading ? (
                        <ActivityIndicator
                            size="large"
                            color="#0000ff"
                            className="mt-10  self-center"
                        />
                    ) : movieError || trendingError ? (
                        <Text>
                            Error: {movieError?.message || trendingError?.message}
                        </Text>
                    ) : (
                        <View className="flex-1 px-5">
                            <SearchBar
                                onPress={() => router.push('/search')}
                                placeholder="Search for a movie"
                            />
                            {trendingMovies && (
                                <View className="mt-10">
                                    <Text className="text-lg text-white font-bold mb-3">Trending</Text>

                                    <FlatList
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        ItemSeparatorComponent={() => <View className="w-4" />}
                                        className="mb-4 mt-3"
                                        data={trendingMovies}
                                        renderItem={({ item, index }) => (
                                            <TrendingCard movie={item} index={index}/>
                                        )}
                                        keyExtractor={(item) => item.$id ?? item.movie_id.toString()} // safer
                                    />

                                </View>
                            )}
                            <>
                                <Text className="text-lg text-white font-bold mt-5 mb-3 ">
                                    Latest Movies
                                </Text>

                                <FlatList data={movies} renderItem={({ item }) => (
                                    <MovieCard { ...item}/>
                                )}
                                       keyExtractor={(item) => item.id.toString()}
                                       numColumns={3}
                                          columnWrapperStyle={{
                                              justifyContent: 'flex-start',
                                              gap: 20,
                                              paddingRight: 5,
                                              marginBottom: 10
                                          }}
                                          className="mt-2 pb-32"
                                          scrollEnabled={false}
                                />
                            </>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
