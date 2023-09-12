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