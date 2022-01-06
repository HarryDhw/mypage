let bt = document.getElementById('light');
let bg = document.querySelector('body');
const cg = () => {
    if(bg.style.color === 'snow') {
        bg.style.backgroundColor = 'lightblue';
        bg.style.color = 'black';
    }else {
        bg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        bg.style.color = 'snow';
    };
};
bt.onclick = cg;
