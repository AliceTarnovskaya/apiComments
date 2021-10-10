let httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
    let comments = JSON.parse(httpRequest.responseText);
    let result = document.querySelector('.result');

    for (let i = 0; i < 5; i++) {
        const ul = document.createElement('ul');

        function addEmail() {
            const li = document.createElement('li');
            li.innerText = comments[i].email;
            ul.appendChild(li);

        }
        function addId() {
            const li = document.createElement('li');
            li.innerText = comments[i].id;
            ul.appendChild(li);

        }
        function addBody() {
            const li = document.createElement('li');
            li.innerText = comments[i].body;
            ul.appendChild(li);

        }
        addId();
        addEmail();
        addBody();

        result.appendChild(ul);

    }
}
httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();



