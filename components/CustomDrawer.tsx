import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: any) => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={{ color: '#000' }}>Drawer top</Text>
            </View>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#fff' }}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <Text>footer</Text>
            </View>
        </View>
    )
}

export default CustomDrawer