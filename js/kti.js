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

// Кардиоторакальный индекс (кардиомегалия)

const heartInput = document.querySelector('.kti__calc__heart');
const chestInput = document.querySelector('.kti__calc__chest');

function calculateKti() {
    let heart_diam = +heartInput.value;
    let chest_diam = +chestInput.value;
    let kti_result = document.querySelector('.kti__index__result');

    kti_result.innerHTML = Math.floor(heart_diam / chest_diam * 100)

    let kti_color = document.querySelector('.kti__index__result');

    kti_color.classList.remove('yellow')
    kti_color.classList.remove('orange')
    kti_color.classList.remove('red')
    kti_color.classList.remove('green')

    if (kti_result.innerHTML < 50 || kti_result.innerHTML == 50) {
        kti_color.classList.add('green')
    }
    else if (kti_result.innerHTML > 50 && kti_result.innerHTML < 57) {
        kti_color.classList.add('yellow')
    }
    else if (kti_result.innerHTML > 56 && kti_result.innerHTML < 61) {
        kti_color.classList.add('orange')
    }
    else if (kti_result.innerHTML > 60) {
        kti_color.classList.add('red')
    }
}

heartInput.addEventListener('input', () => {
    if (heartInput.value && chestInput.value) {
        calculateKti();
    }
});

chestInput.addEventListener('input', () => {
    if (heartInput.value && chestInput.value) {
        calculateKti();
    }
});




const mrgk_input = document.querySelector('.kti__calc__mrgk');
const pr_input = document.querySelector('.kti__calc__pr');
const lr_input = document.querySelector('.kti__calc__lr');

function calculateKti2() {
    let mrgk = +mrgk_input.value;
    let pr = +pr_input.value;
    let lr = +lr_input.value;
    let kti_result = document.querySelector('.kti__index__result__2');

    kti_result.innerHTML = Math.floor((pr + lr) / mrgk * 100)

    let kti_color = document.querySelector('.kti__index__result__2');

    kti_color.classList.remove('yellow')
    kti_color.classList.remove('orange')
    kti_color.classList.remove('red')
    kti_color.classList.remove('green')

    if (kti_result.innerHTML < 50 || kti_result.innerHTML == 50) {
        kti_color.classList.add('green')
    }
    else if (kti_result.innerHTML > 50 && kti_result.innerHTML < 57) {
        kti_color.classList.add('yellow')
    }
    else if (kti_result.innerHTML > 56 && kti_result.innerHTML < 61) {
        kti_color.classList.add('orange')
    }
    else if (kti_result.innerHTML > 60) {
        kti_color.classList.add('red')
    }
};

mrgk_input.addEventListener('input', () => {
    if (mrgk_input.value && pr_input.value && lr_input.value) {
        calculateKti2()
    }
});

pr_input.addEventListener('input', () => {
    if (mrgk_input.value && pr_input.value && lr_input.value) {
        calculateKti2()
    }
});

lr_input.addEventListener('input', () => {
    if (mrgk_input.value && pr_input.value && lr_input.value) {
        calculateKti2()
    }
});
