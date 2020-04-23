document.getElementById("myBtn").addEventListener("click", savingsLIC);
function savingsLIC() {
document.querySelector(".demo").innerHTML += "<table class='table table-striped table-responsive-stack'> <tr><td> <label>LIC &nbsp;&nbsp;</label></td><td><input type='text' placeholder='Name'></td><td><input type='number' placeholder='Amount'></input></td><td><select class='currency-selector'><option selected>Select Currency</option> <option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option> <option>CAD</option><option>AUD</option><option>INR</option></select></td><td><input type='date'></td> </tr></table> ";
}


document.getElementById("myBtn1").addEventListener("click", savingsFD);
function savingsFD() {
document.querySelector(".demo1").innerHTML += "<table class='table table-striped table-responsive-stack'> <tr><td> <label>FD &nbsp;&nbsp;</label></td><td><input type='text' placeholder='Name'></td><td><input type='number' placeholder='Amount'></input></td><td><select class='currency-selector'><option selected>Select Currency</option> <option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option> <option>CAD</option><option>AUD</option><option>INR</option></select></td><td><input type='date'></td> </tr></table> ";
}


document.getElementById("myBtn2").addEventListener("click", savingsRD);
function savingsRD() {
document.querySelector(".demo2").innerHTML += "<table class='table table-striped table-responsive-stack'> <tr><td> <label>RD &nbsp;&nbsp;</label></td><td><input type='text' placeholder='Name'></td><td><input type='number' placeholder='Amount'></input></td><td><select class='currency-selector'><option selected>Select Currency</option> <option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option> <option>CAD</option><option>AUD</option><option>INR</option></select></td><td><input type='date'></td> </tr></table> ";
}

document.getElementById("myBtn3").addEventListener("click", savingsOthers);
function savingsOthers() {
document.querySelector(".demo3").innerHTML += "<table class='table table-striped table-responsive-stack'> <tr><td> <label>Others &nbsp;&nbsp;</label></td><td><input type='text' placeholder='Name'></td><td><input type='number' placeholder='Amount'></input></td><td><select class='currency-selector'><option selected>Select Currency</option> <option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option> <option>CAD</option><option>AUD</option><option>INR</option></select></td><td><input type='date'></td> </tr></table> ";
}



//******************************************* */ Expenses section ******************************************* */

document.querySelector(".loadAddBtn").addEventListener("click", loans);
function loans() {
  document.querySelector(".loanSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Loan payments &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}

document.querySelector(".rentAddBtn").addEventListener("click", rents);
function rents() {
  document.querySelector(".rentSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Rent payments &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}

document.querySelector(".groceriesAddBtn").addEventListener("click", groceries);
function groceries() {
  document.querySelector(".groceriesSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Groceries &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}

document.querySelector(".billAddBtn").addEventListener("click", bills);
function bills() {
  document.querySelector(".billSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Bill payments &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}

document.querySelector(".medicineAddBtn").addEventListener("click", medicine);
function medicine() {
  document.querySelector(".medicineSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Medicines &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}

document.querySelector(".travelAddBtn").addEventListener("click", travel);
function travel() {
  document.querySelector(".travelSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Travel Expenses &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}

document.querySelector(".restaurantsAddBtn").addEventListener("click", restaurants);
function restaurants() {
  document.querySelector(".restaurantsSection").innerHTML += "<table class='table table-striped table-responsive-stack'><tr><td><label>Restaurants Payments &nbsp;</label></td><td> <input type='text' name='Loan Name' placeholder='Name'></td><td> <input type='number' name='Amount' placeholder='Amount'></td><td><select id='currencyList'> <option value='USD' selected='selected' label='Indian rupee'>INR</option> <option value='IDR' label='Indonesian rupiah'>IDR</option> <option value='ILS' label='Israeli new shekel'>ILS</option> <option value='INR' label='Indian rupee'>INR</option> <option value='LKR' label='Sri Lankan rupee'>LKR</option> <option value='MRU' label='Mauritanian ouguiya'>MRU</option> <option value='MUR' label='Mauritian rupee'>MUR</option> <option value='MVR' label='Maldivian rufiyaa'>MVR</option> <option value='NZD' label='New Zealand dollar'>NZD</option> <option value='SGD' label='Singapore dollar'>SGD</option> <option value='USD' label='United States dollar'>USD</option> </select> </td><td><input type='date' name='Date'></td></tr></table>"; 
    
}



