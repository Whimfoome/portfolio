let womOpened = false;

function wom_collapse() {
    let moreText = document.getElementById("more");
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