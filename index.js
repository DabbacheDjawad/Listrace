const revName = document.getElementById("reviewer-name");
const revImg = document.getElementById("reviewer-img");
const header = document.querySelector(".header");
const numbers = document.querySelectorAll(".nb");


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

let counter = 0;
function changeReviewer(){
    if(counter>3){
        counter = 0;
    }
    let item = reviewers[counter];
    revImg.src = item.img;
    revName.textContent = item.name;
}

setInterval(()=>{
    changeReviewer();
    counter++;
},3000)

  window.onscroll = function() {
   
    var sticky = header.offsetTop;

    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

function getRandomPosition(){
    return Math.floor(Math.random()*100)+50;
}


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
incr();