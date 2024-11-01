// DOM Manipulation along with selecting elements

// 1. getElementById => select a single element by its unique id

const headColor = document.getElementById('heading');
headColor.style.color = 'red';
console.log(headColor.textContent);
// function to change the heading
headColor.onclick = function(){
    headColor.style.color = 'green';
    headColor.innerHTML = 'DOM Manipulation'
}

// 2. getElementsByClassName => select all the elements with the same class name

const elemClass = document.getElementsByClassName('item');
for(const elem of elemClass){
    elem.style.color = 'blue';
    elem.style.fontWeight = 'bold';
}

// 3. getElementsByTagName => select all the elements with the same tag name

const elemTag = document.getElementsByTagName('ul');
for(const elem of elemTag){
    elem.style.color = 'blue';
    elem.style.fontWeight = 'bold';
}

// 4. querySelector => select a single element by its unique CSS selector

const input = document.querySelector('#input');
input.style.color = 'red';
input.style.fontSize = '20px';
input.style.border = '1px solid yellow';

// 5. querySelectorAll => select all the elements with the same CSS selector

const list = document.querySelectorAll('.item');
for(const elem of list){
    elem.style.color = 'blue';
    elem.style.fontWeight = 'bold';
}