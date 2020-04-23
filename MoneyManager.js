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



//******************************************* */ Expenses section ******************************************* */

document.querySelector(".loadAddBtn").addEventListener("click", loans);
function loans() {
  document.querySelector(".loanSection").innerHTML += "<div> <label>Loan Repayments</label> <input type='text' name='Loan Name' placeholder='Name'></input>  <input type='number' name='Amount' placeholder='Amount'> </input> <select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> <input type='date' name='Date'> </div>"; 
    
}

document.querySelector(".rentAddBtn").addEventListener("click", rents);
function rents() {
  document.querySelector(".rentSection").innerHTML += "<div><label>Rent payments</label> <input type='text' name='Rent Property' placeholder='Name'></input> <input type='number' name='Amount' placeholder='Amount'></input> <select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> <input type='date' name='Date'> </div>"; 
    
}

document.querySelector(".groceriesAddBtn").addEventListener("click", groceries);
function groceries() {
  document.querySelector(".groceriesSection").innerHTML += "<div><label>Groceries</label> <input type='text' name='Groceries' placeholder='Name'></input> <input type='number' name='Amount' placeholder='Amount'></input> <input type='currency' placeholder='Currency'> </input><input type='date' name='Date'> </div>"; 
    
}

document.querySelector(".billAddBtn").addEventListener("click", bills);
function bills() {
  document.querySelector(".billSection").innerHTML += "<div><label>Bill payments</label> <input type='text' name='Bill Name' placeholder='Name'></input> <input type='number' name='Amount' placeholder='Amount'></input> <select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select><input type='date' name='Date'> </div>"; 
    
}

document.querySelector(".medicineAddBtn").addEventListener("click", medicine);
function medicine() {
  document.querySelector(".medicineSection").innerHTML += "<div> <label>Medicines</label> <input type='text' name='Medicine' placeholder='Name'></input> <input type='number' name='Amount' placeholder='Amount'></input> <select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> <input type='date' name='Date'> </div>"; 
    
}

document.querySelector(".travelAddBtn").addEventListener("click", travel);
function travel() {
  document.querySelector(".travelSection").innerHTML += "<div><label>Travel Expenses</label>  <input type='text' name='Travel' placeholder='Name'></input> <input type='number' name='Amount' placeholder='Amount'></input> <select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> <input type='date' name='Date'></div>"; 
    
}

document.querySelector(".restaurantsAddBtn").addEventListener("click", restaurants);
function restaurants() {
  document.querySelector(".restaurants").innerHTML += "<div><label>Restaurant Bills</label> <input type='text' name='Restaurants' placeholder='Name'></input> <input type='number' name='Amount' placeholder='Amount'></input> <select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select>  <input type='date' name='Date'></div>"; 
    
}