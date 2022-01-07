let bt = document.getElementById('light');
let bg = document.querySelector('body');
let onoffnum = 0;
const cg = () => {
    if(onoffnum === 0) {
        bg.style.backgroundColor = 'white';
        bg.style.color = 'black';
        onoffnum++;
    }else {
        bg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        bg.style.color = 'snow';
        onoffnum--;
    };
};
bt.onclick = cg;


let win95 = document.getElementById('win95');
let win95p = document.getElementById('win95p');
let win95num = 0;
const photo1 = () => {
    if(win95num === 0) {
        win95p.style.display = 'block';
        win95num++;
    }else {
        win95p.style.display = 'none';
        win95num--;
    };
};
win95.onclick = photo1;

let game = document.getElementById('game');
let gamep = document.getElementById('gamep');
let gamenum = 0;
const photo2 = () => {
    if(gamenum === 0) {
        gamep.style.display = 'block';
        gamenum++;
    }else {
        gamep.style.display = 'none';
        gamenum--;
    };
};
game.onclick = photo2;

let dog = document.getElementById('dog');
let dogp = document.getElementById('dogp');
let dognum = 0;
const photo3 = () => {
    if(dognum === 0) {
        dogp.style.display = 'block';
        dognum++;
    }else {
        dogp.style.display = 'none';
        dognum--;
    };
};
dog.onclick = photo3;

let moto = document.getElementById('moto');
let motop = document.getElementById('motop');
let motonum = 0;
const photo4 = () => {
    if(motonum === 0) {
        motop.style.display = 'block';
        motonum++;
    }else {
        motop.style.display = 'none';
        motonum--;
    };
};
moto.onclick = photo4;

let coll = document.getElementById('coll');
let collp = document.getElementById('collp');
let collnum = 0;
const photo5 = () => {
    if(collnum === 0) {
        collp.style.display = 'block';
        collnum++;
    }else {
        collp.style.display = 'none';
        collnum--;
    };
};
coll.onclick = photo5;