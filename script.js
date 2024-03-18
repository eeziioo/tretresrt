let bady = document.querySelector('body');

fetch('https://picsum.photos/v2/list')
    .then(function (respone) {
        return respone.json()
    })
    .then(function () {
        let number = Math.floor(Math.random() * 30);
        document.body.style.backgroundImage = `url(https://picsum.photos/id/${number}/5000/3333)`
    })


let text = document.querySelector('.text')
let text1 = document.querySelector('.text1')

fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        text.textContent = data.setup
        text1.textContent = data.punchline
    })

let inputTag = document.querySelector('.yozish')
let javob = document.querySelector('.javob')

let parentDiv = document.querySelector('.parent')

let line = document.querySelector('.line')



function logText() {

    let newDiv = document.createElement('div');
    newDiv.classList.add('input-text');

    let newP = document.querySelector('.yozuv')
    newP.textContent = inputTag.value

    let plusBtn = document.querySelector('.javob');
    // plusBtn.textContent = 'plus';
    plusBtn.addEventListener('click', function () {
        newP.classList.toggle('over')
    })

    newDiv.appendChild(newP);
    newDiv.appendChild(plusBtn);
    parentDiv.appendChild(newDiv);
    newDiv.appendChild(btn1);


    inputTag.value = ''
    inputTag.classList.add('olibtasha');
    btn.classList.add('olibtasha');
    javob.classList.add('olibqoyish');
    newP.classList.add('yozuv');
    btn1.classList.add('olibqoyish');
    line.classList.add('olibtasha');
}

let btn = document.querySelector('.ok');

btn.classList.add('nol')

btn.addEventListener('click', logText)

function korsatish() {
    let newP = document.querySelector('.yozuv')

    inputTag.value = '';
    inputTag.classList.toggle('olibqoyish');
    btn.classList.toggle('olibqoyish');
    newP.classList.add('dis');
    javob.classList.add('dis');
    btn1.classList.add('dis');
    line.classList.add('olibqoyish')
}


let btn1 = document.createElement('button');

btn1.classList.toggle('btn1')

btn1.textContent = 'delete'
btn1.addEventListener('click', korsatish);

// function ermak() {
//     let newP = document.querySelector('.yozuv')

//     inputTag.value = ''
//     inputTag.classList.add('olibtashaa');
//     btn.classList.add('olibtashaa');
//     javob.classList.add('olibqoyishh');
//     newP.classList.add('yozuv');
//     btn1.classList.add('olibqoyishh');
//     line.classList.add('olibtashaa');
// }

// let btn2 = document.querySelector('.okk');

// btn2.classList.add('nol')

// btn2.addEventListener('click', ermak)


function umar() {
    let box = document.querySelector('.box')
    let data = new Date();

    let hours = document.querySelector('.hours')
    hours.innerHTML = (data.getHours() < 10 ? "0" : " ") + data.getHours();
    let minuts = document.querySelector('.minuts')
    minuts.innerHTML = (data.getMinutes() < 10 ? "0" : " ") + data.getMinutes();

}

umar()

setInterval(function () {
    umar()
}, 1000,)

function chiq() {
    let ismpromt = prompt('Ismingizni kiriting')


    let ismcha = document.querySelector('.ismcha')

    let ism = document.createElement('div')

    ismcha.appendChild(ism)
    ism.classList.add('ism')

    hour = new Date().getHours();
    ism.innerHTML = "Good " + (hour < 12 && "Morning" || hour < 18 && "Afternoon" ||"Evening") + ', ' + ismpromt

}


chiq()
