/* page de chargement

const loader = document.querySelector('.loader');

window.addEventListener('load',()=>{
    loader.classList.add('fondu-out')
})

*/

/*Effet de souris JavaScript ! (2019)*/

//Effet de souris JavaScript ! (2019)

const balls = document.getElementsByClassName('ball')


document.addEventListener('mousemove', (e)=>{


    let x= e.clientX * 100 / window.innerWidth+"%";
    let y= e.clientY * 100 / window.innerHeight+"%";

    for(let i =0; i<2; i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform= "translate(-"+x+",-"+y+")";

    }



})

document.addEventListener('touchmove', (e)=>{


    let x= e.clientX * 100 / window.innerWidth+"%";
    let y= e.clientY * 100 / window.innerHeight+"%";

    for(let i =0; i<2; i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform= "translate(-"+x+",-"+y+")";

    }



})