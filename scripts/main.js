let womOpened = true;
let fmanimeOpened = true;

wom_collapse();
fmanime_collapse();

function wom_collapse() {
    let moreText = document.getElementById("more-wom");
    let btnText = document.getElementById("womBtn");
  
    if (womOpened === true) {
        womOpened = false;
      btnText.innerHTML = "<b>Read More</b>";
      moreText.style.display = "none";
    } else {
        womOpened = true;
        btnText.innerHTML = "<b>Read Less</b>";
        moreText.style.display = "inline";
    }
} 

function fmanime_collapse() {
    let moreText = document.getElementById("more-fmanime");
    let btnText = document.getElementById("fmanimeBtn");
  
    if (fmanimeOpened === true) {
        fmanimeOpened = false;
      btnText.innerHTML = "<b>Read More</b>";
      moreText.style.display = "none";
    } else {
        fmanimeOpened = true;
        btnText.innerHTML = "<b>Read Less</b>";
        moreText.style.display = "inline";
    }
} 