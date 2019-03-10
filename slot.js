

var slotsList= new Array();

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

  if(foundIt === "false" && slot.name !=="" && slot.phoneNumber !=="")
  {
    slotsList.push(slot);
    document.getElementById(capturedBtnId).style.backgroundColor = "red";
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
