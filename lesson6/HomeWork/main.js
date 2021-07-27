// 1. Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(value => value.json())
    .then(value => {
        let postsWrap = document.getElementsByClassName("posts-wrap")[0];
        for (const postUser of value) {
            let divElements = document.createElement("div");
            divElements.innerText = `\n${postUser.userId}.${postUser.id}\n title: "${postUser.title}";\n body: "${postUser.body}".`;
            postsWrap.append(divElements);
        }
    });

// 2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/comments

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(value => value.json())
    .then(value => {
        let commentsWrap = document.getElementsByClassName("comments-wrap")[0];
        for (const com of value) {
            let divElements = document.createElement("div");
            divElements.innerText = `\n${com.postId}.${com.id}\n name: "${com.name}";\n email: "${com.email}";\n body: "${com.body}".`;
            commentsWrap.append(divElements);
        }
    });
