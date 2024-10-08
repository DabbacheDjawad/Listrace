const revName = document.getElementById("reviewer-name");
const revImg = document.getElementById("reviewer-img");
const header = document.querySelector(".header");
const navItems = document.querySelector("#nav-links");
const responsiveBtn = document.querySelector("#responsive-btn");
const numbers = document.querySelectorAll(".nb");
const formInput = document.querySelectorAll(".inp");
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");
 


//object of reviewers  used in change reviewer function
const reviewers = [
    {
        name:"Tom Leaker",
        img:"images/clients/c1.png"
    },

    {
        name:"Monirul Islam",
        img:"images/clients/c2.png"
    },

    {
        name:"Shohrab Hussain",
        img:"images/clients/c3.png"
    },

    {
        name:"Dave Johnson",
        img:"images/clients/c4.png"
    }
];


//change reviewer function 
let counter = 0;
function changeReviewer(){
    if(counter>3){
        counter = 0;
    }
    let item = reviewers[counter];
    revImg.src = item.img;
    revName.textContent = item.name;
}
//we use set interval to change the reviewer every 3seconds
setInterval(()=>{
    changeReviewer();
    counter++;
},3000)


//sticky navbar function
  window.onscroll = function() {
   
    var sticky = header.offsetTop;

    //scrollY gives you how many pixels you scrolled on the Y axis (vertically)
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };




  //part of the incr function
function getRandomPosition(){
    return Math.floor(Math.random()*100)+50;
}



//incrementing numbers function
function incr(){
    for(let i = 0;i<numbers.length;i++){
        const a = Number(numbers[i].textContent);
        const Interval = setInterval(() => {
            // Increase number rapidly
            let number=0;
            number += Math.floor(Math.random() * 100);
            numbers[i].innerHTML = number;
        },100);
    }
}


//responsive navbar function
responsiveBtn.addEventListener("click" , ()=>{
    if(navItems.classList.contains("active")){
        navItems.classList.remove("active");
        
    }else{
        navItems.classList.add("active");
    }
    console.log(navItems.classList);
    
})

//function that makes the placeholder disappears when clicking on the form

formInput.forEach(input=>{
    input.addEventListener("click",()=>{
        input.placeholder = "";
    })
});



//function that makes you scroll to sections from the navbar
links.forEach(link =>{
    link.addEventListener("click" , (event)=>{
        event.preventDefault();
        let sectionNb = Number(link.getAttribute("ind"));
        window.scrollTo(0,sections[sectionNb+1].offsetTop); 
    })
})


incr();