import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
//FontAwesome5

const ICONS = {
    '01d': 'sun',
    '02d': 'cloud-sun',
    '03d': 'cloud',
    '04d': 'cloud',
    '09d': 'cloud-rain',
    '10d': 'cloud-sun-rain',
    '11d': 'poo-storm',
    '13d': 'snowflake',
    '50d': 'wind',
    '01n': 'moon',
    '02n': 'cloud-moon',
    '03n': 'cloud',
    '04n': 'cloud',
    '09n': 'cloud-rain',
    '10n': 'cloud-moon-rain',
    '11n': 'poo-storm',
    '13n': 'snowflake',
    '50n': 'wind',
};

function IconWeather ( props )
{
    return <Icon name={ICONS[ props.name ]} size={props.size} color={props.color} />;
}

export default IconWeather;