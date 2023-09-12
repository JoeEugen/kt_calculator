// Криволинейный объем для гематом

document.querySelector('.hematoma__btn').addEventListener('click', () => {
    let L = document.querySelectorAll('.hematoma__L');
    let B = document.querySelectorAll('.hematoma__B');
    let S = document.querySelectorAll('.hematoma__S');

    let L_summ = 0;
    let B_summ = 0;
    let S_summ = 0;

    for (let i = 0; i < L.length; i++) {
        L_summ = +L[i].value + L_summ;
    }

    for (let i = 0; i < B.length; i++) {
        B_summ = +B[i].value + B_summ;
    }

    for (let i = 0; i < S.length; i++) {
        S_summ = +S[i].value + S_summ;
    }
    console.log(L.length)


    document.querySelector('.hematoma__L__summa').innerHTML = L_summ;
    document.querySelector('.hematoma__B__summa').innerHTML = B_summ;
    document.querySelector('.hematoma__S__summa').innerHTML = S_summ;

    let hematoma__result = L_summ * B_summ * S_summ * 0.52;

    document.querySelector('.hematoma__result').innerHTML = hematoma__result;
})
