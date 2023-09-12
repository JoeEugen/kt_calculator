// Деформации позвонков/снижение высоты

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
