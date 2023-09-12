// Объем элипса, сферы

document.querySelector('.elips__btn').addEventListener('click', () => {
    let length_1 = +document.querySelector('.length__1').value;
    let width_1 = +document.querySelector('.width__1').value;
    let hight_1 = +document.querySelector('.hight__1').value;

    let length_2 = +document.querySelector('.length__2').value;
    let width_2 = +document.querySelector('.width__2').value;
    let hight_2 = +document.querySelector('.hight__2').value;

    let length_3 = +document.querySelector('.length__3').value;
    let width_3 = +document.querySelector('.width__3').value;
    let hight_3 = +document.querySelector('.hight__3').value;

    let result_1 = document.querySelector('.elips__1__result');
    let result_2 = document.querySelector('.elips__2__result');
    let result_3 = document.querySelector('.elips__3__result');

    let result = document.querySelector('.elips__result');

    let res_1 = ((4 / 3) * 3.14 * (length_1 / 2) * (width_1 / 2) * (hight_1 / 2)) / 1000;
    let res_2 = ((4 / 3) * 3.14 * (length_2 / 2) * (width_2 / 2) * (hight_2 / 2)) / 1000;
    let res_3 = ((4 / 3) * 3.14 * (length_3 / 2) * (width_3 / 2) * (hight_3 / 2)) / 1000;

    result_1.innerHTML = res_1.toFixed(2);
    result_2.innerHTML = res_2.toFixed(2);
    result_3.innerHTML = res_3.toFixed(2);

    result.innerHTML = +result_1.textContent + +result_2.textContent + +result_3.textContent;
})
