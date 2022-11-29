function bigImg(x) {
    x.style.transform= "translateY(-15px)";
    x.style.transition= "0.5s";
    
    setTimeout(() => {
        x.style.transform= "translateY(-0px)";
      }, 500);

}