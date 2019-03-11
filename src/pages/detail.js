import React, { Component } from "react"

import { StyleSheet, View, Text, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
import api from "../services/api";
import DayWeek from "../utils/dayWeek"
import Hour from "../utils/hourDay"
import ColorOpacity from "../utils/colorOpacity"
import IconsWeather from "../images/iconsWeather"
import Moment from "../utils/moment"
import BackgrondWeather from "../images/backgroundWeather"
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
            // <View>
            //     <Text>Segunda tela</Text>
            //     <Text>Detalhes {this.state.previsaoDetalhadaDia.main.temp}</Text>
            // </View>

            <View style={styles.container}>
                <BackgrondWeather icone={this.state.previsaoDetalhadaDia.weather[ 0 ].icon} />

                <View style={styles.viewInput}>
                    <Text style={styles.cidade}>{DayWeek( this.state.previsaoDetalhadaDia.dt )}</Text>
                    <Text style={styles.tempoAtual}>{Moment( new Date( this.state.previsaoDetalhadaDia.dt_txt.replace( ' ', 'T' ) ) ).format( "HH:mm" ) || ""}</Text>
                </View>
                <View style={styles.icon}>
                    <IconsWeather name={this.state.previsaoDetalhadaDia.weather[ 0 ].icon} size={130} color={'white'} />
                    <Text style={styles.tempoAtual}>{this.state.previsaoDetalhadaDia.weather[ 0 ].description || ""}</Text>
                </View>

                <View style={styles.viewTemperaturasAtuais}>
                    <Text style={styles.temperaturaAtual}>{Math.round( this.state.previsaoDetalhadaDia.main.temp ) + "°" || ""}</Text>
                    <View style={{ height: 50, width: 1, backgroundColor: ColorOpacity( "#FFFFFF", 60 ), margin: 5 }}></View>
                    <View style={styles.viewTemperaturaMinMax}>
                        <Text style={styles.temperaturaMaximaAtual}>{"↑ " + Math.round( this.state.previsaoDetalhadaDia.main.temp_max ) + "°" || ""}</Text>
                        <Text style={styles.temperaturaMinimaAtual}>{"↓ " + Math.round( this.state.previsaoDetalhadaDia.main.temp_min ) + "°" || ""}</Text>
                    </View>
                </View>


                <View style={styles.viewInformations1}>
                    <View style={styles.viewInformationItem}>
                        <Text style={styles.textInformationItem}>{`${ this.state.previsaoDetalhadaDia.wind.speed } Km/h` || "0"}</Text>
                        <Text style={styles.textInformationItem}>{'Ventos'}</Text>
                    </View>

                    <View style={styles.viewInformationItem}>
                        <Text style={styles.textInformationItem}>{`${ this.state.previsaoDetalhadaDia.main.humidity } %` || "0"}</Text>
                        <Text style={styles.textInformationItem}>{'Umidade'}</Text>
                    </View>

                    <View style={styles.viewInformationItem}>
                        <Text style={styles.textInformationItem}>{`${ this.state.previsaoDetalhadaDia.rain[ "3h" ] } mm` || "0"}</Text>
                        <Text style={styles.textInformationItem}>{'Chuva'}</Text>
                    </View>
                </View>
                <View style={styles.viewInformations2}>
                    <View style={styles.viewInformationItem}>
                        <Text style={styles.textInformationItem}>{`${ this.state.previsaoDetalhadaDia.main.pressure } hPA` || "0"}</Text>
                        <Text style={styles.textInformationItem}>{'Pressão Atm.'}</Text>
                    </View>

                    <View style={styles.viewInformationItem}>
                        <Text style={styles.textInformationItem}>{`${ this.state.previsaoDetalhadaDia.main.sea_level } hPA` || "0"}</Text>
                        <Text style={styles.textInformationItem}>{'Pressão mar'}</Text>
                    </View>

                    <View style={styles.viewInformationItem}>
                        <Text style={styles.textInformationItem}>{`${ this.state.previsaoDetalhadaDia.main.grnd_level } hPA` || "0"}</Text>
                        <Text style={styles.textInformationItem}>{'Pressão solo'}</Text>
                    </View>
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
    viewInformations1: {
        position: "absolute",
        top: 360,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10
    },
    viewInformations2: {
        position: "absolute",
        top: 470,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10
    },
    viewInformationItem: {
        alignItems: 'center',
        justifyContent: "center",
        width: 99,
        height: 99,
        borderRadius: 99 / 2,
        backgroundColor: ColorOpacity( "#FFFFFF", 20 ),
        margin: 5
    },
    textInformationItem: {
        textAlign: 'center',
        fontSize: 15,
        fontStyle: "italic",
        margin: 5,
        color: 'white'
    },
    list: {
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        margin: 5,
        backgroundColor: ColorOpacity( "#FFFFFF", 20 ),
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
        color: '#FF5969'
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