import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import colors from '@styles/colors';
import { Home } from '@features';
import { CreatePost, Notification, Profile, Search } from '@features';
import navigationStrings from '@navigation/navigationStrings';
import imagePath from '@constants/imagePath';

const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}

            screenOptions={{
                headerShown: false,
                style: styles.customBottomtabsStyle,
                tabBarActiveTintColor: colors.blackColor,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {backgroundColor:colors.themeColor},
                tabBarShowLabel: false
            }}

        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor: focused?  colors.redColor: colors.whiteColor}} source={imagePath.firstInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor: focused?  colors.redColor: colors.whiteColor}} source={imagePath.secondInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.CREATE_POST}
                component={CreatePost}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor: focused?  colors.redColor: colors.whiteColor}} source={imagePath.thirdActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor: focused?  colors.redColor: colors.whiteColor}} source={imagePath.fourthActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor: focused?  colors.redColor: colors.whiteColor}} source={imagePath.fifthActiveIcon} />
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        //height: moderateScale(60)
        backgroundColor: 'red'
    },

});

export default TabRoutes