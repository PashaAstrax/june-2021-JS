function myLife(time) {
    return new Promise((resolve, reject) => {
        console.log("Доброго ранку:)")
        setTimeout(() => {

            if (time >= 9.00) {
                console.log("...ех, на жаль проспали,")
                reject("сьогодні сидимо вдома(" );
            } else {
                console.log("...прокинулись вчасно,")
                resolve("круто, збираємось на роботу!");
            }
        }, 1000)
    });
}

function weather(C) {
    return new Promise((resolve, reject) => {
        console.log("Але для початку, перевірим погоду в інтернеті...")
        setTimeout(() => {

            if (C <= 15){
                resolve ("сьогодні прохолодно, треба вдягтись потепліше.")
            } else {
                resolve ("ура, сьогодні класна погода, іду в шортах)")
            }
        }, 2000)
    });
}

function shower() {
    return new Promise((resolve, reject) => {
        console.log("")
        setTimeout(() => {
            console.log("ну що ж, пора в душ...")
            resolve("душ")
        },900)
    });
}

function breakfest() {
    return new Promise((resolve, reject) => {
        console.log("")
        console.log("тепер, пора поїсти...")
        setTimeout(() => {
            resolve("поїсти")
        },700)
    });
}

function brushTeeth() {
    return new Promise((resolve, reject) => {
        console.log("")
        console.log("йдем чистити зуби...")
        setTimeout(() => {
            resolve("почистити зуби")
        },500)
    });
}

function dressUp() {
    return new Promise((resolve, reject) => {
        console.log("")
        console.log("пора вдягатись...")
        setTimeout(() => {
            resolve("вдягнутись")
        },600)
    });
}

function goToBus() {
    return new Promise((resolve, reject) => {
        console.log("")
        console.log("Йдемо на зупинку...")
        setTimeout(() => {
            resolve("Прийшли на зупинку,")
        }, 1800)
    });
}

function busToWork(bus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus === false){
                resolve("чйорт, прийдеться йти пішки((")
            }else {
                resolve("поїхалииии)")
            }
        }, 900)
    });
}

function working() {
    return new Promise((resolve, reject) => {
        console.log("")
        setTimeout(() => {
            resolve("Приїхали на роботу,")
        }, 1300)
    });
}

function onWork(times) {
    return new Promise((resolve, reject) => {
        console.log("")
        setTimeout(() => {
            console.log("Що там по годині?")
            if (times >= 18.00){
                resolve("о, ну всьо, пора додому)")
            } else {
                resolve("ех, ще працювати і працювати...")
            }
        }, 2000)
    });
}
async function goToWork() {
    try{
        const life = await myLife(8.00);
        console.log(life);

        const temp = await weather(20);
        console.log(temp);

        const water = await shower();
        console.log(water, "- DONE");

        const eat = await breakfest();
        console.log(eat, "- DONE");

        const teeth = await brushTeeth();
        console.log(teeth, "- DONE");

        const dress = await dressUp();
        console.log(dress, "- DONE");

        const walk = await goToBus();
        console.log(walk, "чекаєм автобус на роботу");

        const transport = await busToWork();
        console.log(transport);

        const works = await working();
        console.log(works, "пора пахати!!!");

        const work = await onWork(18.00);
        console.log(work);

    } catch (reason) {
        console.log(reason);
    }
}
goToWork();