// Индекс передних рогов головного мозга


const width_input = document.querySelector('.ant__horn__width');
const distance_input = document.querySelector('.ant__horn__distance');

function horn_index() {
    let width = +width_input.value;
    let distance = +distance_input.value;

    let index = document.querySelector('.ant__horn__index');

    let result = width / distance * 100;
    index.innerHTML = result.toFixed(2);

    index.classList.remove('red')
    index.classList.remove('green')

    if (index.innerHTML > 24 && index.innerHTML < 29.4) index.classList.add('green');
    else index.classList.add('red');

    let norm_before_60 = document.querySelector('.norm_before_60');
    let norm_after_60 = document.querySelector('.norm_after_60');

    norm_before_60.classList.remove('red')
    norm_before_60.classList.remove('green')

    norm_after_60.classList.remove('red')
    norm_after_60.classList.remove('green')

    if (index.innerHTML > 24 && index.innerHTML < 26.3) norm_before_60.classList.add('green');
    else norm_before_60.classList.add('red');

    if (index.innerHTML > 28.2 && index.innerHTML < 29.4) norm_after_60.classList.add('green');
    else norm_after_60.classList.add('red');
}

width_input.addEventListener('input', () => {
    if (width_input.value && distance_input.value) horn_index();
})

distance_input.addEventListener('input', () => {
    if (width_input.value && distance_input.value) horn_index();
})
