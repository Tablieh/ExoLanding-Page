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