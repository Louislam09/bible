import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Screen 1</Text>
        <View style={styles.separator} lightColor="#000" darkColor="blue" />

        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
