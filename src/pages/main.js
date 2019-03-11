import React, { Component } from 'react';

import { StyleSheet, View, Text, TextInput, FlatList, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import api from "../services/api";
import DayWeek from "../utils/dayWeek"
import ColorOpacity from "../utils/colorOpacity"
import IconsWeather from "../images/iconsWeather"
import Moment from "../utils/moment"
import BackgrondWeather from "../images/backgroundWeather"


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
        temperatura: '',
        temperaturaMax: '',
        temperaturaMin: '',
        cidadeEncontrada: "Blumenau",
        icone: "",
        dias: []
    };
    componentDidMount ()
    {
        this.getWeather();
    }


    getWeather = async () => 
    {

        city = this.state.cidadeEncontrada + "," + this.state.pais;
        var responseCurrentWeather = '';
        await api.get( `/weather?q=${ city }"&lang=pt&units=metric&APPID=${ APPID }` ).
            then(
                async ( response ) => 
                {
                    responseCurrentWeather = response;

                    this.setState( {
                        cidade: responseCurrentWeather.data.name + ',' + responseCurrentWeather.data.sys.country,
                        pais: responseCurrentWeather.data.sys.country,
                        tempo: responseCurrentWeather.data.weather[ 0 ].description,
                        temperatura: responseCurrentWeather.data.main.temp,
                        temperaturaMax: responseCurrentWeather.data.main.temp_max,
                        temperaturaMin: responseCurrentWeather.data.main.temp_min,
                        icone: responseCurrentWeather.data.weather[ 0 ].icon
                    } );

                    await this.getForecast();
                }
            )
            .catch( error =>
            {
                Alert.alert(
                    'Atenção',
                    'Cidade não encontrada!',
                    [
                        { text: 'OK', onPress: () => console.log( 'OK Pressed' ) },
                    ],
                    { cancelable: false },
                );
            } )


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
    actionOnRow ( item )
    {
        console.log( 'Selected Item :', item );

        this.props.navigation.navigate( "Detail", { previsaoDetalhadaDia: item } )
    }
    render ()
    {
        return (

            <View style={styles.container}>
                <BackgrondWeather icone={this.state.icone} />
                <View style={styles.viewInput}>
                    <TextInput style={styles.inputCidade}
                        placeholder="Digite a cidade"
                        placeholderTextColor="gray"
                        onChangeText={( text ) => this.setState( { cidadeEncontrada: text } )}
                        clearButtonMode={"always"}
                        clearTextOnFocus={true}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={"search"}
                        onSubmitEditing={this.getWeather} />
                    <Text style={styles.cidade}>{this.state.cidade}</Text>
                </View>
                <View style={styles.icon}>
                    <IconsWeather name={this.state.icone} size={130} color={'white'} />
                    <Text style={styles.tempoAtual}>{this.state.tempo || ""}</Text>
                </View>

                <View style={styles.viewTemperaturasAtuais}>
                    <Text style={styles.temperaturaAtual}>{Math.round( this.state.temperatura ) + "°" || ""}</Text>
                    <View style={{ height: 50, width: 1, backgroundColor: ColorOpacity( "#FFFFFF", 60 ), margin: 5 }}></View>
                    <View style={styles.viewTemperaturaMinMax}>
                        <Text style={styles.temperaturaMaximaAtual}>{"↑ " + Math.round( this.state.temperaturaMax ) + "°" || ""}</Text>
                        <Text style={styles.temperaturaMinimaAtual}>{"↓ " + Math.round( this.state.temperaturaMin ) + "°" || ""}</Text>
                    </View>
                </View>


                <View style={styles.viewList}>
                    <FlatList
                        data={this.state.dias}
                        keyExtractor={( item, index ) => 'key' + index}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={( { item } ) =>
                            <TouchableWithoutFeedback onPress={() => this.actionOnRow( item )}>
                                <View style={styles.list}>
                                    <Text style={styles.nomeDia}>{DayWeek( item.dt, true )}</Text>
                                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', }}>{Moment( new Date( item.dt_txt.replace( ' ', 'T' ) ) ).format( "HH:mm" )}</Text>
                                    <IconsWeather name={item.weather[ 0 ].icon} size={30} color={'white'} />
                                    <Text style={styles.temperaturaMaximaDias}>{"↑ " + Math.round( item.main.temp_max ) + "°" || ""}</Text>
                                    <Text style={styles.temperaturaMinimaDias}>{"↓ " + Math.round( item.main.temp_min ) + "°" || ""}</Text>
                                </View>
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
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#000'
    },
    icon: {
        alignItems: "center",
        position: "absolute",
        top: 120,
        width: "100%"
    },
    viewList: {
        position: "absolute",
        top: 400,
        margin: 10
    },
    list: {
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        margin: 5,
        backgroundColor: ColorOpacity( "#FFFFFF", 20 )
    },
    cidade: {
        textAlign: 'center',
        fontSize: 40,
        fontStyle: "italic",
        color: 'white'
    },
    viewTemperaturasAtuais: {
        position: "absolute",
        top: 300,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        height: 60,
        maxHeight: 80
    },
    tempoAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: "italic",
        color: 'white'
    },
    temperaturaAtual: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: "bold",
        color: 'white'
    },
    viewTemperaturaMinMax: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    temperaturaMaximaAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: '#FF703D'
    },
    temperaturaMinimaAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: '#3D94FF'
    },
    temperaturaMaximaDias: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
        color: '#FF703D'
    },
    temperaturaMinimaDias: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
        color: '#3D94FF'
    },
    nomeDia: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
    },
    viewInput: {
        position: "absolute",
        flex: 1,
        top: 10,
        width: '100%'
    },
    inputCidade: {
        height: 40,
        borderColor: '#6870DD',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white",
        margin: 5
    }

} );