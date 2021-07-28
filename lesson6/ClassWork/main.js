// 1. Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(value => value.json())
    .then(value => {
        let postsWrap = document.getElementsByClassName("posts-wrap")[0];
        for (const post of value) {
            let divElements = document.createElement("div");
            divElements.innerText = `post #${post.id} `;

            let btn = document.createElement("button");
            btn.innerText = "comments";
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        // console.log(value)
                        let commentsWrap = document.getElementsByClassName("comments-wrap")[0];
                        commentsWrap.innerText = "";
                        for (let comment of value) {
                            let commentsElemenents = document.createElement("div");
                            commentsElemenents.innerText = comment.body;
                            commentsWrap.append(commentsElemenents);
                        }
                    });
            }
            divElements.append(btn);

            postsWrap.append(divElements);
        }
    });
