import React, { useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Pressable,
    Switch
} from 'react-native';
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { icons } from "@/constants/icons";
import { Ionicons, MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('watchlist');
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    // Mock user data
    const userData = {
        name: "Hong Thanbrathna",
        email: "hongbrathna@gmail.com",
        avatar: "https://i.ibb.co/0gGPtV3/235-A1872aa.jpg",
        membership: "Premium",
        joined: "January 2023",
        stats: {
            moviesWatched: 247,
            hoursWatched: 412,
            favorites: 38
        }
    };

    // Mock watchlist and favorites data
    const watchlistData = [
        { id: 1, title: "Inception", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 2010 },
        { id: 2, title: "The Dark Knight", poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 2008 },
        { id: 3, title: "Interstellar", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 2014 },
        { id: 4, title: "Parasite", poster: "https://images.unsplash.com/photo-1556648031-0f67850d366e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 2019 },
    ];

    const favoritesData = [
        { id: 1, title: "The Shawshank Redemption", poster: "https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 1994 },
        { id: 2, title: "Pulp Fiction", poster: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 1994 },
        { id: 3, title: "The Godfather", poster: "https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", year: 1972 },
    ];

    const renderMovieItem = (item) => (
        <TouchableOpacity key={item.id} className="w-[47%] mb-4">
            <Image source={{ uri: item.poster }} className="w-full h-36 rounded-xl mb-2" />
            <Text className="text-white text-sm font-semibold mb-1" numberOfLines={1}>{item.title}</Text>
            <Text className="text-gray-500 text-xs">{item.year}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="flex-1 bg-primary">
            {/* Header */}
                <View className=" pt-4 pb-4 px-5 flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => router.back()} className="p-1">
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold">Profile</Text>
                    <TouchableOpacity onPress={() => setEditModalVisible(true)}>
                        <Feather name="edit" size={22} color="white" />
                    </TouchableOpacity>
                </View>

            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Section */}
                <View className="items-center py-6 px-5">
                    <View className="relative mb-4">
                        <Image source={{ uri: userData.avatar }} className="w-24 h-24 rounded-full" />
                        <TouchableOpacity className="absolute right-0 bottom-0 bg-indigo-500 w-8 h-8 rounded-full items-center justify-center border-2 border-primary">
                            <Ionicons name="camera" size={16} color="white" />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-white text-xl font-bold mb-1">{userData.name}</Text>
                    <Text className="text-gray-400 text-sm mb-3">{userData.email}</Text>

                    <View className="flex-row items-center bg-amber-100/15 px-3 py-1.5 rounded-full mb-2">
                        <Ionicons name="diamond" size={14} color="#FFD700" />
                        <Text className="text-amber-300 text-xs font-semibold ml-1">{userData.membership} Member</Text>
                    </View>

                    <Text className="text-gray-500 text-xs">Joined {userData.joined}</Text>
                </View>

                {/* Stats Section */}
                <View className="flex-row justify-around py-5 mx-5 bg-gray-800/50 rounded-xl mb-6">
                    <View className="items-center">
                        <Text className="text-white text-lg font-bold mb-1">{userData.stats.moviesWatched}</Text>
                        <Text className="text-gray-400 text-xs">Movies</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-white text-lg font-bold mb-1">{userData.stats.hoursWatched}</Text>
                        <Text className="text-gray-400 text-xs">Hours</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-white text-lg font-bold mb-1">{userData.stats.favorites}</Text>
                        <Text className="text-gray-400 text-xs">Favorites</Text>
                    </View>
                </View>

                {/* Tabs */}
                <View className="flex-row mx-5 bg-gray-800/50 rounded-lg p-1 mb-5">
                    <TouchableOpacity
                        className={`flex-1 py-2.5 items-center rounded-md ${activeTab === 'watchlist' ? 'bg-indigo-500' : ''}`}
                        onPress={() => setActiveTab('watchlist')}
                    >
                        <Text className={`font-semibold ${activeTab === 'watchlist' ? 'text-white' : 'text-gray-400'}`}>
                            Watchlist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`flex-1 py-2.5 items-center rounded-md ${activeTab === 'favorites' ? 'bg-indigo-500' : ''}`}
                        onPress={() => setActiveTab('favorites')}
                    >
                        <Text className={`font-semibold ${activeTab === 'favorites' ? 'text-white' : 'text-gray-400'}`}>
                            Favorites
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Content based on active tab */}
                <View className="px-5 mb-6">
                    <View className="flex-row flex-wrap justify-between">
                        {(activeTab === 'watchlist' ? watchlistData : favoritesData).map(renderMovieItem)}
                    </View>
                </View>

                {/* Settings Section */}
                <View className="px-5 mb-10">
                    <Text className="text-white text-lg font-bold mb-4">Account Settings</Text>

                    <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-700">
                        <View className="flex-row items-center">
                            <Ionicons name="notifications" size={22} color="#6366F1" />
                            <Text className="text-white text-base ml-3">Notifications</Text>
                        </View>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: '#64748B', true: '#6366F1' }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-700">
                        <View className="flex-row items-center">
                            <MaterialIcons name="security" size={22} color="#6366F1" />
                            <Text className="text-white text-base ml-3">Privacy & Security</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-700">
                        <View className="flex-row items-center">
                            <Ionicons name="language" size={22} color="#6366F1" />
                            <Text className="text-white text-base ml-3">Language</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 mr-1">English</Text>
                            <Ionicons name="chevron-down" size={16} color="#94A3B8" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-700">
                        <View className="flex-row items-center">
                            <FontAwesome name="question-circle" size={22} color="#6366F1" />
                            <Text className="text-white text-base ml-3">Help & Support</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center py-4">
                        <View className="flex-row items-center">
                            <Ionicons name="log-out" size={22} color="#EF4444" />
                            <Text className="text-red-400 text-base ml-3">Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Edit Profile Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => setEditModalVisible(false)}
            >
                <View className="flex-1 justify-end">
                    <BlurView intensity={50} className="flex-1">
                        <Pressable className="flex-1 justify-end bg-black/50" onPress={() => setEditModalVisible(false)}>
                            <View className="bg-gray-800 rounded-t-3xl p-6 items-center">
                                <Text className="text-white text-xl font-bold mb-5">Edit Profile</Text>

                                <View className="relative mb-6">
                                    <Image source={{ uri: userData.avatar }} className="w-20 h-20 rounded-full" />
                                    <TouchableOpacity className="absolute right-0 bottom-0 bg-indigo-500 w-7 h-7 rounded-full items-center justify-center border-2 border-gray-800">
                                        <Ionicons name="camera" size={16} color="white" />
                                    </TouchableOpacity>
                                </View>

                                <View className="w-full mb-4">
                                    <Text className="text-gray-400 text-sm mb-2">Full Name</Text>
                                    <View className="bg-gray-700/50 rounded-xl px-4 py-3.5">
                                        <Text className="text-white text-base">{userData.name}</Text>
                                    </View>
                                </View>

                                <View className="w-full mb-6">
                                    <Text className="text-gray-400 text-sm mb-2">Email</Text>
                                    <View className="bg-gray-700/50 rounded-xl px-4 py-3.5">
                                        <Text className="text-white text-base">{userData.email}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity className="bg-indigo-500 w-full py-4 rounded-xl items-center mb-3">
                                    <Text className="text-white text-base font-semibold">Save Changes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    className="w-full py-4 rounded-xl items-center"
                                    onPress={() => setEditModalVisible(false)}
                                >
                                    <Text className="text-gray-400 text-base">Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </Pressable>
                    </BlurView>
                </View>
            </Modal>
        </SafeAreaView>
    );
}