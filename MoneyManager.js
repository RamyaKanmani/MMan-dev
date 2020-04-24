//*************** */ Saving section Code for Adding extra fields (+) Start*************************

document.getElementById("myBtn").addEventListener("click", savingsLIC);
var licId= 1;
function savingsLIC() {
  var str = "<table id="+ "'" + licId + "'" + "class='table table-striped table-responsive-stack'> <tr><td> <label>LIC &nbsp;&nbsp;</label></td><td><input type='text' placeholder='Name'></td><td><input type='number' placeholder='Amount'></input></td><td><select class='currency-selector'><option selected>Select Currency</option> <option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option> <option>CAD</option><option>AUD</option><option>INR</option></select></td><td><input type='date'></td> </tr></table> ";
  document.querySelector(".demo").innerHTML += str;
  licId+=1;
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
//*************** */ Savings section Code for Adding extra fields (+) End*************************



//******************************************* */ Expenses section Start******************************************* */

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
//******************************************* */ Expenses section End ******************************************* */

////////////////////////////////////////// Displayning Month in Header Section Start//////////////////////////

function myFunction() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("month").innerHTML = n;
}

////////////////////////////////////////Displayning Month in Header Section End///////////////////////

///////////////////////// Fetching Data from Earning and Savings Section Start///////////////////////

function myFunction1(x) {
  if(x.elements[2].value === "Select Currency") {
      x.elements[2].value = "INR"
  }
  var result0 = "Your Salary " +x.elements[3].value + " is " +x.elements[1].value + " " +x.elements[2].value ;
  return result0;
}

function myFunction2(x) {
  if(x.elements[2].value === "Select Currency") {
    x.elements[2].value = "INR"
  }
  // var x = document.getElementById("others_id");
  var result1 = "Your Salary " +x.elements[3].value + " is " +x.elements[1].value + " " +x.elements[2].value ;
  return result1;
    
}

function myFunction3(x) {
  if(x.elements[2].value === "Select Currency") {
    x.elements[2].value = "INR"
}
  // var x = document.getElementById("lic_id");
  var result2 = "Your Investments on LIC is " +x.elements[1].value +x.elements[2].value;
  return result2;
    
}

function myFunction4(x) {
  if(x.elements[2].value === "Select Currency") {
    x.elements[2].value = "INR"
}
  // var x = document.getElementById("fd_id");
  var result3 = "Your Investments on FD is " +x.elements[1].value +x.elements[2].value;
  return result3;
    
}
function myFunction5(x) {

  if(x.elements[2].value === "Select Currency") {
    x.elements[2].value = "INR"
}
  // var x = document.getElementById("rd_id");
  var result4 = "Your Investments on FD is " +x.elements[1].value +x.elements[2].value;
  return result4;
    
}
function myFunction6(x) {

  if(x.elements[2].value === "Select Currency") {
    x.elements[2].value = "INR"
}
  // var x = document.getElementById("others1_id");
  var result5 = "Your Investments on FD is " +x.elements[1].value +x.elements[2].value;
  return result5;
    
}

function result()
{
    var finalString = "";   

    var salary_id = document.getElementById("salary_id");
    if(salary_id.elements[1].value.length !== 0) {
        finalString += myFunction1(salary_id);
    }

    // finalString += "\n";

    var others_id = document.getElementById("others_id");
    if(others_id.elements[1].value.length !== 0) {
        finalString += myFunction2(others_id);
    }

    // finalString += "\n";

    var lic_id = document.getElementById("lic_id");
    if(lic_id.elements[1].value.length !== 0) {
        finalString += myFunction3(lic_id);
    }


    var fd_id = document.getElementById("fd_id");
    if(fd_id.elements[1].value.length !== 0) {
        finalString += myFunction4(fd_id);
    }

    var rd_id = document.getElementById("rd_id");
    if(rd_id.elements[1].value.length !== 0) {
        finalString += myFunction3(rd_id);
    }

    var others1_id = document.getElementById("others1_id");
    if(others1_id.elements[1].value.length !== 0) {
        finalString += myFunction2(others1_id);
    }

    
    //finalString += "\n";
    //finalString += myFunction2();
    //finalString += "\n";
    //finalString += myFunction3();
    //finalString += "\n";
    //finalString += myFunction4();
    //finalString += "\n";
    //finalString += myFunction5();
    //finalString += "\n";
    //finalString += myFunction6();
    if(finalString === "")
        alert("Nothing to show");
    else 
        alert(finalString);
}

///////////////////////// Fetching Data from Earning and Savings Section End///////////////////////










         
		 
        

       

        
    

