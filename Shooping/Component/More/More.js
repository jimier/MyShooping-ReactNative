/**
 * Created by y5049 on 2017/4/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import CommonCell from './Son/Com/CommonCell'
import HeaderBar from '../../js/Part/HeaderBar'

import {comStyles} from '../../js/css.js'


export default class More extends Component {
    static navigationOptions = {
        tabBarLabel: '更多',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./icon_tabbar_misc.png')}
                style={[comStyles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={comStyles.box}>
                <HeaderBar
                    middle={<Text style={comStyles.text}>更多</Text>}
                />
                <View style={comStyles.content}>

                    <ScrollView>
                        <View style={{marginTop:10}}>
                            <CommonCell title="收货地址" button={()=>{alert("xxx")}}/>
                            <CommonCell/>
                        </View>
                        <View style={{marginTop:10}}>
                            <CommonCell title="收货地址"/>
                            <CommonCell title = "省流量模式" isSwitch = {true}/>
                        </View>
                    </ScrollView>

                </View>
            </View>

        );
    }
}

