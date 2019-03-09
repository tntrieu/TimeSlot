

var slotsList= new Array();

function TimeSlot(_id, _time, _personName, _phoneNumber) {
  var id = _id;
  var time = _time;
  var personName = _personName;
  var phoneNumber = _phoneNumber;

  this.addToSlotsList = function(slot){
    slotsList.Push(slot);
  }

  this.getName = function() {
    return name;
  };

  this.getPhoneNumber = function() {
    return phoneNumber;
  };

  this.FindInfoById = function(id){
    var returnSlot = new TimeSlot();
    console.log(slotsList[0]);
    /*foreach(object slot in slotsList)
    {
      if(slot.id === id)
      {
        returnSlot.personName = slot.getName();
        returnSlot.phoneNumber = slot.getPhoneNumber();
      }
    }*/
    return returnSlot();
  }
}

//Modal Window
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  
});
/*
document.addEventListener('click', function(){
  instance.open();
})
*/
document.getElementById('ModalSubmit').addEventListener('click', function(){
  var triggerElement = $(event.relatedTarget);
  console.log(triggerElement);
  var slot = 
  {
    time: "9am-10am",
    name: document.getElementById("name").value, 
    phoneNumber : document.getElementById("phone_number").value
  
  }
  slotsList.push(slot);
  document.getElementById('btn1').style.backgroundColor = "red";

  console.log(slotsList[0]);
});

//var instance = M.Modal.getInstance(elem);
//instance.open();