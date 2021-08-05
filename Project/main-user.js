let userJSON = new URL(location).searchParams.get('user');
let user = JSON.parse(userJSON);

let userInfo = document.getElementsByClassName("user-info")[0];
    let div = document.createElement('div');
    div.innerText = JSON.stringify(user, null, 2)
    userInfo.append(div);

let btn = document.createElement("button");
    btn.innerText = "post of current user";
    btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            // console.log(value)
            let userTitle = document.getElementsByClassName("user-title")[0];
            userTitle.innerText = "";
            for (let post of value) {
                let postElemenents = document.createElement("div");
                postElemenents.innerText = `${post.title}`;

                let btn1 = document.createElement("button");
                btn1.innerText = "details info";
                btn1.onclick = () => {
                    location.href = `post-details.html?post=${JSON.stringify(post)}`;
                }
                postElemenents.append(btn1)
                userTitle.append(postElemenents);
            }
        });
}
div.append(btn);
