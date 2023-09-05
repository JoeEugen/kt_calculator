// Боковая панель

document.querySelector('.sidebar__open-close__btn').addEventListener('click', () => {
    document.querySelector('.sidebar__open-close__btn').classList.toggle('sidebar__btn__hide');
    document.querySelector('.nav__sidebar').classList.toggle('sidebar__hide');
})

// Ограничение инпутов, только цифры

const allInputs = document.querySelectorAll('input[type="number"]');

allInputs.forEach(input => {
    input.addEventListener('keydown', e => {
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 |
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }

        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});


// Индекс вымывания (аденома надпочечника)

const plotn_input = document.querySelector('.adrenal__kt__plotn');
const ven_input = document.querySelector('.adrenal__kt__ven');
const ots_input = document.querySelector('.adrenal__kt__ots');

function adrenal_kt() {
    let plotn = +plotn_input.value;
    let ven = +ven_input.value;
    let ots = +ots_input.value;

    let abs = document.querySelector('.adrenal__kt__abs');
    let otnos = document.querySelector('.adrenal__kt__otnos');

    let result_abs = ((ven - ots) / (ven - plotn)) * 100;
    abs.innerHTML = result_abs.toFixed(2);

    let result_otn = ((ven - ots) / ven) * 100;
    otnos.innerHTML = result_otn.toFixed(2);


    abs.classList.remove('red')
    abs.classList.remove('green')

    otnos.classList.remove('red')
    otnos.classList.remove('green')

    if (abs.innerHTML > 60) abs.classList.add('green');
    else abs.classList.add('red');

    if (otnos.innerHTML > 40) otnos.classList.add('green');
    else otnos.classList.add('red');
}

plotn_input.addEventListener('input', () => {
    if (plotn_input.value && ven_input.value && ots_input.value) {
        adrenal_kt()
    }
})

ven_input.addEventListener('input', () => {
    if (plotn_input.value && ven_input.value && ots_input.value) {
        adrenal_kt()
    }
})

ots_input.addEventListener('input', () => {
    if (plotn_input.value && ven_input.value && ots_input.value) {
        adrenal_kt()
    }
})


const protivofaza_input = document.querySelector('.adrenal__mrt__protivofaza');
const faza_input = document.querySelector('.adrenal__mrt__faza');
const protivofaza_spleen_input = document.querySelector('.spleen__mrt__protivofaza');
const faza_spleen_input = document.querySelector('.spleen__mrt__faza');


function adrenal__mrt() {
    let protivofaza = +protivofaza_input.value;
    let faza = +faza_input.value;
    let protivofaza_spleen = +protivofaza_spleen_input.value;
    let faza_spleen = +faza_spleen_input.value;

    let index = document.querySelector('.adrenal__mrt__index');

    let result = ((protivofaza / protivofaza_spleen) / (faza / faza_spleen)) * 100;
    index.innerHTML = result.toFixed(2);
}

protivofaza_input.addEventListener('input', () => {
    if (protivofaza_input.value && faza_input.value && protivofaza_spleen_input.value && faza_spleen_input.value) {
        adrenal__mrt()
    }
})

faza_input.addEventListener('input', () => {
    if (protivofaza_input.value && faza_input.value && protivofaza_spleen_input.value && faza_spleen_input.value) {
        adrenal__mrt()
    }
})

protivofaza_spleen_input.addEventListener('input', () => {
    if (protivofaza_input.value && faza_input.value && protivofaza_spleen_input.value && faza_spleen_input.value) {
        adrenal__mrt()
    }
})

faza_spleen_input.addEventListener('input', () => {
    if (protivofaza_input.value && faza_input.value && protivofaza_spleen_input.value && faza_spleen_input.value) {
        adrenal__mrt()
    }
})