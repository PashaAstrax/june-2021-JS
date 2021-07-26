// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
    
    
// -- отримує текст з параграфа з id "content"	
let content = document.getElementById("content");
console.log(content);


// -- отримує текст з блоку з id "rules"
let rules = document.getElementById("rules");
console.log(rules);


// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";


// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"


// -- змініть кожному елементу колір фону на червоний
content.style.background = "red";
rules.style.background = "red";


// -- змініть кожному елементу колір тексту на синій
content.style.color = "blue";
rules.style.color = "blue";


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);


// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let liCollections = document.getElementsByClassName("fc_rules");
	console.log(liCollections)

	for (let liCollection of liCollections) {
		liCollection.addEventListener( 'click', () => {
			console.log(liCollection.innerText);
    } );
		liCollection.addEventListener( 'click', () => {
			console.log("<<SomeText>>");
    } );
};


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let li of liCollections) {
	console.log(li);
	
	li.style.color = 'red';
}

