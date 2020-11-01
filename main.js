const button = document.querySelector('.button');
const pedos = document.querySelector('.pedos');
const coliai = document.querySelector('.coliai');
const answer = document.querySelector('.answer');



button.addEventListener('click', function (e) {

    if (coliai.value === '' || pedos.value === '') {
        answer.innerHTML = 'Pamirsote kazka ivesti...'
    } if (isNaN(pedos.value) || isNaN(coliai.value)) {
        answer.innerHTML = 'Siaip skaicius prasiau irasyti...'
    } if (parseInt(pedos.value) < 0 || parseInt(coliai.value) < 0) {
        answer.innerHTML = 'Irasyti teigiama skaiciu reiktu siaip...'
    } if (parseInt(coliai.value) > 11) {
        answer.innerHTML = 'coliai iki 12 teeina siaip'
    }
    else {
        return answer.innerHTML = pedos.value * 30.48 + coliai.value * 2.54 + ' cm';
    }

})
