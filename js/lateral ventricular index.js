// Индекс боковых желудочков

const width_input = document.querySelector('.lat__vent__width');
const distance_input = document.querySelector('.lat__vent__distance');

function horn_index() {
    let width = +width_input.value;
    let distance = +distance_input.value;

    let index = document.querySelector('.lat__vent__index');

    let result = width / distance * 100;
    index.innerHTML = result.toFixed(2);

    let norm_before_50 = document.querySelector('.norm_before_50');
    let norm_after_50 = document.querySelector('.norm_after_50');

    norm_before_50.classList.remove('red')
    norm_before_50.classList.remove('green')

    norm_after_50.classList.remove('red')
    norm_after_50.classList.remove('green')

    if (index.innerHTML > 18.4 && index.innerHTML < 22.1) norm_before_50.classList.add('green');
    else norm_before_50.classList.add('red');

    if (index.innerHTML > 22.6 && index.innerHTML < 26) norm_after_50.classList.add('green');
    else norm_after_50.classList.add('red');
}

width_input.addEventListener('input', () => {
    if (width_input.value && distance_input.value) horn_index();
})

distance_input.addEventListener('input', () => {
    if (width_input.value && distance_input.value) horn_index();
})