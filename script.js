// task 3
// const form = document.querySelector('.form'),
//     input = document.querySelector('.form__input'),
//     button = document.querySelector('.form__button'),
//     list = document.querySelector('.list');

// function addListItem() {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let listItem = document.createElement('li');
//         listItem.innerText += ${input.value};
//         list.append(listItem);
//         input.value = '';
//     })
// }

// addListItem();


// task4
// const calculator = document.querySelector('form.calculator'),
//     inputFirst = calculator.querySelector('.input__first'),
//     inputSecond = calculator.querySelector('.input__second'),
//     select = calculator.querySelector('.calculator__select'),
//     option = calculator.querySelector('option:checked'),
//     result = document.querySelector('div.result');


// function getResult() {
//     calculator.addEventListener('submit', () => {
//         let p = document.createElement('p');
//         if (option.value === 'plus') {
//             p.innerHTML = `${Number(inputFirst.value) + Number(inputSecond.value)} `;
//             result.append(p);
//         } else if (option.value === 'minus') {
//             p.innerHTML = ` ${Number(inputFirst.value) - Number(inputSecond.value)}`;
//             result.append(p);
//         } else if (option.value === 'multiply') {
//             p.innerHTML = `${Number(inputFirst.value) * Number(inputSecond.value)} `;
//             result.append(p);
//         } else if (option.value === 'divide') {
//             p.innerHTML = ` ${Number(inputFirst.value) / Number(inputSecond.value)}`;
//             result.append(p);
//         } else {
//             console.log('error');
//         }
//         inputFirst.value = '';
//         inputSecond.value = '';
//     });
// };

// getResult();


// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function () {
//     let tasks = JSON.parse(httpRequest.responseText)
//     document.body.innerHTML = tasks.name;
//     // document.body.querySelector("div").innerText = httpRequest.responseText;
//     // let getHttpRequest = new XMLHttpRequest();
//     // getHttpRequest.onload = function () {
//     //     console.log(getHttpRequest.responseText)
//     // }
//     // getHttpRequest.open('GET', "tasks.name");
//     // getHttpRequest.setRequestHeader('Accept', 'application/json');
//     // getHttpRequest.send();
// }

// // POST
// httpRequest.open("POST", "https://jsonplaceholder.typicode.com/comments");
// // клиент при отправке запроса говорит серверу, что тип отправляемых данных (Content-Type) - json (полное название - application/json)
// // "Accept", "application/json" значит то же самое, что и в предыдущем примере
// httpRequest.setRequestHeader("Accept", "application/json");
// // httpRequest.setRequestHeader("Content-Type", "application/json");

// // httpRequest.send('{"title": "Alisa", "done": true, "category": "cat"}');


// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function () {
//     let comments = JSON.parse(httpRequest.responseText);
//     let result = document.querySelector('.result');
//     for (let i = 0; i < 5; i++) {
//         const ul = document.createElement('ul');

//         function addEmail() {
//             const li = document.createElement('li');
//             li.innerText = comments[i].email;
//             ul.appendChild(li);

//         }
//         function addId() {
//             const li = document.createElement('li');
//             li.innerText = comments[i].id;
//             ul.appendChild(li);

//         }
//         function addBody() {
//             const li = document.createElement('li');
//             li.innerText = comments[i].body;
//             ul.appendChild(li);

//         }
//         addId();
//         addEmail();
//         addBody();

//         result.appendChild(ul);

//     }
// }
// httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send();




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



