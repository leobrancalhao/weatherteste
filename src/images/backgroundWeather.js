import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ICONS = {
    i01d: require( '../../assets/imageWeather/01d.jpg' ),
    i02d: require( '../../assets/imageWeather/02d.jpg' ),
    i03d: require( '../../assets/imageWeather/03d.jpg' ),
    i04d: require( '../../assets/imageWeather/04d.jpg' ),
    i09d: require( '../../assets/imageWeather/09d.jpg' ),
    i10d: require( '../../assets/imageWeather/10d.jpg' ),
    i11d: require( '../../assets/imageWeather/11d.jpg' ),
    i13d: require( '../../assets/imageWeather/13d.jpg' ),
    i50d: require( '../../assets/imageWeather/50d.jpg' ),
    i01n: require( '../../assets/imageWeather/01n.jpg' ),
    i02n: require( '../../assets/imageWeather/02n.jpg' ),
    i03n: require( '../../assets/imageWeather/03n.jpg' ),
    i04n: require( '../../assets/imageWeather/04n.jpg' ),
    i09n: require( '../../assets/imageWeather/09n.jpg' ),
    i10n: require( '../../assets/imageWeather/10n.jpg' ),
    i11n: require( '../../assets/imageWeather/11n.jpg' ),
    i13n: require( '../../assets/imageWeather/13n.jpg' ),
    i50n: require( '../../assets/imageWeather/50n.jpg' )
};



function BackgroundWeather ( props )
{

    //var imagem = '../images/imageWeather/' + ICONS[ props.icone ];
    switch ( props.icone )
    {
        case '01d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/01d.jpg' }} style={styles.configImage} />
        case '02d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/02d.jpg' }} style={styles.configImage} />
        case '03d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/03d.jpg' }} style={styles.configImage} />
        case '04d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/04d.jpg' }} style={styles.configImage} />
        case '09d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/09d.jpg' }} style={styles.configImage} />
        case '10d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/10d.jpg' }} style={styles.configImage} />
        case '11d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/11d.jpg' }} style={styles.configImage} />
        case '13d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/13d.jpg' }} style={styles.configImage} />
        case '50d':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/50d.jpg' }} style={styles.configImage} />
        case '01n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/01n.jpg' }} style={styles.configImage} />
        case '02n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/02n.jpg' }} style={styles.configImage} />
        case '03n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/03n.jpg' }} style={styles.configImage} />
        case '04n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/04n.jpg' }} style={styles.configImage} />
        case '09n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/09n.jpg' }} style={styles.configImage} />
        case '10n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/10n.jpg' }} style={styles.configImage} />
        case '11n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/11n.jpg' }} style={styles.configImage} />
        case '13n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/13n.jpg' }} style={styles.configImage} />
        case '50n':
            return <Image source={{ uri: 'https://raw.githubusercontent.com/leobrancalhao/weatherteste/master/assets/imageWeather/50n.jpg' }} style={styles.configImage} />
        default:
            return null
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


