var slotsList= new Array();

$(document).ready(function(){
  
  var para = document.createElement("BUTTON", {"id":"btn3"});

  var text = document.createTextNode("11am - 12pm");
  para.appendChild(text);

  var element = document.getElementById("slotsDiv");
  element.appendChild(para);

  para.setAttribute("data-target", "modal1");

  var setClass = document.createAttribute("class");     
  setClass.value = "btn modal-trigger"; 
  para.setAttributeNode(setClass); 


  para.setAttribute("id","btn3");
})


//Modal Window
document.addEventListener('DOMContentLoaded', function() { 

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  
});

//capture the button who opens the modal window

var capturedBtnId = "";
document.getElementById("slotsDiv").addEventListener("click", someFunction);

function someFunction(event) {
  var capturedBtnId=event.target.id;
  console.log(event.target.id);
  console.log(capturedBtnId);
  //if slot already filled
  if(document.getElementById("slotsDiv").style.backgroundColor === "red")
  {
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
}


//submit event
// document.getElementById('ModalSubmit').addEventListener('click', function(){
  
//   var slot = 
//   {
//     btnId:document.getElementById("ModalSubmit").value,
//     name: document.getElementById("name").value, 
//     phoneNumber : document.getElementById("phone_number").value  
//   }

//   var foundIt= "false";
//   for(var i=0; i<slotsList.length;i++){
//     if(slotsList[i].btnId == capturedBtnId)
//     {
//       slotsList[i].name = document.getElementById("name").value;
//       slotsList[i].phoneNumber = document.getElementById("phone_number").value;
//       foundIt = "true";
//       break;
//     }
//   }
//   console.log(foundIt);
//   if(foundIt === "false" && slot.name !=="" && slot.phoneNumber !=="")
//   {
//     slotsList.push(slot);
//     document.getElementById("slotsDiv").style.backgroundColor = "red";
//   }


//   for(var i=0; i<slotsList.length;i++)
//   {
//     console.log(slotsList[i]);
//   }

//   cleanModal();
// });

// //close modal event
// document.getElementById('ModalClose').addEventListener('click', function(){
//   cleanModal();
// })

// //modal clean
// function cleanModal()
// {
//   document.getElementById('name').value = "";
//   document.getElementById('phone_number').value = "";
// } 
