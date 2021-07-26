// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randNum(arr){
	
	for (i = 0; i < 100; i++ ) {
		arr.push(Math.round(Math.random() * 100 ));
}
	return arr;
};
console.log(randNum([]));


//- Змінити попередню функцію, щоб діапазон можна було визначити через аргументи.
function randInt(array, min, max) {
	for (i = min; i < max; i++){
		array.push(Math.floor(Math.random() * (max - min)) + min);
	};
	return array;
}
console.log(randInt([], 50, 100));


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
function numSort(){
	let list = [];
	for (i = 0; i < 10; i++ ) {
		list.push(Math.round(Math.random() * 100 ));
};
	list.sort(function(a, b){
		return a - b
});
	return list;
};
console.log(numSort());


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
function numFilter(){
	let list = [];
	for (i = 0; i < 10; i++ ) {
		list.push(Math.round(Math.random() * 100 ));
};
let num = list.filter(function(int){
		return int % 2 === 0;
});
	return num;
};
console.log(numFilter());


//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
function numMap(){
	let list = [];
	for (i = 0; i < 10; i++ ) {
		list.push(Math.round(Math.random() * 10 ));
};
let str = list.map(function callback(numbers){
		return String(numbers);
});
	return str;
};
console.log(numMap());


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
function User(id, name, surname, email, phone){
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
};

let users = [
	new User(1, "Julia", "Henry", "julia@gmail.com", +1634614367),
	new User(2, "Loretta", "Wilson", "loretta@gmail.com", +1869778476),
	new User(3, "Phillip", "Tran", "phillip@gmail.com", +1304976504),
	new User(4, "Arthur", "Johnson", "arthur@gmail.com", +1349765436),
	new User(5, "Eric", "Rodriguez", "eric@gmail.com", +1456745634),
	new User(6, "Karen", "Maldonado", "karen@gmail.com", +149376543),
	new User(7, "Arthur", "Steele", "arthurS@gmail.com", +134907643),
	new User(8, "Steven", "Larson", "steven@gmail.com", +194375439),
	new User(9, "Holly", "Ramos", "holly@gmail.com", +143957467),
	new User(10, "Reginald", "Anderson", "reginald@gmail.com", +1439574645)
];
console.log(users);

let filter = users.filter(function (user) {
	return user.id % 2 === 0;
});
console.log(filter);

let sort = users.sort(function (user1, user2) {
	return user1.id - user2.id;
});
console.log(sort);