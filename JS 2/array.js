
//1
//let array1 = []; // вариант создания массива с использованием литерала (чаще используется этот вариант)
//let array2 = new Array(); // создание массива с использованием конструктора 

//let cities = ['London' , 'Paris' , 'Berlin' , 'Rome']; // создание массива и заполнение массива строков
//let values = ['London' , 123 , true]; // массив может хранить разные типы данных

//console.log(cities); 
//console.log(values);
//console.log(typeof values); // object массив , особый вид объектов 


// let clown = new Array("abc");
// console.log(clown);


//2
// let cities = ['123' , 'Paris', 'Berlin' , 'Rome'];

// cities[0] = '123';
// cities[1] = 'Paris';
// cities[2] = 'Berlin';
// cities[3] = 'Rome';
// cities[4] = 'Bishkek';

// console.log(cities);

// let citiesName = cities[0];
// console.log("First array element -" + citiesName);

// cities[0] = 'LONDON';
// console.log(cities);


//3
// let cities = ['a' , 'b' , 'c' , 'd'];
// console.log(cities);

// cities[4] = 'e';
// console.log(cities.length);

// cities[15] = 'l';
// console.log(cities.length);

// cities.length = 10;
// console.log(cities.length);



//4
// let cities = ["London", "Paris", "Berlin", "Rome"];
// //перебор массива
// // запускаем цикл со счетчиком от 0 до 4 (длины массива)
// for (let k = 0; k < cities.length; k++) {
//     const b = cities[k]; // обращаемся к элементу массива по индексу (значению счетчика цикла)
//     console.log(b);
// }

//5
// let cities = ["London", "Paris", "Berlin", "Rome"];
// //перебор массива
// // проход по значениям массива cities
// // на каждой итерации в переменную city будет записываться следующее значение из массива cities
// for (const city of cities) {
//     console.log(city);
// }


//6
// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

// let max = Number.MIN_VALUE;//минимальное значение переменной типа Number.хранится минимальное значение которое допускается в числовых типах в js

// // let max = 0;
// for (let index = 0; index < values.length; index++) { //10
//     const element = values[index]; //10
//     if (element > max) {
//         max = element;
//     }
// }
// console.log("Максимальное значение массива - " + max);


//7
// let names = [];

// names[0] = "Мясо";
// names[1] = "Хлеб";
// names[2] = "Перец";
// names[3] = "Специи";
// // массив с ценами продуктов

// let prices = [];
// prices[0] = 280.25;
// prices[1] = 56;
// prices[2] = 12.50;
// prices[3] = 10;
// // массив с количеством покупаемых продуктов

// let products = [];
// // цикл для получения количества покупаемых продуктов
// for (let index = 0; index < names.length; index++) {
//     const name = names[index];
//     const price = prices[index];
//     products[index] = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
// }
// // цикл для расчета общей цены купленных продуктов
// let totalPrice = 0;
// for (let index = 0; index < products.length; index++) {
//     totalPrice += prices[index] * products[index];
// }
// alert(`Сумма Вашего заказа ${totalPrice}.`);
// let isFreeShipping = totalPrice > 1000;
// if (isFreeShipping) // иногда в условии используется только одна переменная
// {
//     alert("Доставка будет бесплатной.");
// }


// home work



//1
//Перепишите с помощью цикла for...of

// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let max = Number.MIN_VALUE;

// for ( const element of values) {
//     if (element > max){
//         max = element
//     }
// }
// console.log("Максимальное значение массива - " + max)
//2
//Найдите в массиве все отрицательные значения и замените их на значения 0. После этого выведите на экран все элементы массива.

// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

// for ( i = 0; i < values.length; i++) {
//     if( values[i] < 0 ){
//         console.log(0)
//         continue
//     }
//     console.log( values[i] )
// }


//3
//Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.

// let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];



//Дано массив. Найдите среднее арифметическое для значений этого массива. Выведите на экран только те элементы, которые больше этого среднего арифметического значения

// let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28 ];
        
// let sum = 0;

// for (const value of values) {
//     sum += value;
// }

// let average = sum / values.length;
// console.log("average = " + average);

// for (const value of values) {
//     if (value > average) {
//     console.log(value);
//     }
// }
