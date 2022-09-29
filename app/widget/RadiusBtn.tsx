'use strict';

import React, { Component } from "react";

import {
    ColorValue,
    PixelRatio,
    Platform,
    StyleSheet,
    Text,
    TextStyle,
    TouchableHighlight,
    View,
    ViewStyle
} from "react-native";


export interface IRadiusBtnProps {
    btnName: string,
    textStyle?: TextStyle,
    btnStyle?: ViewStyle,
    underlayColor?: ColorValue,
    onPress?: () => void
}


export default class RadiusBtn extends Component<IRadiusBtnProps> {

    static defaultProps = {
        btnName: 'Button',
        // underlayColor: '#80ff8447',
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableHighlight
                    underlayColor={this.props.underlayColor}
                    activeOpacity={0.9}
                    style={[styles.center, styles.btnDefaultStyle, this.props.btnStyle]}
                    onPress={this.props.onPress}>
                    <Text style={[styles.textDefaultStyle, this.props.textStyle]}>{this.props.btnName}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDefaultStyle: {
        // width: 100,
        // height: 20,
        paddingVertical:10,
        paddingHorizontal:16,
        backgroundColor: '#ff8447',
        borderColor: '#ff8447',
        borderRadius: 9,
        borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
    },
    textDefaultStyle: {
        fontSize: 16,
        color: '#ffffff',
    },
});

