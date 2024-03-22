




//******************---------MODAL POPUP FUNCTION-------**************************// -->
  const popup = $('#popup');
  window.onload = function (){
    setTimeout(function(){
      popup.classList.add("open-popup")
    }, 50)
  }
  // <!-- //******************---------MODAL POPUP FUNCTION-------**************************// -->


  // <!-- //******************---------MODAL POPUP CLOSE FUNCTION-------**************************// -->
  function closePopup(){
    var img = document.getElementById('popImg');
    img.src = 'otacon1.png';
    document.getElementById('btn').style.color = "rgb(197, 144, 197)";
    document.getElementById('btn').style.background = "rgb(86, 31, 89)";
    setTimeout(() => {
      closeclose();
    }, 2000);
  }



  function closeclose(){
    popup.classList.remove("open-popup")
    document.getElementById("headerContainer").style.visibility = "visible"
    document.getElementById("about").style.visibility = "visible"
    document.getElementById("about").style.display = "flex"
    }
  
    // <!-- //******************---------MODAL POPUP CLOSE FUNCTION-------**************************// -->


    // <!-- //******************---------MODAL RESPONSIVE NAV-------**************************// -->

function dropdown(){
 var dropdown = document.getElementById('myDropdown')
dropdown.classList.toggle(".dropdown-show")

}



// <!-- //******************---------MODAL RESPONSIVE NAV-------**************************// -->

