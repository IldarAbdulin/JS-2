

//1
// let i = 0;

// console.log('Начало цикла')

// while( i < 10 ){
//     i++;
//     if( i % 2 == 0)
//     console.log('Итерация №' + i)
// }

// console.log('Конец цикла')


//2
// let value1;

// do{
//     value1 = +prompt('Введите любое значение больше 10')
// }
// while(value1 <=  10);
// alert('Вы ввели' + value1 )



//3
// let value2 = +prompt('Введите любое значение больше 5');

// while (value2 <=5){
//     value2 = +prompt('Введите любое значение больше 5');
// }

// alert('Вы ввели' + value2)



// for( i = 0; i < 5; i++){
//     if( i=== 3 ){
//         continue
//     }
//     console.log(i)
// }


//4
// let start = +prompt('1-ое число');
// let end = +prompt('2-ое число');
// let sum = 0;

// for( i = start; i >= end; i--){
//     console.log(i)
//     sum += i;
// }
// console.log(`Сумма чисел между ${start} и ${end} равна ${sum}`)


//5
// for( i = 0; i < 5; i++){
//     console.log("cycle 1 - iteration #" + i);
//     break;
//     console.log("Cycle 2 - iteration #" + i)
// }







// home work


//1


// let randomValue = Math.floor(Math.random() * 101);
// console.log(randomValue);

// let attempt = 0;

// alert("Я загадал случайное значение от 0 до 100");

// while(true){
//     attempt++;
//     let currentValue = prompt('Угадайте значение');
//     if (currentValue == "стоп"){
//         break;
//     }
//     else if( currentValue < randomValue){
//         alert(`Я загадал значение больше чем ${currentValue}`)
//     }
//     else if( currentValue > randomValue){
//         alert(`Я загадал значение меньше чем ${currentValue}`)
//     }
//     else{
//         alert(`Правильно , загаданное значение: ${randomValue} , количество попыток: ${attempt}`)
//     }
// }


//2

// let a = +prompt("Введите любое значение , а мы суммируем его с нуля до вашего значения");
// let sum = 0;

// for( i = 0; i <= a ; i++){
//     sum+=i
// }
// console.log(sum);
// alert(`Если начать складывать ваше число с нуля то выйдет следующее значение: ` + sum);

//3

// let i = 0;

// while(i < 15){
//     i++
//     console.log(i)
// }

//4

// let a;

// do{
//     a= +prompt('Введите значение больше 10')
// }
// while(a <= 10)
// alert('Введенное число' + a)

//5

// let a = 100;

// for( i = 0; i <= a; i++){
//     if( i % 15 == 0){
//         console.log("FizzBuzz")
//         continue
//     }
//     else if( i % 3 == 0){
//         console.log("fizz")
//         continue
//     }
//     else if( i % 5 == 0){
//         console.log("buzz")
//         continue
//     }
//     console.log(i)
// }