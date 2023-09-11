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

// Индекс четвертого желудочка

const width_input = document.querySelector('.fourth__vent__width');
const distance_input = document.querySelector('.fourth__vent__distance');

function horn_index() {
    let width = +width_input.value;
    let distance = +distance_input.value;

    let index = document.querySelector('.fourth__vent__index');

    let result = width / distance * 100;
    index.innerHTML = result.toFixed(2);

    let fourth__vent__norm = document.querySelector('.fourth__vent__norm');

    fourth__vent__norm.classList.remove('red')
    fourth__vent__norm.classList.remove('green')

    if (index.innerHTML > 11.3 && index.innerHTML < 13) fourth__vent__norm.classList.add('green');
    else fourth__vent__norm.classList.add('red');

    index.classList.remove('red')
    index.classList.remove('green')

    if (index.innerHTML > 11.3 && index.innerHTML < 13) index.classList.add('green');
    else index.classList.add('red');
}

width_input.addEventListener('input', () => {
    if (width_input.value && distance_input.value) horn_index();
})

distance_input.addEventListener('input', () => {
    if (width_input.value && distance_input.value) horn_index();
})