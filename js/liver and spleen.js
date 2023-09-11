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

// Печень и селезенка

document.querySelector('.pis__calc__right').addEventListener('input', () => {
    let calc__right = +document.querySelector('.pis__calc__right').value;
    let calc = document.querySelector('.pis__calc__right');

    if (calc__right < 150) {
        calc.classList.add('green__text');
        calc.classList.remove('red__text');
    }
    else {
        calc.classList.add('red__text');
        calc.classList.remove('green__text');
    }
})

document.querySelector('.pis__calc__left').addEventListener('input', () => {
    let calc__left = +document.querySelector('.pis__calc__left').value;
    let calc = document.querySelector('.pis__calc__left');

    if (calc__left < 50) {
        calc.classList.add('green__text');
        calc.classList.remove('red__text');
    }
    else {
        calc.classList.add('red__text');
        calc.classList.remove('green__text');
    }
})

document.querySelector('.pis__calc__plotn').addEventListener('input', () => {
    let calc__plotn = +document.querySelector('.pis__calc__plotn').value;
    let calc = document.querySelector('.pis__calc__plotn');

    if (calc__plotn < 41) {
        calc.classList.add('green__text');
        calc.classList.remove('red__text');
    }
    else {
        calc.classList.add('red__text');
        calc.classList.remove('green__text');
    }
})

document.querySelector('.pis__sel__dlinna').addEventListener('input', () => {
    let sel__dlinna = +document.querySelector('.pis__sel__dlinna').value;
    let calc = document.querySelector('.pis__sel__dlinna');

    calc.classList.remove('yellow__text');
    calc.classList.remove('red__text');
    calc.classList.remove('green__text');

    if (sel__dlinna < 119 || sel__dlinna == 119) {
        calc.classList.add('green__text');
    }

    else if (sel__dlinna > 119 && sel__dlinna < 141) {
        calc.classList.add('yellow__text');
    }
    else if (sel__dlinna > 140) {
        calc.classList.add('red__text');
    }
})

document.querySelector('.pis__sel__shirina').addEventListener('input', () => {
    let sel__shirina = +document.querySelector('.pis__sel__shirina').value;
    let calc = document.querySelector('.pis__sel__shirina');

    calc.classList.remove('yellow__text');
    calc.classList.remove('red__text');
    calc.classList.remove('green__text');

    if (sel__shirina < 45 || sel__shirina == 45) {
        calc.classList.add('green__text');
    }

    else if (sel__shirina > 45 && sel__shirina < 66) {
        calc.classList.add('yellow__text');
    }
    else if (sel__shirina > 65) {
        calc.classList.add('red__text');
    }
})


const pd_input = document.querySelector('.pd__calc');
const hd_input = document.querySelector('.hd__calc');


function pd_hd() {
    let pd = +pd_input.value;
    let hd = +hd_input.value;
    let pd_hd = document.querySelector('.pd-hd__calc__result');

    let pd_hd__result = hd / pd;
    pd_hd.innerHTML = pd_hd__result.toFixed(2);

    pd_hd.classList.remove('yellow')
    pd_hd.classList.remove('orange')
    pd_hd.classList.remove('red')
    pd_hd.classList.remove('green')

    if (pd_hd.innerHTML < 0.6 || pd_hd.innerHTML == 0.6) {
        pd_hd.classList.add('green')
    }
    else if (pd_hd.innerHTML > 0.6 && pd_hd.innerHTML < 0.66) {
        pd_hd.classList.add('yellow')
    }
    else if (pd_hd.innerHTML > 0.65 && pd_hd.innerHTML < 0.74) {
        pd_hd.classList.add('orange')
    }
    else if (pd_hd.innerHTML > 0.74) {
        pd_hd.classList.add('red')
    }
}

pd_input.addEventListener('input', () => {
    if (pd_input.value && hd_input.value) pd_hd();
})

hd_input.addEventListener('input', () => {
    if (pd_input.value && hd_input.value) pd_hd();
})



const dlinna_input = document.querySelector('.pis__sel__dlinna');
const shirina_input = document.querySelector('.pis__sel__shirina');
const visota_input = document.querySelector('.pis__sel__visota');


function dsv_index() {
    let dlinna = +dlinna_input.value;
    let shirina = +shirina_input.value;
    let visota = +visota_input.value;

    let index = document.querySelector('.sel__calc__result');

    index.innerHTML = dlinna * shirina * visota / 1000;

    index.classList.remove('red')
    index.classList.remove('green')

    if (index.innerHTML < 501) {
        index.classList.add('green')
    }

    else {
        index.classList.add('red')
    }
}

