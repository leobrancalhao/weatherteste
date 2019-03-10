import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import api from "../services/api";
import Icons from "../images/icons"

APPID = "f9c80b362120b7c69c39804136bedaa4";
cidadeSelecionada = "Blumenau"

export default class Main extends Component
{
    static navigationOptions = {
        title: 'WeatherTest'
    };



    state = {
        weather: [],
        cidade: "",
        pais: "BR",
        tempo: "",
        temperatura: 0,
        cidadeEncontrada: "Blumenau",
        icone: Icons(),
        dias: []
    };
    componentDidMount ()
    {
        this.getWeather();
    }


    getWeather = async () => 
    {
        try
        {
            city = this.state.cidadeEncontrada + "," + this.state.pais;
            const responseCurrentWeather = await api.get( `/weather?q=${ city }"&lang=pt&units=metric&APPID=${ APPID }` )

            //console.log( responseCurrentWeather.data.name )
            this.setState( {
                cidade: responseCurrentWeather.data.name + ',' + responseCurrentWeather.data.sys.country,
                pais: responseCurrentWeather.data.sys.country,
                tempo: responseCurrentWeather.data.weather[ 0 ].description,
                temperatura: responseCurrentWeather.data.main.temp,
                icone: Icons( responseCurrentWeather.data.weather[ 0 ].icon )
            } );

            await this.getForecast();

        } catch ( error ) 
        {
            console.error( "Erro ao receber os dados atuais" + error );
        }
    };

    getForecast = async () => 
    {
        try 
        {
            city = this.state.cidadeEncontrada + "," + this.state.pais;
            const responseCurrentWeather = await api.get( `/find?q=${ city }"&lang=pt&units=metric&APPID=${ APPID }` )

            console.log( responseCurrentWeather.data.list )
            this.setState( {
                dias: responseCurrentWeather.data.list
            } );

        } catch ( error ) 
        {
            console.error( "Erro ao receber os dados atuais" + error );
        }
    };

    render () 
    {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 40, fontStyle: "italic" }}>{this.state.cidade}</Text>
                <Text style={styles.icon}>
                    {this.state.icone}
                </Text>
                <View >
                    <Text style={{ textAlign: 'center', fontSize: 60, fontStyle: "italic" }}>{Math.round( this.state.temperatura ) + "°C" || ""}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontStyle: "italic" }}>{this.state.tempo || ""}</Text>
                    <View>
                        <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 5, margin: 5 }}
                            placeholder="Digite a cidade"
                            placeholderTextColor="gray"
                            onChangeText={( text ) => this.setState( { cidadeEncontrada: text } )}
                            clearButtonMode={"always"}
                            clearTextOnFocus={true}
                            enablesReturnKeyAutomatically={true}
                            returnKeyType={"search"}
                            onSubmitEditing={this.getWeather} />

                        <Button title="Atualizar" onPress={() => this.props.navigation.navigate( "Detail" )} style={{ borderRadius: 10, margin: 5, }}></Button>
                    </View>
                </View>
            </View >
        );
    }



}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 5
    },
    icon: {
        textAlign: 'center',
        fontFamily: 'WeatherIcons-Regular',
        fontSize: 130,
        padding: 0
    }
} );