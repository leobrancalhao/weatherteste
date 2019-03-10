export default function ( date )
{
    var date = new Date( date );

    return date.toLocaleTimeString( navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    } );

}