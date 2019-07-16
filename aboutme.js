/*
function toggleSection(id){
  //first get element specifed by name
  var elt = document.getElementByID(id)
  //if the element is hidden, show it
  if (elt.style.visibility === 'hidden'){
    elt.visibility= 'visible';
  }else{
    elt.style.visibility === 'visible'
  }
  }
  //if the element is shown, hide it
}
*/
function ColorChange() {
  if (document.body.style.backgroundColor === "pink"){
    document.body.style.backgroundColor = "PowderBlue";
    document.body.style.color= "Black";
    document.getElementById('h1').style.color = "Black";
  }else{
    document.body.style.backgroundColor = "Pink";
    document.body.style.color = "MediumVioletRed";
    document.getElementById('h1').style.color = "HotPink";
  }
}





//<center><button type= 'button' onclick="toggleSection('id')">Hide image</button></center>
