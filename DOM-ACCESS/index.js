//Read all the anchor tags
var $menuLinks = document.querySelectorAll(".menu-item > a");

//iterate on the list and register the call back
for(var i=0;i<$menuLinks.length;i++){
 
  var $anchor=$menuLinks[i];
  //console.log($anchor);
  $anchor.addEventListener("mouseover", infoDisplayPanelForElement);
  $anchor.addEventListener("mouseout", infoHidePanelForElement);
}
                           
function  infoDisplayPanelForElement(event){
    var $anchor=event.target;
    var $infoPanel=$anchor.parentNode.querySelector(".menu-item-info");
    $infoPanel.classList.add("is-visiable")
 }

function  infoHidePanelForElement(event){
    var $anchor=event.target;
    var $infoPanel=$anchor.parentNode.querySelector(".menu-item-info");
    $infoPanel.classList.remove("is-visiable")
 }

