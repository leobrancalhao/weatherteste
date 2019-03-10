export default function ( dayLong )
{
    var a = new Date( dayLong * 1000 );
    var days = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ];
    var dayOfWeek = days[ a.getDay() ]

    return dayOfWeek;
}