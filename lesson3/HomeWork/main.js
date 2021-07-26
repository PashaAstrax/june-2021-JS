//- створити функцію яка обчислює та повертає площу прямокутника висотою
function rectangle(a, b){
	return a * b;
}
let a = rectangle(10, 5);
console.log(`Площа прямокутника - ${a}`);


//- створити функцію яка обчислює та повертає площу кола
function circle(radius){
	return 3.14 * radius ** 2;
}
let b = circle(10);
console.log(`Площа кола - ${b}`);


//- створити функцію яка обчислює та повертає площу циліндру
function cylinder(radius, height){
	return (2 * 3.14) * radius * height;
};
let c = cylinder(5, 8);
console.log(`Площа циліндра - ${c}`);


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function max_min(){
	let max = arguments[0];
	let min = arguments[0];
for (i = 0; i < arguments.length; i++){
    if (arguments[i] > max)
    {
        max = arguments[i];
    }
    if (arguments[i] < min)
    {
        min = arguments[i];
    }
};
console.log(max);
return min;
}
console.log(max_min(10, 35, 83, 65, -2));


//- створити функцію яка  створює блок з текстом. Текст задати через аргумент
function textBlock(text){
	return (`<div>${text}</div>`);
};
document.write(textBlock("Hello World!"));


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function itemList(text){
	document.write(`<ul>
						<li>${text}</li>
						<li>${text}</li>
						<li>${text}</li>
					</ul>`);
};
itemList("Hello");


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function itemList2(text, num_li){
	document.write(`<ul>`);
	for (i = 0; i < num_li; i++){
		document.write(`<li>${text}</li>`);
	};
	document.write(`</ul>`);
};
itemList2("Hi!", 3);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function nums(arr) {

	document.write(`<ul>`);
	for (let arg of arr){
		document.write(`<li>${arg}</li>`);
	};
	document.write(`<ul>`);
}
nums([1, 2, 3, "Hello", true, 2, 4]);
