function bigImg(x) {
    x.style.transform= "translateY(-15px)";
    x.style.transition= "0.5s";
    
    setTimeout(() => {
        x.style.transform= "translateY(-0px)";
      }, 500);

}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  window.onscroll = function() { 
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      myBtn.style.opacity = "1";
    } else {
      myBtn.style.opacity = "0";
    }}; 
}
function goup(x){

const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
  //window.scrollTo(0, 0);
  window.scrollTo(
    {
      top: 0,
      left: 0,
      behavior: "smooth"
    }
  );
});
}
/*
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/
function changeStyle(){
  var element = document.getElementById("myDiv");
  element.style.backgroundColor = "#00FF00";
}

function changeColor(color) { 
  var innerDiv = document.querySelector(".myDiv");

  var boxes = document.querySelectorAll(".h3-out");
  var rounds = document.querySelectorAll(".box-item");
  var texts = document.querySelectorAll(".changeColText");
  var links = document.querySelectorAll(".link");
  var sales = document.querySelectorAll(".sale");
  
  innerDiv.style.background = color; 

  rounds.forEach( round=> {
    round.style.background = color;
    round.style.color = "black";
    round.style.margin =" 0 10px 0 10px ";
  });
  sales.forEach( sale=> {
    sale.style.background = color;
    sale.style.color = "black";
  });  
  boxes.forEach(box => {
    box.style.color = color;
  });
  texts.forEach(text => {
    text.style.color = color;
  });
  links.forEach(link => {
      link.style.color = color;
  });
  /*
  ///here the menu section
  
  */

  /* Sélection des éléments HTML */
  window.onscroll = function() {scrollMenu()};

  function scrollMenu() {
    window.onscroll = function() { 
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        myBtn.style.opacity = "1";
      } else {
        myBtn.style.opacity = "0";
      }}; 
  }
  const myBtn = document.getElementById("myBtn");

}