dlinna_input.addEventListener('input', () => {
    if (visota_input.value && shirina_input.value && dlinna_input.value) dsv_index();
})

shirina_input.addEventListener('input', () => {
    if (visota_input.value && shirina_input.value && dlinna_input.value) dsv_index();
})

visota_input.addEventListener('input', () => {
    if (visota_input.value && shirina_input.value && dlinna_input.value) dsv_index();
})



const plotn__pechen_input = document.querySelector('.pis__calc__plotn');
const plotn__sel_input = document.querySelector('.plotn__sel');

function plotn() {
    let plotn__pechen = +plotn__pechen_input.value;
    let plotn__sel = +plotn__sel_input.value;

    let minus = document.querySelector('.pis__plotn__minus');
    let razdelit = document.querySelector('.pis__plotn__razdelit');

    minus.innerHTML = plotn__pechen - plotn__sel;

    let result = plotn__pechen / plotn__sel;
    razdelit.innerHTML = result.toFixed(2);

    minus.classList.remove('red')
    minus.classList.remove('green')

    if (minus.innerHTML > -9) {
        minus.classList.add('green')
    }

    else {
        minus.classList.add('red')
    }

    razdelit.classList.remove('red')
    razdelit.classList.remove('green')

    if (razdelit.innerHTML > 0.9) {
        razdelit.classList.add('green')
    }

    else {
        razdelit.classList.add('red')
    }
}

plotn__pechen_input.addEventListener('input', () => {
    if (plotn__pechen_input.value && plotn__sel_input.value) plotn();
})

plotn__sel_input.addEventListener('input', () => {
    if (plotn__pechen_input.value && plotn__sel_input.value) plotn();
})



const mrt__f__n__p_input = document.querySelector('.mrt__faza__n__pech');
const mrt__f__pn__p_input = document.querySelector('.mrt__faza__pn__pech');
const mrt__f__n__s_input = document.querySelector('.mrt__faza__n__sel');
const mrt__f__pn__s_input = document.querySelector('.mrt__faza__pn__sel');


function fat_index() {
    let mrt__f__n__p = +mrt__f__n__p_input.value;
    let mrt__f__pn__p = +mrt__f__pn__p_input.value;
    let mrt__f__n__s = +mrt__f__n__s_input.value;
    let mrt__f__pn__s = +mrt__f__pn__s_input.value;

    let fat__index__mrt = document.querySelector('.fat__index__mrt');

    let result = (((mrt__f__n__p / mrt__f__n__s) - (mrt__f__pn__p / mrt__f__pn__s)) / (2 * mrt__f__n__p / mrt__f__n__s)) * 100;

    fat__index__mrt.innerHTML = result.toFixed(2);

    fat__index__mrt.classList.remove('yellow')
    fat__index__mrt.classList.remove('orange')
    fat__index__mrt.classList.remove('red')
    fat__index__mrt.classList.remove('green')

    if (fat__index__mrt.innerHTML < 5 || fat__index__mrt.innerHTML == 5) {
        fat__index__mrt.classList.add('green')
    }
    else if (fat__index__mrt.innerHTML > 5 && fat__index__mrt.innerHTML < 34) {
        fat__index__mrt.classList.add('yellow')
    }
    else if (fat__index__mrt.innerHTML > 33 && fat__index__mrt.innerHTML < 67) {
        fat__index__mrt.classList.add('orange')
    }
    else if (fat__index__mrt.innerHTML > 66) {
        fat__index__mrt.classList.add('red')
    }
}

mrt__f__n__p_input.addEventListener('input', () => {
    if (mrt__f__n__p_input.value && mrt__f__pn__p_input.value && mrt__f__n__s_input.value && mrt__f__pn__s_input.value) fat_index();
})

mrt__f__pn__p_input.addEventListener('input', () => {
    if (mrt__f__n__p_input.value && mrt__f__pn__p_input.value && mrt__f__n__s_input.value && mrt__f__pn__s_input.value) fat_index();
})

mrt__f__n__s_input.addEventListener('input', () => {
    if (mrt__f__n__p_input.value && mrt__f__pn__p_input.value && mrt__f__n__s_input.value && mrt__f__pn__s_input.value) fat_index();
})

mrt__f__pn__s_input.addEventListener('input', () => {
    if (mrt__f__n__p_input.value && mrt__f__pn__p_input.value && mrt__f__n__s_input.value && mrt__f__pn__s_input.value) fat_index();
})