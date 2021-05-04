const customerName = document.querySelectorAll('.customer-name');
const customerId = document.querySelectorAll('.customer-id');
const slot = document.querySelectorAll('.slot');
const addQueue = document.querySelector('.add-queue');
const callNext = document.querySelector('.call-next');

let date = document.querySelector('.date');

//add event listener to the call-next button
callNext.addEventListener('click', moveToPlanner)

function moveToPlanner() {
  for(let i = 0; i < slot.length; i++) {
    for(let j = 0; j < customerName.length; j++) { 
      }
      if(slot[i].innerHTML == "") {
        slot[i].innerHTML = customerName[i].innerHTML;
        break;
    }
  }
}