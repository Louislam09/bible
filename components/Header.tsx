import React, { FC } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { DrawerNavigationProp } from '@react-navigation/drawer'
interface HeaderInterface {
    navigation: DrawerNavigationProp<any>
}

const Header: FC<HeaderInterface> = ({ navigation }) => {
    const headerIconSize = 26

    return (
        <View style={styles.header}>
            <View style={styles.headerStart}>

                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons style={[styles.icon, { marginRight: 30 }]} name="menu-outline" size={headerIconSize} color="white" />
                </TouchableOpacity>
                <Text numberOfLines={1} style={styles.headerTitle}>Santa Biblia Reina Valera</Text>
            </View>

            <View style={styles.headerEnd}>
                <TouchableOpacity>
                    <Ionicons style={[styles.icon, { marginRight: 30 }]} name="search-sharp" size={headerIconSize} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="ellipsis-vertical" size={headerIconSize} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        backgroundColor: '#607D8B',
        paddingHorizontal: 10
    },
    headerStart: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        // borderColor: 'red',
        // borderWidth: 1,
        flex: 1,
    },
    headerEnd: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: '#fff',
        backgroundColor: 'transparent',
        flex: .8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    icon: {
        fontWeight: '700',
        color: '#fff',
    }

});

export default Header