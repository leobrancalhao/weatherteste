import React, { Component } from "react"

import { View, Text } from "react-native"
export default class Detail extends Component
{

    static navigationOptions = {
        title: 'Detail day'
    };

    constructor( props )
    {
        super( props )
        this.state = {
            previsaoDetalhadaDia: this.props.navigation.state.params.previsaoDetalhadaDia
        };

    }

    render ()
    {
        return (
            <View>
                <Text>Segunda tela</Text>
                <Text>Detalhes {this.state.previsaoDetalhadaDia.main.temp}</Text>
            </View>
        );
    }
}