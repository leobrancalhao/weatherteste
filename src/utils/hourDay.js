export default function ( date )
{
    var date = new Date( date );
    var horas = date.toLocaleTimeString( navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    } );
    return horas;

}