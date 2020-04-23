document.getElementById("myBtn").addEventListener("click", savingsLIC);
function savingsLIC() {
document.querySelector(".demo").innerHTML += "<div> <label>LIC</label><input type='text' placeholder='Name'></input> <input type='number' placeholder='Amount'></input>  <select class='currency-selector'><option selected>Select Currency</option><option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option><option>CAD</option><option>AUD</option></select>  <input type='date' placeholder='Date'></input></div> ";
}


document.getElementById("myBtn1").addEventListener("click", savingsFD);
function savingsFD() {
document.querySelector(".demo1").innerHTML += "<div> <label>FD</label><input type='text' placeholder='Name'></input> <input type='number' placeholder='Amount'></input>  <select class='currency-selector'><option selected>Select Currency</option><option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option><option>CAD</option><option>AUD</option></select>  <input type='date' placeholder='Date'></input></div> ";
}


document.getElementById("myBtn2").addEventListener("click", savingsRD);
function savingsRD() {
document.querySelector(".demo2").innerHTML += "<div> <label>RD</label><input type='text' placeholder='Name'></input> <input type='number' placeholder='Amount'></input>  <select class='currency-selector'><option selected>Select Currency</option><option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option><option>CAD</option><option>AUD</option></select>  <input type='date' placeholder='Date'></input></div> ";
}

document.getElementById("myBtn3").addEventListener("click", savingsOthers);
function savingsOthers() {
document.querySelector(".demo3").innerHTML += "<div> <label>Others</label><input type='text' placeholder='Name'></input> <input type='number' placeholder='Amount'></input>  <select class='currency-selector'><option selected>Select Currency</option><option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option><option>CAD</option><option>AUD</option></select>  <input type='date' placeholder='Date'></input></div> ";
}