document.getElementById("openMenu").addEventListener("click", openNav);

function openNav(){
    document.getElementsByClassName('nav-right')[0].style.visibility = "visible";
    document.body.style.overflowY = 'hidden';
}

document.getElementById("closeMenu").addEventListener("click", closeNav);

function closeNav(){
    document.getElementsByClassName("nav-right")[0].style.visibility = "hidden";
    document.body.style.overflowY = 'scroll';
}