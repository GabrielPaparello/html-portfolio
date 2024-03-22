//******************---------MODAL POPUP FUNCTION-------**************************// -->
  









//******************---------MODAL POPUP FUNCTION-------**************************// -->
//******************---------MODAL POPUP FUNCTION-------**************************// -->
  const popup = $('#popup');
  // window.onload = 
  function (){
    setTimeout(function(){
      popup.addClass("open-popup");
    }, 50)
  }
  // <!-- //******************---------MODAL POPUP FUNCTION-------**************************// -->


  // <!-- //******************---------MODAL POPUP CLOSE FUNCTION-------**************************// -->
  function closePopup(){
    var img = $('#popImg');
    var btnj = $('#btn');
    img.src = 'otacon1.png';
    btnj.click(function(){

      $('#popImg').attr("src", "otacon1.png");
      $('#btn').css({'color' : 'rgb(197, 144, 197', 'background-color': "rgb(86, 31, 89)"});      
      setTimeout(() => {
        closeclose();
      }, 2000);
  })}



  function closeclose(){
    popup.classAdd("open-popup")
    $("#headerContainer").css(display, visible);
    $("#about").css(display, visible);
    $("#about").css(display, flex);
    }
  
    // <!-- //******************---------MODAL POPUP CLOSE FUNCTION-------**************************// -->


    // <!-- //******************---------MODAL RESPONSIVE NAV-------**************************// -->

function dropdown(){
 var dropdown = document.getElementById('myDropdown')
dropdown.classList.toggle(".dropdown-show")

}



// <!-- //******************---------MODAL RESPONSIVE NAV-------**************************// -->

