fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value => {
        const usersBox = document.getElementsByClassName("users-box")[0];
            for (const user of value) {
                let divElements = document.createElement("div");
                divElements.innerText = `${user.id}. ${user.name}\n`;

                let btn = document.createElement("button");
                btn.innerText = "details";
                btn.onclick = () => {
                    location.href = `user-details.html?user=${JSON.stringify(user)}`;
                }
                divElements.append(btn);
                usersBox.append(divElements);
            }
    });


