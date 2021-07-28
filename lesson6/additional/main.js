// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value => {
        let usersWrap = document.getElementsByClassName("users-wrap")[0];
        for (let user of value) {
            let divElements = document.createElement("div");
            divElements.innerText = `${user.id}. ${user.name} `;

            let btn = document.createElement("button");
            btn.innerText = "posts";
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value1 => value1.json())
                    .then(value1 => {
                        // console.log(value)
                        let postsWrap = document.getElementsByClassName("posts-wrap")[0];
                        postsWrap.innerText = "";
                        for (let post of value1) {
                            let postsElemenents = document.createElement("p");
                            postsElemenents.innerText = `\n ${post.body}`;

                            let btn1 = document.createElement("button");
                            btn1.innerText = "comments";
                            btn1.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(value2 => value2.json())
                                    .then(value2 => {
                                        // console.log(value2)
                                        let commentsWrap = document.getElementsByClassName("comments-wrap")[0];
                                        commentsWrap.innerText = "";
                                        for (let comment of value2) {
                                            let commentsElements = document.createElement("p");
                                            commentsElements.innerText = comment.body;
                                            commentsWrap.append(commentsElements);
                                        }
                                    })
                            }
                            postsElemenents.append(btn1);
                            postsWrap.append(postsElemenents);
                        }
                    });
            }
            divElements.append(btn);
            usersWrap.append(divElements);
        }
    });
