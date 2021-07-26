// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client{
	constructor(id, name, surname, email, phone, order){
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
		this.order = order;
	};
};
let clients = [
	new Client(1, "Julia", "Henry", "julia@gmail.com", +1634614367, ["auto", "moto"]),
	new Client(2, "Loretta", "Wilson", "loretta@gmail.com", +1869778476, ["mouse", "keyboard", "keys", "auto", "headphones", "notebook", "phone", "auto", "moto"]),
	new Client(3, "Phillip", "Tran", "phillip@gmail.com", +1304976504, ["headphones", "notebook", "phone"]),
	new Client(4, "Arthur", "Johnson", "arthur@gmail.com", +1349765436, ["headphones", "notebook", "phone", "auto", "moto"]),
	new Client(5, "Eric", "Rodriguez", "eric@gmail.com", +1456745634, ["keys", "auto", "moto", "glasses"]),
	new Client(6, "Karen", "Maldonado", "karen@gmail.com", +149376543, ["notebook", "phone"]),
	new Client(7, "Arthur", "Steele", "arthurS@gmail.com", +134907643, ["keys", "auto", "headphones", "notebook", "phone", "auto", "moto"]),
	new Client(8, "Steven", "Larson", "steven@gmail.com", +194375439, ["headphones", "notebook", "phone", "auto", "moto", "keys"]),
	new Client(9, "Holly", "Ramos", "holly@gmail.com", +143957467, ["auto"]),
	new Client(10, "Reginald", "Anderson", "reginald@gmail.com", +1439574645, ["keyboard", "keys", "auto", "headphones", "notebook", "moto", "mouse", "beer"])
];

let sort = clients.sort(function (a, b) {
	return a.order.length - b.order.length;
});
console.log(sort);
for (i of sort){
	console.log(i.order);
}



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engine){
		this.model = model;
		this.manufacturer = manufacturer;
		this.year = year;
		this.maxSpeed = maxSpeed;
		this.engine = engine;

	this.drive = function(){
		console.log(`їдемо зі швидкістю ${this.maxSpeed} км. на годину`);
	}
	
	this.info = function(){
		console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}.0`);
	};
	
	this.increaseMaxSpeed = function(newSpeed){
		this.maxSpeed += newSpeed;
		console.log(`Нова максимальна швидкість - ${this.maxSpeed} км/год`)
	};
	
	this.changeYear = function(newValue){
		this.year += newValue;
		console.log(`Новий рік випуску - ${this.year}.`)
	};
	
	this.addDriver = function(driver){
		this.driver = driver;
	};
};
let jaguar = new Car("f-type", "jaguar", 2020, 300, 5.0);

console.log(jaguar);

jaguar.drive();
jaguar.info();
jaguar.increaseMaxSpeed(40);
console.log(jaguar);
jaguar.changeYear(1)
console.log(jaguar);
jaguar.addDriver({name: "pasha", age:36, work: true});



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Cars{
	constructor(model, manufacturer, year, maxSpeed, engine){
		this.model = model;
		this.manufacturer = manufacturer;
		this.year = year;
		this.maxSpeed = maxSpeed;
		this.engine = engine;
	};

	drive(){
		console.log(`їдемо зі швидкістю ${this.maxSpeed} км. на годину`);
	};
	
	info(){
		console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, max speed - ${this.maxSpeed}, engine - ${this.engine}.0`);
	};
	
	increaseMaxSpeed(newSpeed){
		this.maxSpeed += newSpeed;
	};
	
	changeYear(newValue){
		this.year += newValue;
	};
	
	addDriver (driver){
		this.driver = driver;
	};
};

const cadillac = new Cars("ct6", "cadillac", 2019, 240, 4.0);

console.log(cadillac);
cadillac.drive();
cadillac.info();
cadillac.increaseMaxSpeed(40);
console.log(cadillac);
cadillac.changeYear(1);
console.log(cadillac);
cadillac.addDriver({name: "pasha", age:36, work: true});



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
	constructor(name, age, footSize){
		this.name = name;
		this.age = age;
		this.footSize = footSize;
	};
};
let cinderellas = [
	new Cinderella("Dolores", 18, 34),
	new Cinderella("Helen", 16, 35),
	new Cinderella("Tracy", 20, 36),
	new Cinderella("Phyllis", 19, 37),
	new Cinderella("Alice", 21, 39),
	new Cinderella("Kim", 17, 38),
	new Cinderella("Brenda", 15, 33),
	new Cinderella("Edna", 14, 32),
	new Cinderella("Georgia", 13, 31),
	new Cinderella("Beverly", 12, 30),
];

console.log(cinderellas);

class Prince extends Cinderella{
  constructor(name, age, shoes) {
	super(name, age);
    this.shoes = shoes;
	};
};
let prince = new Prince("John", 18, 36);
console.log(prince)


for (foot of cinderellas){
	if(foot.footSize === prince.shoes){
	console.log(`Попелюшку для принца звуть - "${foot.name}" і її вік ${foot.age} років.`);
	};
}; 


cinderellas.find(function callback(number){
	if(number.footSize === prince.shoes){
		console.log(`Попелюшку для принца звуть - "${number.name}" і її вік ${number.age} років.`);
	};
});
