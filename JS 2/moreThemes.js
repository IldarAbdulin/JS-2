// 1 pop()  push()

// let cities = ['London' , 'Paris' , 'Berlin' , 'Rome'];

// let last = cities.pop();
// console.log('pop result ' + last);

// for ( index = 0; index < cities.length; index++){
//     console.log(cities[index])
// }

// console.log('<------------------------------------->')

// cities.push("Brawl City");

// for( index = 0; index < cities.length; index++){
//     console.log(cities[index])
// }





// 2 shift()  unshift()

// let cities = ['London' , 'Paris' , 'Berlin' , 'Rome'];
// let first = cities.shift();

// console.log('shift result' + first);

// for ( i = 0; i < cities.length; i++){
//     console.log(cities[i])
// };

// console.log('<------------------------------------->');
// cities.unshift('> Lisbon <');
// for ( i = 0; i < cities.length; i++){
//     console.log(cities[i])
// };





// 3 splice()

// let cities = ['London' , 'Paris' , 'Berlin' , 'Rome'];
// cities.splice( 2 , 1 );
// console.log(cities);

// let cities = ['London' , 'Paris', 'Berlin' , 'Rome' , 'UK' , 'France' , 'Italy'];
// cities.splice( 1 , 2 );
// console.log(cities);


//let cities = ['London' , 'Paris', 'Berlin' , 'Rome' , 'UK' , 'France'];

// cities.splice( 2 , 0, 'Madrid');
// console.log(cities)
// for( const city of cities){
//     console.log(city)
// }


// cities.splice( 4 , 0, 'Madrid' , 'Moscow');
// console.log(cities)
// for( const city of cities){
//     console.log(city)
// }


//slice()

// let  characters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G'];
// let arr = characters.slice(1 , 4);
// console.log(arr) // B C D
// console.log(characters);

// 4 concat  


// let characters = ['A' , 'B' , 'C'];
// let numbers = [ 1 , 2 , 3 ];

// let values = numbers.concat(characters);
// console.log(values);

// let valuesExtended = characters.concat(numbers, '!' , '?' , '@');
// console.log(valuesExtended);



// 5 indexOf


// let cities = ['London' , 'Paris', 'Berlin' , 'Rome' , 'UK' , 'France'];

// let index;
// index = cities.indexOf('Paris');
// console.log(index);

// index = cities.indexOf('Madrid');
// console.log(index);

// index = cities.indexOf('Rome' , 0);
// console.log(index);

// index = cities.lastIndexOf('France')
// console.log(index)// lastIndexOf - ищет справа налево


// 6 split

// let str = "value1 , value2 ! value3";
// let values = str.split(' ! ');
// console.log(values);




// tasks

//1

// let values = [];

// while(true){
//     let input = prompt('Введите число , а после exit для завершения и подчета суммы всех чисел');

//     if ( input == 'exit')
//     break;

//     let value = Number(input);

//     if( isNaN(value)){
//         alert('Введенное значение не число')
//     }
//     else{
//         values.push(value)
//     }
// }

// let sum = 0;
// for( i = 0; i < values.length; i++){
//     sum+=values[i]
// }

// alert('Сумма введенных значений ' + sum)



// home work


//2
//Напишите сценарий, который будет запрашивать у пользователя значения, до тех пор, пока тот не введет значение stop
//Все введенные значения, если они являются числом, должны быть добавлены в массив.
//После того, как пользователь ввел значение стоп, посчитайте сумму всех значений, которые находятся в массиве.

// let values = [];

// while(true){
//     let input = prompt('Введите число , а после stop для завершения и подчета суммы всех чисел');

//     if ( input == 'stop')
//     break;

//     let value = Number(input);

//     if( isNaN(value)){
//         alert('Введенное значение не число')
//     }
//     else{
//         values.push(value)
//     }
// }

// let sum = 0;
// for( i = 0; i < values.length; i++){
//     sum+=values[i]
// }

// alert('Сумма введенных значений ' + sum)


//3

// Найдите все значения в массиве меньше 0 и удалите их.

// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

// for ( i = 0; i < values.length; i++) {
//     if( values[i] < 0 ){
//         delete values[i]
//     }
//     console.log( values[i] )
// }