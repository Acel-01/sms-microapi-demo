
function openPage(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("defaultOpen", "tablinks");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className = "defaultOpen tablinks";
  }

// Get the element with id="defaultOpen" and click on it
document.getElementById("default1").click();


function bolden(evt){
    var lin;

    lin = document.getElementsByClassName("lin");
    for (i = 0; i < lin.length; i++) {
      lin[i].className = lin[i].className.replace("act", "lin");
    }

    evt.currentTarget.className = "act lin";
}
document.getElementById("lik").click();



/*               */


function myFunction() {
    var element = document.getElementById("myDropdown");
    element.classList.add("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.topp')) {
var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
    }
}
}