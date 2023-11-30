import React, { useState } from 'react';
import {
    useWindowDimensions, View, StyleSheet,
    TouchableOpacity, Animated
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Chat from '../screens/chat';
import History from '../screens/history';
import Profile from '../screens/profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const renderScene = SceneMap({
    Chat: Chat,
    History: History,
    Profile: Profile,
});

export default function Tabs() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'History', title: 'HISTORY' },
        { key: 'Chat', title: 'CHAT' },
        { key: 'Profile', title: 'PROFILE' },
    ]);

    const _renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <View style={styles.tabBar}>
                {
                    props.navigationState.routes.map((route, i) => {
                        const opacity = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map((inputIndex) =>
                                inputIndex === i ? 1 : 0.5
                            ),
                        });
                        return (
                            <TouchableOpacity
                                style={styles.tabItem}
                                onPress={() => { setIndex(i) }}
                            >
                                <Animated.Text style={{ opacity, color: 'white', fontWeight: 'bold', fontSize: 15 }}>{route.title}</Animated.Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    };

    return (
        <>
            <View style={styles.header}>
                <FontAwesome5 style={styles.headerImg} name="user-alt" color="#000000" size={20} />
                <Animated.Text style={styles.headerText}>Hello! Abdullah Shah</Animated.Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={_renderTabBar}
            />
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        color: 'white',
        height: 70,
        backgroundColor: '#3460A9',
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    headerText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        marginTop: 20,
        marginLeft: 15
    },
    headerImg: {
        fontWeight: 'bold',
        color: 'white',
        marginTop: 24.5,
        marginLeft: 20
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#3460A9',
        color: 'white',
        borderBottomColor: 'blue',
        borderBottomWidth: 2
    },
});