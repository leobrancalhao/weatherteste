import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ICONS = {
    '01d': '01d.jpg',
    '02d': '02d.jpg',
    '03d': '03d.jpg',
    '04d': '04d.jpg',
    '09d': '09d.jpg',
    '10d': '10d.jpg',
    '11d': '11d.jpg',
    '13d': '13d.jpg',
    '50d': '50d.jpg',
    '01n': '01n.jpg',
    '02n': '02n.jpg',
    '03n': '03n.jpg',
    '04n': '04n.jpg',
    '09n': '09n.jpg',
    '10n': '10n.jpg',
    '11n': '11n.jpg',
    '13n': '13n.jpg',
    '50n': '50n.jpg',
};



function BackgroundWeather ( props )
{
    //var imagem = '../images/imageWeather/' + ICONS[ props.icone ];
    switch ( props.icone )
    {
        case '01d':
            return <Image source={require( '../images/imageWeather/01d.jpg' )} style={styles.configImage} />
        case '02d':
            return <Image source={require( '../images/imageWeather/02d.jpg' )} style={styles.configImage} />
        case '03d':
            return <Image source={require( '../images/imageWeather/03d.jpg' )} style={styles.configImage} />
        case '04d':
            return <Image source={require( '../images/imageWeather/04d.jpg' )} style={styles.configImage} />
        case '09d':
            return <Image source={require( '../images/imageWeather/09d.jpg' )} style={styles.configImage} />
        case '10d':
            return <Image source={require( '../images/imageWeather/10d.jpg' )} style={styles.configImage} />
        case '11d':
            return <Image source={require( '../images/imageWeather/11d.jpg' )} style={styles.configImage} />
        case '13d':
            return <Image source={require( '../images/imageWeather/13d.jpg' )} style={styles.configImage} />
        case '50d':
            return <Image source={require( '../images/imageWeather/50d.jpg' )} style={styles.configImage} />
        case '01n':
            return <Image source={require( '../images/imageWeather/01n.jpg' )} style={styles.configImage} />
        case '02n':
            return <Image source={require( '../images/imageWeather/02n.jpg' )} style={styles.configImage} />
        case '03n':
            return <Image source={require( '../images/imageWeather/03n.jpg' )} style={styles.configImage} />
        case '04n':
            return <Image source={require( '../images/imageWeather/04n.jpg' )} style={styles.configImage} />
        case '09n':
            return <Image source={require( '../images/imageWeather/09n.jpg' )} style={styles.configImage} />
        case '10n':
            return <Image source={require( '../images/imageWeather/10n.jpg' )} style={styles.configImage} />
        case '11n':
            return <Image source={require( '../images/imageWeather/11n.jpg' )} style={styles.configImage} />
        case '13n':
            return <Image source={require( '../images/imageWeather/13n.jpg' )} style={styles.configImage} />
        case '50n':
            return <Image source={require( '../images/imageWeather/50n.jpg' )} style={styles.configImage} />
        default:
            return <Image source={require( '../images/imageWeather/50n.jpg' )} style={styles.configImage} />
    }


    //return <Image source={require( '../images/imageWeather/01d.jpg' )} style={imageStyle} />
    //return <Image source={require( "'" + imagem + "'" )} style={styles.configImage} />


}
export default BackgroundWeather

const styles = StyleSheet.create( {
    configImage: {
        width: '100%',
        height: '100%',
        opacity: 0.6
    }
} );


