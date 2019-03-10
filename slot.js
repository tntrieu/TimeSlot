

var slotsList= new Array();
//generate time slots
$(document).ready(function(){
  //var para= $('<button/>', { id: 'foo', class: 'tclose'})
  var para = document.createElement("BUTTON", {"id":"btn3"});

  var text = document.createTextNode("11am - 12pm");
  para.appendChild(text);

  var element = document.getElementById("slotsDiv");
  element.appendChild(para);

  var setClass = document.createAttribute("class");       // Create a "class" attribute
  setClass.value = "btn modal-trigger"; 
  para.setAttributeNode(setClass); 

  para.setAttribute("data-target", "modal1");
  //para.id="btn3";
  para.setAttribute("id","btn3");

  


  //document.getElementById("slotsDiv").innerHTML = "<button data-target="modal1" class="btn modal-trigger" id="btn3">11am - 12pm</button>" 
})
//Modal Window
document.addEventListener('DOMContentLoaded', function() { 

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  
});

//capture the button who opens the modal window
var capturedBtnId = "";
$('.btn').click('click', function(){
  capturedBtnId=$(this).attr('id');

  //if slot already filled
  if(document.getElementById(capturedBtnId).style.backgroundColor === "red")
  {
    console.log(capturedBtnId);
    for(var i=0; i<slotsList.length;i++){
      if(slotsList[i].btnId == capturedBtnId)
      {
        console.log("found it!"+slotsList[i].name);
        document.getElementById("name").value = slotsList[i].name;
        document.getElementById("phone_number").value = slotsList[i].phoneNumber;
        break;
      }
    }
  }

})



//submit event
document.getElementById('ModalSubmit').addEventListener('click', function(){
  
  var slot = 
  {
    btnId: capturedBtnId,
    name: document.getElementById("name").value, 
    phoneNumber : document.getElementById("phone_number").value  
  }

  var foundIt= "false";
  for(var i=0; i<slotsList.length;i++){
    if(slotsList[i].btnId == capturedBtnId)
    {
      slotsList[i].name = document.getElementById("name").value;
      slotsList[i].phoneNumber = document.getElementById("phone_number").value;
      foundIt = "true";
      break;
    }
  }
  console.log(foundIt);
  if(foundIt === "false" && slot.name !=="" && slot.phoneNumber !=="")
  {
    slotsList.push(slot);
    document.getElementById(capturedBtnId).style.backgroundColor = "red";
  }


  for(var i=0; i<slotsList.length;i++)
  {
    console.log(slotsList[i]);
  }

  cleanModal();
});

//close modal event
document.getElementById('ModalClose').addEventListener('click', function(){
  cleanModal();
})

//modal clean
function cleanModal()
{
  document.getElementById('name').value = "";
  document.getElementById('phone_number').value = "";
}
