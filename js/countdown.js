simplyCountdown('#cuenta', {
    year: 2022,
    month: 10,
    day: 23,
    hours: 0-3,
    minutes: 0,
    seconds: 0,
    word: {
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-countdown-inline',
    enableUtc: true,
    onEnd: function () {
        document.getElementById('portada').classList.add('oculta');
        var cosaNueva = document.querySelector(".contenedor");
        cosaNueva.innerHTML = "<div class='logotipo'><h1 class='logotipo'>¡Feliz cumpleaños!</h1></div>"
        return (cosaNueva)
    },
    refresh: 1000,
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false
});