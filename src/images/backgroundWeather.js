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
    debugger;
    //var imagem = '../images/imageWeather/' + ICONS[ props.icone ];
    switch ( props.icone )
    {
        case '01d':
            return <Image source={{ uri: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=4k-wallpaper-blue-sky-blur-281260.jpg&fm=jpg' }} style={styles.configImage} />
        case '02d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiXlOzc3fngAhVKrlkKHYnDBdwQjRx6BAgBEAU&url=https%3A%2F%2Fthemeditationcircle.com%2Farchives%2F2588&psig=AOvVaw0CS5npqpE5DsPUMN8Ku2eC&ust=1552381427837464' }} style={styles.configImage} />
        case '03d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj-79WQ3vngAhVrzlkKHfr-BKEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz2UDZMu2GLU&psig=AOvVaw1f8iyFYHXHbPjLTNo7Wm7-&ust=1552381527188680' }} style={styles.configImage} />
        case '04d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjehMKX3_ngAhUDxVkKHSbLDKQQjRx6BAgBEAU&url=https%3A%2F%2Fmedium.com%2F%40gustavoscholl%2Fhoje-o-dia-estava-nublado-666fdaa3e79&psig=AOvVaw26kgjenkk9tFrYRwqS6d2A&ust=1552381844960178' }} style={styles.configImage} />
        case '09d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwij8KHV4PngAhXE1VkKHee1A7cQjRx6BAgBEAU&url=https%3A%2F%2Fsuper.abril.com.br%2Fmundo-estranho%2Fde-onde-vem-o-cheiro-da-chuva%2F&psig=AOvVaw3JO6mslsJiuinkrer_2x5b&ust=1552382228707193' }} style={styles.configImage} />
        case '10d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjMwPOA4fngAhVhtlkKHXbsAdMQjRx6BAgBEAU&url=http%3A%2F%2Fwww.atenasnoticias.com.br%2Fsite%2Fconteudo.asp%3Fcodigo%3D49220&psig=AOvVaw1nTQ9DCXYTol9bnmOf2VU_&ust=1552382337280099' }} style={styles.configImage} />
        case '11d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjnnb2i4fngAhUy1lkKHUznCwIQjRx6BAgBEAU&url=http%3A%2F%2Fnoticias.ambientebrasil.com.br%2Fclipping%2F2019%2F01%2F16%2F149768-laser-e-usado-para-desencadear-atividade-eletrica-artificial-em-uma-tempestade.html&psig=AOvVaw0iRfSqyia54HS_VlH73Ju2&ust=1552382407651941' }} style={styles.configImage} />
        case '13d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiJ-s3O4fngAhVioFkKHaxYBCMQjRx6BAgBEAU&url=http%3A%2F%2Fwww.joaoalberto.com%2F2018%2F02%2F24%2Fpoint-da-neve-sera-inaugurado-no-recife%2F&psig=AOvVaw3fQ6lKx3V3AGI2W6Wg_HPL&ust=1552382494940732' }} style={styles.configImage} />
        case '50d':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiYmtHc4fngAhVLvFkKHVMoCUsQjRx6BAgBEAU&url=https%3A%2F%2Fdemigodshaven.fandom.com%2Fwiki%2FMist&psig=AOvVaw2SiAL3GXbXNjYgQS0WfZvh&ust=1552382528445643' }} style={styles.configImage} />
        case '01n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiRpOrn4vngAhXBrVkKHYzfCYcQjRx6BAgBEAU&url=https%3A%2F%2Fwallpaperstream.com%2Fcollection%2Fnight-sky%2FShining-Stars-Clear-Sky&psig=AOvVaw1owJykBt0hkSxhzc6yYFHL&ust=1552382817797978' }} style={styles.configImage} />
        case '02n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjO5sP_4vngAhXJtVkKHWE1CFkQjRx6BAgBEAU&url=https%3A%2F%2Fpolysyllabicprofundities.com%2F2013%2F01%2F06%2Fimages-in-clouds%2F&psig=AOvVaw1OHECK9xpispTfObR0ggri&ust=1552382866187748' }} style={styles.configImage} />
        case '03n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiTh-7t5PngAhWH1FkKHTttB3MQjRx6BAgBEAU&url=https%3A%2F%2Fastronomy.stackexchange.com%2Fquestions%2F23428%2Fwhy-do-we-only-see-the-clouds-directly-infront-of-the-moon-glow-from-moon-light&psig=AOvVaw3T4G8Ea7yx9EfYuS2TIo_e&ust=1552383364220020' }} style={styles.configImage} />
        case '04n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjxhcWn6fngAhVAErkGHcZAD9kQjRx6BAgBEAU&url=https%3A%2F%2Fpt.pngtree.com%2Ffreebackground%2Fovercast-or-stormy-clouds-in-the-sky-at-night_991016.html&psig=AOvVaw2ffwCA8wcqJ_niXGAZaA8E&ust=1552384565782037' }} style={styles.configImage} />
        case '09n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQjMLX6fngAhXvKLkGHSsCBCIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.varjotanoticias.com%2F2018%2F12%2Fvarjota-volta-registrar-chuva-fora-de.html&psig=AOvVaw0dUb0Vr2L7vULnSHgTZIki&ust=1552384659064078' }} style={styles.configImage} />
        case '10n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwir1q2W6vngAhVRFLkGHeD0BEUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2FaxDw0&psig=AOvVaw02vSxJ6XdkICcefKLP0yIW&ust=1552384776931674' }} style={styles.configImage} />
        case '11n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjZ7uyh6vngAhXOHLkGHSENAyUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlxSzLIbhB_A&psig=AOvVaw0FdioVKU_6HTlKOwdbegih&ust=1552384703882375' }} style={styles.configImage} />
        case '13n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwif7NWu6vngAhVMF7kGHfzPDZgQjRx6BAgBEAU&url=https%3A%2F%2Fateachinglifedotcom.wordpress.com%2F2016%2F12%2F13%2Fslice-of-life-tuesday-first-snow%2F&psig=AOvVaw2gzJIloyhjM1MYe21khajJ&ust=1552384845522595' }} style={styles.configImage} />
        case '50n':
            return <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizqvbe6vngAhV3D7kGHd2wAlwQjRx6BAgBEAU&url=http%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F431985%2Fz1202.5%2F2880x1800&psig=AOvVaw33VSjILsDh8Kqsy4C7yfYE&ust=1552384948019357' }} style={styles.configImage} />
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


