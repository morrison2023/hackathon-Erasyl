
$(document).ready(function(){
    $("btn").click(function(){
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function (){
        $(".modal-canvas").toggleClass("hidden");
    });
});

let abtext=document.getElementById('ab_text');
let nnext=document.getElementsByClassName('next')
let planet=document.getElementById('next');

var planets=document.querySelectorAll('.planet')
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    abtext.style.left=value*-0.5+'px';
    abtext.style.transition='1.5s';
});



planet.addEventListener('click',function() {
let p=this.dataset.p || 0;
planets[p].classList.remove('active');
    if(++p < planets.length ){
    planets[p].classList.add('active');
    this.dataset.p=p;
    }
}
);












$(document).ready( function () {
    
    $(".btn").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
$(".modal-close").click(function () {
    $(".modal-canvas").toggleClass("hidden");
});
});


