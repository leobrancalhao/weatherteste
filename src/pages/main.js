import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
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
        cidade: "",
        pais: "BR",
        tempo: "",
        temperatura: 0,
        temperaturaMax: 0,
        temperaturaMin: 0,
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
                temperaturaMax: responseCurrentWeather.data.main.temp_max,
                temperaturaMin: responseCurrentWeather.data.main.temp_min,
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
            const responseCurrentWeather = await api.get( `/forecast?q=${ city }"&lang=pt&units=metric&APPID=${ APPID }` )

            console.log( responseCurrentWeather.data.list )
            this.setState( {
                dias: responseCurrentWeather.data.list
            } );

        } catch ( error ) 
        {
            console.error( "Erro ao receber os dados atuais" + error );
        }
    };

    space ()
    {
        return ( <View style={{ height: 50, width: 1, backgroundColor: 'white', margin: 5 }} /> )
    }

    actionOnRow ( item )
    {


        console.log( 'Selected Item :', item );

        this.props.navigation.navigate( "Detail", { previsaoDetalhadaDia: item } )
    }

    render ()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.cidade}>{this.state.cidade}</Text>
                <Text style={styles.icon}>
                    {this.state.icone}
                </Text>

                <View style={styles.viewTemperaturasAtuais}>
                    <Text style={styles.temperaturaAtual}>{Math.round( this.state.temperatura ) + "°" || ""}</Text>
                    <View style={styles.viewTemperaturaMinMax}>
                        <Text style={styles.temperaturaMaximaAtual}>{"↑ " + Math.round( this.state.temperaturaMax ) + "°" || ""}</Text>
                        <Text style={styles.temperaturaMinimaAtual}>{"↓ " + Math.round( this.state.temperaturaMin ) + "°" || ""}</Text>
                    </View>
                </View>
                <Text style={styles.tempoAtual}>{this.state.tempo || ""}</Text>
                <View>
                    <TextInput style={styles.inputCidade}
                        placeholder="Digite a cidade"
                        placeholderTextColor="white"
                        onChangeText={( text ) => this.setState( { cidadeEncontrada: text } )}
                        clearButtonMode={"always"}
                        clearTextOnFocus={true}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={"search"}
                        onSubmitEditing={this.getWeather} />

                    {/* <Button title="Atualizar" onPress={() => this.props.navigation.navigate( "Detail" )} style={{ borderRadius: 10, margin: 5, }}></Button> */}

                </View>
                <View>
                    <FlatList
                        data={this.state.dias}
                        keyExtractor={( item, index ) => 'key' + index}
                        ItemSeparatorComponent={this.space}
                        horizontal={true}
                        renderItem={( { item } ) =>
                            <TouchableWithoutFeedback onPress={() => this.actionOnRow( item )}>
                                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', }}>{item.weather[ 0 ].description}</Text>
                            </TouchableWithoutFeedback>
                        }
                    />
                </View>

            </View >
        );
    }



}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: 0,
        backgroundColor: '#82B4FF'
    },
    icon: {
        textAlign: 'center',
        fontFamily: 'WeatherIcons-Regular',
        fontSize: 130,
        padding: 0,
        color: 'white'
    },
    cidade: {
        textAlign: 'center',
        fontSize: 40,
        fontStyle: "italic",
        color: 'white'
    },
    viewTemperaturasAtuais: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    temperaturaAtual: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: "bold",
        color: 'white'
    },
    viewTemperaturaMinMax: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    temperaturaMaximaAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: '#FF5969'
    },
    temperaturaMinimaAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: '#3D6AFF'
    },
    tempoAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        color: 'white'
    },
    inputCidade: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
    }

} );