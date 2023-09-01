// Боковая панель

document.querySelector('.sidebar__open-close__btn').addEventListener('click', () => {
    document.querySelector('.sidebar__open-close__btn').classList.toggle('sidebar__btn__hide');
    document.querySelector('.nav__sidebar').classList.toggle('sidebar__hide');
})

// Кардиоторакальный индекс (кардиомегалия)
try {
    document.querySelector('.kti__calc__btn__1').addEventListener('click', () => {
        let heart_diam = +document.querySelector('.kti__calc__heart').value;
        let chest_diam = +document.querySelector('.kti__calc__chest').value;
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
    })

    document.querySelector('.kti__calc__btn__2').addEventListener('click', () => {
        let mrgk = +document.querySelector('.kti__calc__mrgk').value;
        let pr = +document.querySelector('.kti__calc__pr').value;
        let lr = +document.querySelector('.kti__calc__lr').value;
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
    })
}

catch { console.log('err') }


// Печень и селезенка

try {

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

    document.querySelector('.pd-hd__calc__btn').addEventListener('click', () => {
        let pd = +document.querySelector('.pd__calc').value;
        let hd = +document.querySelector('.hd__calc').value;
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

    document.querySelector('.sel__calc__btn').addEventListener('click', () => {
        let dlinna = +document.querySelector('.pis__sel__dlinna').value;
        let shirina = +document.querySelector('.pis__sel__shirina').value;
        let visota = +document.querySelector('.pis__sel__visota').value;

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
    })

    document.querySelector('.pis__plotn__btn').addEventListener('click', () => {
        let plotn__pechen = +document.querySelector('.pis__calc__plotn').value;
        let plotn__sel = +document.querySelector('.plotn__sel').value;

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
    })

    document.querySelector('.fat__index__mrt__btn').addEventListener('click', () => {
        let mrt__f__n__p = +document.querySelector('.mrt__faza__n__pech').value;
        let mrt__f__pn__p = +document.querySelector('.mrt__faza__pn__pech').value;
        let mrt__f__n__s = +document.querySelector('.mrt__faza__n__sel').value;
        let mrt__f__pn__s = +document.querySelector('.mrt__faza__pn__sel').value;

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

    })
}

catch { console.log('err') }


// Индекс вымывания (аденома надпочечника)

try {

    document.querySelector('.adrenal__kt__btn').addEventListener('click', () => {
        let plotn = +document.querySelector('.adrenal__kt__plotn').value;
        let ven = +document.querySelector('.adrenal__kt__ven').value;
        let ots = +document.querySelector('.adrenal__kt__ots').value;

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
    })

    document.querySelector('.adrenal__mrt__btn').addEventListener('click', () => {
        let protivofaza = +document.querySelector('.adrenal__mrt__protivofaza').value;
        let faza = +document.querySelector('.adrenal__mrt__faza').value;
        let protivofaza_spleen = +document.querySelector('.spleen__mrt__protivofaza').value;
        let faza_spleen = +document.querySelector('.spleen__mrt__faza').value;

        let index = document.querySelector('.adrenal__mrt__index');

        let result = ((protivofaza / protivofaza_spleen) / (faza / faza_spleen)) * 100;
        index.innerHTML = result.toFixed(2);
    })
}

catch { console.log('err') }

// Индекс передних рогов головного мозга

try {
    document.querySelector('.ant__horn__btn').addEventListener('click', () => {
        let width = +document.querySelector('.ant__horn__width').value;
        let distance = +document.querySelector('.ant__horn__distance').value;

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
    })
}
catch { console.log('err') }

// Индекс боковых желудочков

try {
    document.querySelector('.lat__vent__btn').addEventListener('click', () => {
        let width = +document.querySelector('.lat__vent__width').value;
        let distance = +document.querySelector('.lat__vent__distance').value;

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
    })
}
catch { console.log('err') }

// Индекс четвертого желудочка

try {
    document.querySelector('.fourth__vent__btn').addEventListener('click', () => {
        let width = +document.querySelector('.fourth__vent__width').value;
        let distance = +document.querySelector('.fourth__vent__distance').value;

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
    })
}
catch { console.log('err') }

// Криволинейный объем для гематом

try {
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
}
catch { console.log('err') }

// Объем элипса, сферы

try {
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
}
catch { console.log('err') }


// Деформации позвонков/снижение высоты

try {
    document.querySelector('.spine__btn').addEventListener('click', () => {
        let A = document.querySelectorAll('.A');
        let B = document.querySelectorAll('.B');
        let C = document.querySelectorAll('.C');
        let AB = document.querySelectorAll('.AB');
        let BC = document.querySelectorAll('.BC');
        let AC = document.querySelectorAll('.AC');
        let S_AB = document.querySelectorAll('.S_AB');
        let S_BC = document.querySelectorAll('.S_BC');
        let S_AC = document.querySelectorAll('.S_AC');

        let spine__calc = document.querySelectorAll('.spine__calc');

        let Amax = 0;
        let Amin = 100;
        let result = [];
        let procent = 0;
        let red = 0;
        let green = 0;
        let blue = 0;
        let colorStop = 0;

        for (let i = 0; i < spine__calc.length; i++) {

            //Средн. показатели

            let calc = (+A[i].value + +B[i].value + +C[i].value) / 3;
            result.push(calc.toFixed(3));

            if (Amax < calc) Amax = calc;
            if (Amin > calc) Amin = calc;

            // Обл деформации пер, ср, задн.

            let AB_result = +B[i].value / +A[i].value * 100;
            let BC_result = +B[i].value / +C[i].value * 100;
            let AC_result = +A[i].value / +C[i].value * 100;

            AB[i].classList.remove('red');
            AB[i].classList.remove('green');

            BC[i].classList.remove('red');
            BC[i].classList.remove('green');

            AC[i].classList.remove('red');
            AC[i].classList.remove('gray');
            AC[i].classList.remove('blue');

            if (AB_result >= 81 && AB_result <= 124) AB[i].classList.add('green');
            else if (AB_result > 124) AB[i].classList.add('red');
            else if (AB_result < 81) AB[i].classList.add('red');

            if (BC_result >= 81 && BC_result <= 124) BC[i].classList.add('green');
            else if (BC_result > 124) BC[i].classList.add('red');
            else if (BC_result < 81) BC[i].classList.add('red');

            if (AC_result >= 81 && AC_result <= 124) AC[i].classList.add('green');
            else if (AC_result > 124) AC[i].classList.add('gray');
            else if (AC_result < 81) AC[i].classList.add('blue');


            // Степень деформ

            let S_AB_result = AB_result - 100;
            let S_BC_result = BC_result - 100;
            let S_AC_result = AC_result - 100;

            S_AB[i].classList.remove('red');
            S_AB[i].classList.remove('yellow');
            S_AB[i].classList.remove('green');

            S_BC[i].classList.remove('red');
            S_BC[i].classList.remove('yellow');
            S_BC[i].classList.remove('green');

            S_AC[i].classList.remove('red');
            S_AC[i].classList.remove('yellow');
            S_AC[i].classList.remove('green');

            if (S_AB_result >= 20 && S_AB_result <= 25 || S_AB_result >= -20 && S_AB_result <= -25) S_AB[i].classList.add('green');
            else if (S_AB_result >= 26 && S_AB_result <= 40 || S_AB_result >= -26 && S_AB_result <= -40) S_AB[i].classList.add('yellow');
            else if (S_AB_result > 40 || S_AB_result < -40) S_AB[i].classList.add('red');

            if (S_BC_result >= 20 && S_BC_result <= 25 || S_BC_result >= -20 && S_BC_result <= -25) S_BC[i].classList.add('green');
            else if (S_BC_result >= 26 && S_BC_result <= 40 || S_BC_result >= -26 && S_BC_result <= -40) S_BC[i].classList.add('yellow');
            else if (S_BC_result > 40 || S_BC_result < -40) S_BC[i].classList.add('red');

            if (S_AC_result >= 20 && S_AC_result <= 25 || S_AC_result >= -20 && S_AC_result <= -25) S_AC[i].classList.add('green');
            else if (S_AC_result >= 26 && S_AC_result <= 40 || S_AC_result >= -26 && S_AC_result <= -40) S_AC[i].classList.add('yellow');
            else if (S_AC_result > 40 || S_AC_result < -40) S_AC[i].classList.add('red');

        }

        for (let i = 0; i < result.length; i++) {
            procent = (result[i] - Amin) / (Amax - Amin);

            colorStop = Math.round(procent * 99) + 1;

            red = Math.round(255 * (1 - procent));

            green = Math.round(255 * procent);

            spine__calc[i].style.background = "rgb(" + red + "," + green + "," + blue + ")" + colorStop + "%";
        }
    })


    document.querySelector('.spine__btn').addEventListener('click', () => {
        let A_1 = document.querySelectorAll('.A_1');
        let B_1 = document.querySelectorAll('.B_1');
        let C_1 = document.querySelectorAll('.C_1');
        let AB_1 = document.querySelectorAll('.AB_1');
        let BC_1 = document.querySelectorAll('.BC_1');
        let AC_1 = document.querySelectorAll('.AC_1');
        let S_AB_1 = document.querySelectorAll('.S_AB_1');
        let S_BC_1 = document.querySelectorAll('.S_BC_1');
        let S_AC_1 = document.querySelectorAll('.S_AC_1');

        let spine__calc_1 = document.querySelectorAll('.spine__calc_1');

        let Amax_1 = 0;
        let Amin_1 = 100;
        let result_1 = [];
        let procent_1 = 0;
        let red_1 = 0;
        let green_1 = 0;
        let blue_1 = 0;
        let colorStop_1 = 0;

        for (let i = 0; i < spine__calc_1.length; i++) {

            //Средн. показатели

            let calc_1 = (+A_1[i].value + +B_1[i].value + +C_1[i].value) / 3;
            result_1.push(calc_1.toFixed(3));

            if (Amax_1 < calc_1) Amax_1 = calc_1;
            if (Amin_1 > calc_1) Amin_1 = calc_1;

            // Обл деформации пер, ср, задн.

            let AB_result_1 = +B_1[i].value / +A_1[i].value * 100;
            let BC_result_1 = +B_1[i].value / +C_1[i].value * 100;
            let AC_result_1 = +A_1[i].value / +C_1[i].value * 100;

            AB_1[i].classList.remove('red');
            AB_1[i].classList.remove('green');

            BC_1[i].classList.remove('red');
            BC_1[i].classList.remove('green');

            AC_1[i].classList.remove('red');
            AC_1[i].classList.remove('gray');
            AC_1[i].classList.remove('blue');

            if (AB_result_1 >= 81 && AB_result_1 <= 124) AB_1[i].classList.add('green');
            else if (AB_result_1 > 124) AB_1[i].classList.add('red');
            else if (AB_result_1 < 81) AB_1[i].classList.add('red');

            if (BC_result_1 >= 81 && BC_result_1 <= 124) BC_1[i].classList.add('green');
            else if (BC_result_1 > 124) BC_1[i].classList.add('red');
            else if (BC_result_1 < 81) BC_1[i].classList.add('red');

            if (AC_result_1 >= 81 && AC_result_1 <= 124) AC_1[i].classList.add('green');
            else if (AC_result_1 > 124) AC_1[i].classList.add('gray');
            else if (AC_result_1 < 81) AC_1[i].classList.add('blue');


            // Степень деформ

            let S_AB_result_1 = AB_result_1 - 100;
            let S_BC_result_1 = BC_result_1 - 100;
            let S_AC_result_1 = AC_result_1 - 100;

            S_AB_1[i].classList.remove('red');
            S_AB_1[i].classList.remove('yellow');
            S_AB_1[i].classList.remove('green');

            S_BC_1[i].classList.remove('red');
            S_BC_1[i].classList.remove('yellow');
            S_BC_1[i].classList.remove('green');

            S_AC_1[i].classList.remove('red');
            S_AC_1[i].classList.remove('yellow');
            S_AC_1[i].classList.remove('green');

            if (S_AB_result_1 >= 20 && S_AB_result_1 <= 25 || S_AB_result_1 >= -20 && S_AB_result_1 <= -25) S_AB_1[i].classList.add('green');
            else if (S_AB_result_1 >= 26 && S_AB_result_1 <= 40 || S_AB_result_1 >= -26 && S_AB_result_1 <= -40) S_AB_1[i].classList.add('yellow');
            else if (S_AB_result_1 > 40 || S_AB_result_1 < -40) S_AB_1[i].classList.add('red');

            if (S_BC_result_1 >= 20 && S_BC_result_1 <= 25 || S_BC_result_1 >= -20 && S_BC_result_1 <= -25) S_BC_1[i].classList.add('green');
            else if (S_BC_result_1 >= 26 && S_BC_result_1 <= 40 || S_BC_result_1 >= -26 && S_BC_result_1 <= -40) S_BC_1[i].classList.add('yellow');
            else if (S_BC_result_1 > 40 || S_BC_result_1 < -40) S_BC_1[i].classList.add('red');

            if (S_AC_result_1 >= 20 && S_AC_result_1 <= 25 || S_AC_result_1 >= -20 && S_AC_result_1 <= -25) S_AC_1[i].classList.add('green');
            else if (S_AC_result_1 >= 26 && S_AC_result_1 <= 40 || S_AC_result_1 >= -26 && S_AC_result_1 <= -40) S_AC_1[i].classList.add('yellow');
            else if (S_AC_result_1 > 40 || S_AC_result_1 < -40) S_AC_1[i].classList.add('red');

        }

        for (let i = 0; i < result_1.length; i++) {
            procent_1 = (result_1[i] - Amin_1) / (Amax_1 - Amin_1);

            colorStop_1 = Math.round(procent_1 * 99) + 1;

            red_1 = Math.round(255 * (1 - procent_1));

            green_1 = Math.round(255 * procent_1);

            spine__calc_1[i].style.background = "rgb(" + red_1 + "," + green_1 + "," + blue_1 + ")" + colorStop_1 + "%";
        }
    })


    document.querySelector('.spine__btn').addEventListener('click', () => {
        let A_2 = document.querySelectorAll('.A_2');
        let B_2 = document.querySelectorAll('.B_2');
        let C_2 = document.querySelectorAll('.C_2');
        let AB_2 = document.querySelectorAll('.AB_2');
        let BC_2 = document.querySelectorAll('.BC_2');
        let AC_2 = document.querySelectorAll('.AC_2');
        let S_AB_2 = document.querySelectorAll('.S_AB_2');
        let S_BC_2 = document.querySelectorAll('.S_BC_2');
        let S_AC_2 = document.querySelectorAll('.S_AC_2');

        let spine__calc_2 = document.querySelectorAll('.spine__calc_2');

        let Amax_2 = 0;
        let Amin_2 = 100;
        let result_2 = [];
        let procent_2 = 0;
        let red_2 = 0;
        let green_2 = 0;
        let blue_2 = 0;
        let colorStop_2 = 0;

        for (let i = 0; i < spine__calc_2.length; i++) {

            //Средн. показатели

            let calc_2 = (+A_2[i].value + +B_2[i].value + +C_2[i].value) / 3;
            result_2.push(calc_2.toFixed(3));


            if (Amax_2 < calc_2) Amax_2 = calc_2;
            if (Amin_2 > calc_2) Amin_2 = calc_2;

            // Обл деформации пер, ср, задн.

            let AB_result_2 = +B_2[i].value / +A_2[i].value * 100;
            let BC_result_2 = +B_2[i].value / +C_2[i].value * 100;
            let AC_result_2 = +A_2[i].value / +C_2[i].value * 100;

            AB_2[i].classList.remove('red');
            AB_2[i].classList.remove('green');

            BC_2[i].classList.remove('red');
            BC_2[i].classList.remove('green');

            AC_2[i].classList.remove('red');
            AC_2[i].classList.remove('gray');
            AC_2[i].classList.remove('blue');

            if (AB_result_2 >= 81 && AB_result_2 <= 124) AB_2[i].classList.add('green');
            else if (AB_result_2 > 124) AB_2[i].classList.add('red');
            else if (AB_result_2 < 81) AB_2[i].classList.add('red');

            if (BC_result_2 >= 81 && BC_result_2 <= 124) BC_2[i].classList.add('green');
            else if (BC_result_2 > 124) BC_2[i].classList.add('red');
            else if (BC_result_2 < 81) BC_2[i].classList.add('red');

            if (AC_result_2 >= 81 && AC_result_2 <= 124) AC_2[i].classList.add('green');
            else if (AC_result_2 > 124) AC_2[i].classList.add('gray');
            else if (AC_result_2 < 81) AC_2[i].classList.add('blue');


            // Степень деформ

            let S_AB_result_2 = AB_result_2 - 100;
            let S_BC_result_2 = BC_result_2 - 100;
            let S_AC_result_2 = AC_result_2 - 100;

            S_AB_2[i].classList.remove('red');
            S_AB_2[i].classList.remove('yellow');
            S_AB_2[i].classList.remove('green');

            S_BC_2[i].classList.remove('red');
            S_BC_2[i].classList.remove('yellow');
            S_BC_2[i].classList.remove('green');

            S_AC_2[i].classList.remove('red');
            S_AC_2[i].classList.remove('yellow');
            S_AC_2[i].classList.remove('green');

            if (S_AB_result_2 >= 20 && S_AB_result_2 <= 25 || S_AB_result_2 >= -20 && S_AB_result_2 <= -25) S_AB_2[i].classList.add('green');
            else if (S_AB_result_2 >= 26 && S_AB_result_2 <= 40 || S_AB_result_2 >= -26 && S_AB_result_2 <= -40) S_AB_2[i].classList.add('yellow');
            else if (S_AB_result_2 > 40 || S_AB_result_2 < -40) S_AB_2[i].classList.add('red');

            if (S_BC_result_2 >= 20 && S_BC_result_2 <= 25 || S_BC_result_2 >= -20 && S_BC_result_2 <= -25) S_BC_2[i].classList.add('green');
            else if (S_BC_result_2 >= 26 && S_BC_result_2 <= 40 || S_BC_result_2 >= -26 && S_BC_result_2 <= -40) S_BC_2[i].classList.add('yellow');
            else if (S_BC_result_2 > 40 || S_BC_result_2 < -40) S_BC_2[i].classList.add('red');

            if (S_AC_result_2 >= 20 && S_AC_result_2 <= 25 || S_AC_result_2 >= -20 && S_AC_result_2 <= -25) S_AC_2[i].classList.add('green');
            else if (S_AC_result_2 >= 26 && S_AC_result_2 <= 40 || S_AC_result_2 >= -26 && S_AC_result_2 <= -40) S_AC_2[i].classList.add('yellow');
            else if (S_AC_result_2 > 40 || S_AC_result_2 < -40) S_AC_2[i].classList.add('red');

        }

        for (let i = 0; i < result_2.length; i++) {
            procent_2 = (result_2[i] - Amin_2) / (Amax_2 - Amin_2);

            colorStop_2 = Math.round(procent_2 * 99) + 1;

            red_2 = Math.round(255 * (1 - procent_2));

            green_2 = Math.round(255 * procent_2);

            spine__calc_2[i].style.background = "rgb(" + red_2 + "," + green_2 + "," + blue_2 + ")" + colorStop_2 + "%";
        }
    })
}

catch { console.log('err') }
