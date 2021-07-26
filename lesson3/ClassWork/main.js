//- створити функцію яка приймає масив та виводить його
function arr(massyv){
	console.log(massyv);
};
arr([5, "Hello", true]);


//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numMin(a, b, c){
	if (a < b && a < c){
		console.log(a);
	} else if (b < a && b < c){
		console.log(b);
	} else if (c < a && c < b){
		console.log(c);
	}
};
numMin(5, 7, 1);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numMax(a, b, c){
	if (a > b && a > c){
		console.log(a);
	} else if (b > a && b > c){
		console.log(b);
	} else if (c > a && c > b){
		console.log(c);
	}
};
numMax(5, 7, 1);


//- створити функцію яка повертає найбільше число з масиву
function max_arr(array){
	
	let max = array[0];
		for (arr of array){
			if (arr > max){
			max = arr;
		};
	};
	return max;
};
console.log(max_arr([5, 8, 12, 45, 86]));


//- створити функцію яка повертає найменьше число з масиву
function min_arr(array){
	
	let min = array[0];
		for (arr of array){
			if (arr < min){
			min = arr;
		};
	};
	return min;
};
console.log(min_arr([5, -7, 8, 12, 45, 86]));


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArr(arr) {
	
	let res = 0;
	for (i = 0; i < arr.length; i++) {
		res += arr[i];
	}
	return res;
}
console.log(sumArr([1, 7, 8, 3, 77]));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function middleMath(arr) {
	
	let res = 0;
	for (i = 0; i < arr.length; i++) {
		res += arr[i];
	}
	return res / arr.length;
}
console.log(middleMath([1, 7, 8, 3, 77]));


//- створити функцію яка заповнює масив рандомними числами
function shuffle(rand){ 

	for (i = 0; i < 20; i++ ) {
		rand.push(Math.round(Math.random() * 100 ));
}
	return rand;
};
console.log(shuffle([]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function arrKey(arrays) {
let arrMass = [];
    for(let i of arrays){
        for (let j in i) {
            arrMass.push(j);
        };
	};
    return arrMass;
};
console.log(arrKey([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function arrayValues(arrays) {
let arrayMass = []
	for(let array of arrays){
		for(let array1 in array){
			arrayMass.push(array[array1])
		}
	}
    return arrayMass
}

console.log(arrayValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));
