var billAmt = document.querySelector("#bill-amount");
var cashAmt = document.querySelector("#cash-amount");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");
var noOfNotes = document.querySelectorAll(".notes");

var note = [2000,500,200,100,50,20,10,5,1];

function clickHandler() {
  var bill = Number(billAmt.value);
  var cash = Number(cashAmt.value);
  hideMessage();
  if(bill>0) {
    if(cash>=bill){
      calcChange(bill,cash);
    } else {
      showMessage("Invalid cash amount");
    }
  } else {
    showMessage("Invalid bill amount");
  }
}

function hideMessage() {
  outputDiv.style.display = "none";
}

function showMessage(msg) {
  outputDiv.style.display = "block";
  outputDiv.innerText = msg;
}

function calcChange(bill,cash){
  var netValue = cash-bill;
  for(var i=0; i<noOfNotes.length; i++){
    var remainingAmt = netValue%note[i];
    var notes = Math.trunc(netValue/note[i]);
    netValue = remainingAmt;
    noOfNotes[i].innerText = notes;
  }

}

btnCheck.addEventListener("click",clickHandler);