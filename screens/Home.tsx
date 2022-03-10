import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function Home({ navigation }: RootTabScreenProps<'Home'>) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    scrollContainer: {
        paddingVertical: 10
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        backgroundColor: '#607D8B',
        borderBottomColor: 'red',
        borderWidth: 1,
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
