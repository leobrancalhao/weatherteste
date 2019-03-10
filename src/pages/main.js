import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
import api from "../services/api";
import DayWeek from "../utils/dayWeek"
import Hour from "../utils/hourDay"
import ColorOpacity from "../utils/colorOpacity"
import IconsWeather from "../images/iconsWeather"
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
        icone: "",
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
                icone: responseCurrentWeather.data.weather[ 0 ].icon
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
    actionOnRow ( item )
    {


        console.log( 'Selected Item :', item );

        this.props.navigation.navigate( "Detail", { previsaoDetalhadaDia: item } )
    }

    render ()
    {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
                    <View style={styles.container}>

                        <View>
                            <TextInput style={styles.inputCidade}
                                placeholder="Digite a cidade"
                                placeholderTextColor="gray"
                                onChangeText={( text ) => this.setState( { cidadeEncontrada: text } )}
                                clearButtonMode={"always"}
                                clearTextOnFocus={true}
                                enablesReturnKeyAutomatically={true}
                                returnKeyType={"search"}
                                onSubmitEditing={this.getWeather} />

                            {/* <Button title="Atualizar" onPress={() => this.props.navigation.navigate( "Detail" )} style={{ borderRadius: 10, margin: 5, }}></Button> */}

                        </View>
                        <Text style={styles.cidade}>{this.state.cidade}</Text>
                        {/* <Text style={styles.icon}>
                    {this.state.icone}
                </Text> */}
                        <View style={styles.icon}>
                            <IconsWeather name={this.state.icone} size={130} color={'white'} />
                            <Text style={styles.tempoAtual}>{this.state.tempo || ""}</Text>
                        </View>

                        <View style={styles.viewTemperaturasAtuais}>
                            <Text style={styles.temperaturaAtual}>{Math.round( this.state.temperatura ) + "°" || ""}</Text>
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
                                            <Text style={styles.nomeDia}>{DayWeek( item.dt )}</Text>
                                            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', }}>{Hour( item.dt_txt )}</Text>
                                            <IconsWeather name={item.weather[ 0 ].icon} size={30} color={'white'} />
                                            <Text style={styles.temperaturaMaximaDias}>{"↑ " + Math.round( item.main.temp_max ) + "°" || ""}</Text>
                                            <Text style={styles.temperaturaMinimaDias}>{"↓ " + Math.round( item.main.temp_min ) + "°" || ""}</Text>


                                        </View>
                                    </TouchableWithoutFeedback>
                                }
                            />
                        </View>

                    </View >
                </ScrollView>
            </KeyboardAvoidingView>
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
        padding: 5,
        backgroundColor: '#82B4FF'
    },
    icon: {
        alignItems: "center"
    },
    viewList: {
        margin: 10
    },
    list: {
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        margin: 5,
        backgroundColor: ColorOpacity( "#0061FF", 10 )
    },
    cidade: {
        textAlign: 'center',
        fontSize: 40,
        fontStyle: "italic",
        color: 'white'
    },
    viewTemperaturasAtuais: {
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
        fontWeight: "bold",
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
        color: '#FF5969'
    },
    temperaturaMinimaAtual: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: '#3D6AFF'
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
        color: '#3D6AFF'
    },
    nomeDia: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
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