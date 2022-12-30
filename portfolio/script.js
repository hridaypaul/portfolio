let header= document.querySelector("header");
let menu =document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

let darkmode = document.querySelector('#moon');
darkmode.onclick=()=>{
    if(darkmode.classList.contains('fa-solid')){
        darkmode.classList.replace('fa-solid','fa-regular' );
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('fa-regular','fa-solid');
        document.body.classList.remove('active');

    }
}
