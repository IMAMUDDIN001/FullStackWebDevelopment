let dec = document.getElementById("decrement");
let incr = document.getElementById("increment");
let reset = document.getElementById("reset");
let displayValue = document.getElementById("takeinput");

// for decrement
dec.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
        
    } else {
        alert("Negative value not allowed")
    }
});

// for increment button click
incr.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });


// for reset button
reset.addEventListener("click", () => {
    displayValue.innerText = 0;
});