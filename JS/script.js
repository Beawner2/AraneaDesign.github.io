const nav = document.getElementById('mynav');
const ListNav = document.getElementById('ListNav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const svg = document.querySelectorAll("#LogoSVG path");

for (let i=0;i<svg.length;i++)
{
  //console.log("drag star")
 console.log(`Letter ${i} is ${svg[i].getTotalLength()}`);
}

function updateNavColor(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
    ListNav.classList.add("DistribucionComplet");
    ListNav.classList.remove("DistribucionCompac");
    console.log("drag star");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
    ListNav.classList.remove("DistribucionComplet");
    ListNav.classList.add("DistribucionCompac");
    console.log("Not drag star");
  }
  
}

const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[990,2],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });

    //open popup
$('.cd-popup-trigger').on('click', function(event){
  event.preventDefault();
  $('.cd-popup').addClass('is-visible');
});

//close popup
$('.cd-popup').on('click', function(event){
  if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
    event.preventDefault();
    $(this).removeClass('is-visible');
  }
});
//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
    if(event.which=='27'){
      $('.cd-popup').removeClass('is-visible');
    }
  });
    

});

let DescripcionA1 = document.getElementById("InfA1");
let DescripcionA2 = document.getElementById("InfA2");
let DescripcionA3 = document.getElementById("InfA3");
let DescripcionA4 = document.getElementById("InfA4");


function MostrarDes(valor){
    if (valor===0){
        DescripcionA1.style=" opacity: 100%"
    }
    else if (valor===1){
        DescripcionA2.style=" opacity: 100%"
    }
    else if (valor===2){
        DescripcionA3.style=" opacity: 100%"
    }
    else if (valor===3){
        DescripcionA4.style=" opacity: 100%"
    }
    
}

function OcultarDes(){
    DescripcionA1.style=" opacity: 0"
    DescripcionA2.style=" opacity: 0"
    DescripcionA3.style=" opacity: 0"
    DescripcionA4.style=" opacity: 0"
    
}







