export default function ( dayLong, short )
{
    var a = new Date( dayLong * 1000 );
    var days = [];
    if ( short )
        days = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ];
    else
        days = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ];

    var dayOfWeek = days[ a.getDay() ]

    return dayOfWeek;
}