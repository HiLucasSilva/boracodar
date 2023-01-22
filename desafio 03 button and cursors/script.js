const btnPrimary = document.querySelector('.primary-button');
const btnSecondary = document.querySelector('.second-button');
const btnTertiary = document.querySelector('.tertiary-button');
const imgCursor = document.querySelector('.cursor-button');
const btnOne = document.querySelector('#button1');
const body = document.querySelector('body');


loadImg = (image) => {
    return `<img src="./img/${image}" class="img-dir"></img>`;
} 

insertButtonsPrimary = (image,text,classType) => {
    btnPrimary.innerHTML += `<button class="primary ${classType}">${image}${text}</button> `;
}

insertButtonsSecondary = (image,text,classType) => {
    btnSecondary.innerHTML += `<button class="primary secundary ${classType}">${image}${text}</button> `;
}

insertButtonsTertiary = (image,text,classType) => {
    btnTertiary.innerHTML += `<button class="primary tertiary ${classType}">${image}${text}</button> `;
}

insertImgCursor = (loadFrom) => {
    imgCursor.innerHTML += 
    `<div class="img-cursor">` +
        `<img src="./img/${loadFrom}" alt="Default" class="img-pointer">` +
    `</div>`;
}

clickButton = () => {
    btnOne.addEventListener('click', () => {
        btnOne.classList.add('active');
        body.classList.add('activeCursor');
        btnOne.innerHTML = `<img src="./img/load.png" class="img-dir rotate"></img>Loading`;
        var interval = setInterval(removeClass = () => {
            btnOne.classList.remove('active');
            body.classList.remove('activeCursor');
            btnOne.innerHTML = 'Interaja comigo';
            open('https://www.linkedin.com/in/lucas-mendonça-silva-2b7856243/', '_blank');
            clearInterval(interval);
        }, 3000);
    });
}


insertButtonsPrimary("", "Hover Primary", "hover-primary");
insertButtonsPrimary("", "Focus Primary", "focus");
insertButtonsPrimary("", "Disabled Primary", "disabled");
insertButtonsPrimary(loadImg("load.png"), "Loading Primary", "load");
insertButtonsPrimary(loadImg("move.png"), "Movable Primary", "move");

insertButtonsSecondary("", "Hover Secondary", "hover-secundary");
insertButtonsSecondary("", "Focus Secondary", "focus");
insertButtonsSecondary("", "Disabled Secondary", "disabled");
insertButtonsSecondary(loadImg("load.png"), "Loading Secondary", "load");
insertButtonsSecondary(loadImg("move.png"), "Movable Secondary", "move");

insertButtonsTertiary("", "Hover Tertiary", "hover-secundary");
insertButtonsTertiary("", "Focus Tertiary", "focus");
insertButtonsTertiary("", "Disabled Tertiary", "disabled");
insertButtonsTertiary(loadImg("load.png"), "Loading Tertiary", "load");
insertButtonsTertiary(loadImg("move.png"), "Movable Tertiary", "move");

insertImgCursor("pointer.png");
insertImgCursor("pointer.png");
insertImgCursor("pointer_disable.png");
insertImgCursor("pointer_load.png");
insertImgCursor("pointer_move.png");

clickButton();