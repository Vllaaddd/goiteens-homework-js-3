const number = prompt('Введіть число');

if (number >= 55 && number <= 99){
    console.log('Число попадає в діапазон');
}else{
    console.log('Число не попадає в діапазон');
}

const age = prompt('Введіть вік');

if(age <= 16){
    console.log('Ти дитина');
}else if(age >= 17 && age <=60){
    console.log('Ти дорослий');
}else{
    console.log('Ти пенсіонер');
}

const name = 'Vlad';
const secondName = 'Honcharuk';

if(name.length >= 4 || secondName.length > 5){
    console.log(name.length + secondName.length)
}else{
    console.log('Упс');
}

const num1 = Math.random() * (5 - 1) + 1;

const num = parseInt(num1);

if(num === 5){
    console.log('5')
}else if (num === 4){
    console.log('4');
}else if(num === 3){
    console.log('3');
}else if(num === 2){
    console.log('2');
}else{
    console.log('1');
}

const lang = prompt('Введіть мову');

switch (lang) {
    case 'ua':
        console.log('Жовтень');
        break;

    case 'fr':
        console.log('Janvier');
        break;

    case 'de':
        console.log('Oktober');
        break;

    default:
        console.log('October');
        break;
}   