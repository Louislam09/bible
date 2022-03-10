import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';

const Article = () => (
    <ScrollView contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae dolorum minus animi a debitis vitae voluptas voluptate ipsa fugit fugiat, ex excepturi, ab aut labore soluta in facilis delectus.
            Nisi impedit alias accusantium nihil, quidem culpa quam voluptatibus id rem libero! Excepturi ipsum cupiditate earum ullam fugit magni impedit, ut quam vero modi cum veritatis assumenda labore officia debitis.
            Debitis, doloremque, fuga eaque inventore similique, exercitationem deleniti ratione animi eius quaerat commodi consequuntur velit rerum labore accusamus. Enim nihil ipsum sint. Enim sit voluptates perferendis incidunt id, repellendus quam?
            Sunt voluptate ea blanditiis explicabo amet, reprehenderit adipisci at sint nam laboriosam soluta quae consectetur, quibusdam ab rem necessitatibus! Temporibus aspernatur veritatis fugit laboriosam! Blanditiis iusto minus quis harum culpa.
            Eveniet illo itaque quam illum, esse maxime. Nesciunt magni, aliquam quod at perspiciatis nemo rerum sunt magnam molestias accusamus alias consequuntur quae cum, vitae molestiae recusandae blanditiis maiores doloribus provident.
            Eveniet necessitatibus, suscipit assumenda doloremque cum soluta eius fuga optio enim, nisi tenetur architecto dolore blanditiis veritatis. Minus in nulla sequi culpa! Asperiores delectus facere mollitia iste, libero aspernatur enim?
            Animi labore corrupti temporibus atque nesciunt et vel. Placeat pariatur exercitationem labore? Amet, perspiciatis reprehenderit. Odio aperiam quae possimus consequuntur eveniet ipsam recusandae doloremque distinctio dolorum molestias, numquam optio eligendi?
            Nam iste maxime minus illum quia debitis quae soluta eos placeat facere, doloremque mollitia magnam animi voluptates, rem similique. Temporibus repellendus sunt non dicta neque culpa repellat fugit officiis facilis.
            Eveniet quo, mollitia tempore sit neque esse? Quia doloremque doloribus accusamus eum, inventore, laborum reprehenderit mollitia non accusantium sunt explicabo. Asperiores, corporis soluta adipisci similique possimus aliquid atque consequuntur vero!
            Doloribus animi, fugiat repudiandae ex laudantium non rem doloremque quasi error blanditiis saepe voluptas? Sed alias harum quo consectetur soluta nisi, rerum repellendus delectus quae assumenda deserunt ut maiores necessitatibus.
            Perferendis pariatur aut minus nam, corporis eius neque ipsam voluptatum vero ullam a, provident cumque. Repudiandae in inventore cum optio, ducimus officiis labore repellendus rem unde, alias nisi eveniet animi!
            Odit corporis temporibus placeat quos earum error sunt exercitationem adipisci beatae, labore sit. Iure, qui vel aliquid sequi cumque neque adipisci ipsa mollitia quis quia accusantium repellendus animi eaque vitae.
            Consectetur voluptate ullam maxime ipsum quaerat unde dolor impedit veritatis, possimus ab doloribus, quibusdam fuga voluptatem tempore, porro molestias cum quia perferendis exercitationem sed enim hic eaque dolorem. Rerum, cumque?
            Quas accusamus suscipit mollitia! Deleniti ipsum facilis dolores dolor veritatis aut consequuntur repudiandae velit aspernatur dicta quae voluptatem qui blanditiis, possimus exercitationem? Animi tenetur saepe accusamus itaque neque ea repudiandae?
            Necessitatibus architecto eum, nam accusantium consequatur facilis voluptate quae velit, esse a minus exercitationem quo amet enim porro maxime provident quibusdam nostrum atque ut repudiandae! Nemo laudantium qui sapiente tenetur!
            Repellat unde perferendis minus molestiae et voluptas, magni nesciunt aliquam excepturi assumenda facere, sequi natus asperiores, mollitia harum iure similique reiciendis cumque dolorem officia at repudiandae libero ex dolor. Voluptatem?
            Pariatur impedit blanditiis explicabo accusantium quaerat soluta dolor aliquam commodi, amet a ipsum maxime, deserunt aliquid doloremque aut facere! Dolores ex sequi corrupti exercitationem ratione eos nesciunt, recusandae quia pariatur!
            Facere voluptatibus iure incidunt praesentium eius cum, saepe eos molestiae iusto ducimus fugit porro, qui quam aut? Nam ipsum odit odio accusamus, perspiciatis, illo fugit sed pariatur sequi reprehenderit libero!
            Dolor saepe tempora hic nisi exercitationem fugit incidunt quasi fuga ex eos provident blanditiis voluptates quas repellendus nobis fugiat esse accusamus dignissimos temporibus maxime amet similique, et at cum? Quibusdam.
            Fugiat nesciunt cum ut ipsum sit! Quae, reiciendis voluptas eius nesciunt, atque quam, ratione aliquam obcaecati assumenda commodi provident? Deleniti saepe amet ut dignissimos optio voluptates perspiciatis eligendi eaque. Error.</Text>
    </ScrollView>
)

const renderScene = SceneMap({
    init: Article,
    favorite: Article,
    guide: Article,
});

function CustomTabView() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = useState([
        { key: 'init', title: 'Inicio' },
        { key: 'favorite', title: 'Favoritos' },
        { key: 'guide', title: 'Guia' },

    ]);

    const renderTabBar = (props: any) => {
        return <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            labelStyle={styles.label}
            tabStyle={styles.tabStyle}
        />
    }

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

export default function OnboardingScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Header {...{ navigation }} />
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <CustomTabView />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabbar: {
        backgroundColor: '#607D8B',
    },
    indicator: {
        backgroundColor: '#f00',
    },
    label: {
        color: '#fff'
    },
    tabStyle: {
        width: 'auto',
    },
});
