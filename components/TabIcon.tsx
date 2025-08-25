import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    focused: boolean;
    title: string;
    iconName: React.ComponentProps<typeof Ionicons>['name'];
};

export default function TabIcon({ focused, title, iconName }: Props) {
    if (focused) {
        return (
            <View style={styles.activePill}>
                <Ionicons name={iconName} size={20} color="#EDEDF8" style={styles.icon} />
                <Text style={styles.activeText}>{title}</Text>
            </View>
        );
    }

    return (
        <View style={styles.inactiveWrap}>
            <Ionicons name={iconName} size={20} color="#A8B5DB" />
        </View>
    );
}

const styles = StyleSheet.create({
    activePill: {
        flexDirection: 'row',
        minWidth: 112,
        minHeight: 52, // matches the bar height vibe
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.10)',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    icon: { marginRight: 8 },
    activeText: { color: '#EDEDF8', fontSize: 14, fontWeight: '600' },
    inactiveWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        borderRadius: 999,
    },
});