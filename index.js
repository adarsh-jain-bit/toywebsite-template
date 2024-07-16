$('.owl-carousel').owlCarousel({
    loop:true,
   dots:false,
//    autoplay: true,
//    autoplayTimeout:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
         
        },
        600:{
            items:1,
          
        },
        1000:{
            items:1,
        
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// email
document.getElementById('envelope').onclick = () =>{
  let email = document.getElementById('email')
  email.classList.toggle("active")
}


function newimg(e){
    e.src ="/arihant/toy2.webp"
}
function oldimg(e){
    e.src ="/arihant/toy1.webp"
}

// countdown
const dest = new Date("june 25,2023 10:31:00 pm").getTime();

let time = setInterval(myfunction,1000)

function myfunction(){
    const now = new Date().getTime();
const diff = dest - now;

let days = Math.floor(diff / (1000*60*60*24));
// console.log(days)
let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
// console.log(hours)
let mins = Math.floor((diff % (1000*60*60)) / (1000*60));
// console.log(mins)
let seconds = Math.floor((diff % (1000*60)) / (1000));
// console.log(seconds)

if(days < 10){
days = "0" + days
}

if(hours < 10){
hours = "0" + hours
}

if(mins < 10){
mins = "0" + mins
}

if(seconds < 10){
seconds = "0" + seconds
}
let time2 = document.getElementById("time")
if(days == 0 && hours == 0 && mins ==0 && seconds == 0 ){
  time2.innerHTML="TIme Expired"
}

 document.getElementById("days").innerHTML = days 
document.getElementById("hours").innerHTML = hours
 document.getElementById("minutes").innerHTML =  mins
 document.getElementById("seconds").innerHTML = seconds
 let toytime = document.getElementsByClassName("toy-icon2")
 for(let i = 0;i < toytime.length;i++){
   toytime[i].innerHTML = days + " : " + hours + " : " + mins + " : " + seconds ;
 }
}
let boxtime= document.getElementsByClassName("boxtime")

for(let i = 0; i<boxtime.length;i++){
boxtime[i].addEventListener("mouseenter",()=>{
  document.getElementsByClassName("showicon")[i].style.display="block"
  document.getElementsByClassName("toy-icon2")[i].style.display="none"
  document.getElementsByClassName("showicon")[i].style.transition = "1s"
  document.getElementsByClassName("toy-icon2")[i].style.transition = "1s"
 })
 boxtime[i].addEventListener("mouseleave",()=>{
  document.getElementsByClassName("showicon")[i].style.display="none"
  document.getElementsByClassName("showicon")[i].style.transition = "1s"
  document.getElementsByClassName("toy-icon2")[i].style.display="block"
  document.getElementsByClassName("toy-icon2")[i].style.transition = "1s"
 })
}

  

var swiper1 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      },
  });

var swiper = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    breakpoints: {
      0:{
        slidesPerView: 2,
      },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let plus = document.getElementById("plus")
  let minus = document.getElementById("minus")
let number = document.getElementById("number")
let a = 1;

  plus.onclick = () => {
  if(a > 0  ){
    a++;
    a = (a < 10)? "0" + a : a;
    number.innerText = a;
   
  }
  if( a >= 10){
    a = 10;
    number.innerText = a;
    alert("cannot add more")
    number.style.background = "red"
    number.style.color = "white"
  }
   }

  minus.onclick = () => {
   if(a > 1){
    a--;
    a = (a < 10)? "0" + a : a;
    number.innerText = a;
    number.style.background = "white"
    number.style.color = "blue"
   }
  }
  var swiper = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    breakpoints: {
      0:{
        slidesPerView: 3,
      },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  AOS.init({
    duration:3000,
  });
  // contact form
  let closeBtn = document.querySelector("#close-btn")
  let contactform = document.querySelector(".contact-form")

  closeBtn.addEventListener("mouseover",function(){
    this.classList.toggle("move")
  })

  closeBtn.addEventListener("click",()=>{
contactform.classList.toggle("formcontact")
  })

  setInterval(()=>{
contactform.style.display = "block"
  },5000)

  // trendy one toy
  function changeimg(smallimg){
var biggerimg = document.getElementById("biggerimg")
let original = biggerimg.src
biggerimg.src = smallimg.src
smallimg.src = original
  }