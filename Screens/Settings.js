import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => (
    <View style={styles.container}>
        <View style={styles.settingsContainer}>
            <Text style={styles.settingText}>Notifications</Text>
            <View style={styles.setting}>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('Receive push message')}>
                        <Text style={styles.subSettingText}> Receive push message</Text>
                    </TouchableOpacity>
                    <Switch
                        value={false}
                        onValueChange={() => console.log('Switch pressed')}
                        trackColor={{ false: 'red', true: 'green' }}
                    />
                </View>
            </View>
            <View style={styles.switchBackground}>
                <TouchableOpacity onPress={() => console.log('Personalized message')}>
                    <Text style={styles.subSettingText}> Personalized message</Text>
                </TouchableOpacity>
                <Switch
                    value={false}
                    onValueChange={() => console.log('Switch pressed')}
                    trackColor={{ false: 'red', true: 'green' }}
                />
            </View>
            <View style={styles.switchBackground}>
                <TouchableOpacity onPress={() => console.log('Global notification')}>
                    <Text style={styles.subSettingText}> Global notification</Text>
                </TouchableOpacity>
                <Switch
                    value={false}
                    onValueChange={() => console.log('Switch pressed')}
                    trackColor={{ false: 'red', true: 'green' }}
                />
            </View>
        </View>
        <View style={styles.settingsContainer}>
            <Text style={styles.settingText}>Notifications</Text>
            <View style={styles.setting}>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('CLEAR SESSION CACHE')}>
                        <Text style={styles.subSettingText}> CLEAR SESSION CACHE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('CLEAR LOGIN DATA')}>
                        <Text style={styles.subSettingText}> CLEAR LOGIN DATA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.settingsContainer}>
            <Text style={styles.settingText}>Other Settings</Text>
            <View style={styles.setting}>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('Choose Country')}>
                        <Text style={styles.subSettingText}> Choose Country</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('Choose State')}>
                        <Text style={styles.subSettingText}> choose State</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('Choose Language')}>
                        <Text style={styles.subSettingText}> Choose Language</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('Color Mode')}>
                        <Text style={styles.subSettingText}> Color Mode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },
    settingsContainer: {
        padding: 20,
    },
    setting: {
        marginTop: 10,
    },
    settingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subSettingText: {
        fontSize: 16,
        padding: 5,
        backgroundColor: '#060D57',
        marginTop: 5,
        color: 'white'
    },
    switchBackground: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#060D57',
        padding: 5,
        marginTop: 5,
    },
});

export default SettingsScreen;