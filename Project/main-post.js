let postJSON = new URL(location).searchParams.get('post');
let post = JSON.parse(postJSON);

let postInfo = document.getElementsByClassName("post-info")[0];
    let div1 = document.createElement('div');
    div1.innerText = JSON.stringify(post, null, 2)
    postInfo.append(div1);

let btn2 = document.createElement("button");
    btn2.innerText = "comments";
    btn2.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(value => {
            // console.log(value)
            let postComments = document.getElementsByClassName("post-comments")[0];
            postComments.innerText = "";
            for (let posts of value) {
                let postsElemenents = document.createElement("div");
                console.log(posts)
                postsElemenents.innerText = `${posts.body}`;
                postComments.append(postsElemenents);

            }
        });
}
div1.append(btn2);