const customerName = document.querySelectorAll('.customer-name');
const customerId = document.querySelectorAll('.customer-id');
const slot = document.querySelectorAll('.slot');
const addQueue = document.querySelector('.add-queue');
const callNext = document.querySelector('.call-next');

let date = document.querySelector('.date');

// console.log(customerId)

//add event listener to the call-next button
callNext.addEventListener('click', moveToPlanner)

function moveToPlanner() {
  for(let i = 0; i < slot.length; i++) {
    // console.log(customerName[i].innerHTML)
    for(let j = 0; j < customerName.length; j++) {
      // console.log(slot[i]) 
      }
      if(slot[i].innerHTML == "") {
        slot[i].innerHTML = customerName[i].innerHTML;
        break;
        // if(slot[i].innerHTML !== customerName[0].innerHTML){
        //    slot[i].innerHTML = customerName[0].innerHTML
        // break;
        // }
    }
  }
  // console.log(customerName)
}