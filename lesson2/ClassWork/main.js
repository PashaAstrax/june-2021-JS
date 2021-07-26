/*
-створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль
*/
let arr = [2, 5, 7, 9, 11, ["two", "five", "seven", "nine", "eleven"], [6, "six", "bool", true, false]];
console.log(arr);
			

/*
- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
*/
let arr1 = [1, 2, true, 3, false];
console.log(arr1[2])
		

/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
*/
for (let i=0; i < 10; i++) {
	document.write(`<div>some text</div>`);
};

document.write(`<br>`);

for (let i=0; i < 10; i++) {
	document.write(`<div>some text - ${i}</div>`);
};

let i = 0;
while (i < 20) {
	document.write(`<h1>title</h1>`);
	i++;
};

document.write(`<br>`);

let j = 0;
while (j < 20) {
	document.write(`<h1>title - ${j}</h1>`);
	j++;
};


/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
*/
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (ar of arr2) {
	console.log(ar);
};

let arr3 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for (ar of arr3) {
	console.log(ar);
};

let arr4 = [11, 12, 13, true, false, "one", "two", "three", "four", "five"];
for (ar of arr4) {
	console.log(ar);
};

let arr5 = [14, 15, 16, "one", "two", "three", "four", "five", true, false];
for (ar of arr5) {
	if (typeof ar === "boolean"){
		console.log(ar);
	};
};

let arr6 = [14, 15, 16, "one", "two", "three", "four", "five", true, false];
for (ar of arr6) {
	if (typeof ar === "number"){
		console.log(ar);
	};
};

let arr7 = [14, 15, 16, "one", "two", "three", "four", "five", true, false];
for (ar of arr7) {
	if (typeof ar === "string"){
		console.log(ar);
	};
};


/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
*/
let arr8 = [];
arr8[0] = 17;
arr8[1] = 18;
arr8[2] = 19;
arr8[3] = 20;
arr8[4] = "seventeen";
arr8[5] = "eighteen";
arr8[6] = "nineteen";
arr8[7] = "twenty"
arr8[8] = false;
arr8[9] = true;
for (ar of arr8) {
	console.log(ar);
};

for (let i = 0; i < 10; i++) {
	console.log(i);
	document.write(i);
};

for (let i = 0; i < 100; i++) {
	console.log(i);
	document.write(i);
};

for (let i = 0; i < 100; i += 2) {
	console.log(i);
	document.write(i);
};

for (let i = 0; i < 100; i++) {
	if (i % 2 === 0){
		console.log(i);
		document.write(i);
	};
};

for (let i = 0; i < 100; i++) {
	if (i % 2 !== 0){
		console.log(i);
		document.write(i);
	};
};


/*
- Дано 2 масиви з рівною кількістю об'єктів.
	З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
	Записати цей об'єкт в новий масив
Example:
	let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
]
*/
let usersWithId = [
	{id: 1, name: 'vasya', age: 31, status: false},
	{id: 2, name: 'petya', age: 30, status: true},
	{id: 3, name: 'kolya', age: 29, status: true},
	{id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
	{user_id: 3, country: 'USA', city: 'Portland'},
	{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
	{user_id: 2, country: 'Poland', city: 'Krakow'},
	{user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let user of usersWithId){
	for (let address of citiesWithId){
		if (user.id === address.user_id) {
			usersWithCities.push({...user, address});
		};
	};
};
console.log(usersWithCities);
