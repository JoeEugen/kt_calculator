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