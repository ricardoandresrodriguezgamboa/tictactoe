$(document).ready(function(){

var contador = 0;
var img_circle = "img/circle-icon.png";
var img_x = "img/x-icon.png";


if($('#block1') == null){
  alert('hola');
}
  

swal({
  title: "Bienvenido a tic tac toe!",
  text: "Jugador 1 escribe tu nombre:",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  animation: "slide-from-top",
  inputPlaceholder: "Nombre"
},
function(inputValue){
  if (inputValue === false)
    
      return false;
  
  if (inputValue === "") {
    swal.showInputError("Vamos! tienes que escribir algo...");
    return false
  }
  
    swal("Excelente!", "Empezemos!", "success")
 
  
});


 



$('.conf').click(function(){
           
 
  swal({
  title: "<small>Intrucciones</small>!",
  text: "El Jugador 1 :  Parte con la 'x'. <br> El Jugador 2 : Parte con el 'o'. ",
  html: true
});
 
     
});







$('.block').click(function() {
 

contador = contador + 1;



if (contador%2==0){
     
   
     if($(this).prop("id").length > 0){

      $(this).html("<img class='circle-icon' src='"+img_circle+"' height='145px' width='145px'>");
      $(this).addClass('check-o');
      $(this).css("pointer-events","none");
         
  
      
     }

}else{
      
    

     if($(this).prop("id").length > 0){
       
 
       $(this).html ("<img class='x-icon' src='"+img_x+"' height='200px' width='150px'>");
       $(this).addClass('check-x');
       $(this).css("pointer-events","none");

    
   

       }   

}


});

   
});







    
    /*var block1 =  document.getElementById('block1');
    var block2 =  document.getElementById('block2');
    var block3 =  document.getElementById('block3');
    var block4 =  document.getElementById('block4');
    var block5 =  document.getElementById('block5');
    var block6 =  document.getElementById('block6');
    var block7 =  document.getElementById('block7');
    var block8 =  document.getElementById('block8');
    var block9 =  document.getElementById('block9');



  alert("el numero es impar");
  
  if(block1.innerHTML == '1'){
        $("#block1").text('x');
  }
   if(block2.innerHTML == '2'){
        $("#block2").text('x');
  }
   if(block3.innerHTML == '3'){
        $("#block3").text('x');
  }
   if(block4.innerHTML == '4'){
        $("#block4").text('x');
  }
   if(block5.innerHTML == '5'){
        $("#block5").text('x');
  }
   if(block6.innerHTML == '6'){
        $("#block6").text('x');
  }
   
   if(block7.innerHTML == '7'){
        $("#block7").text('x');
  }

   if(block8.innerHTML == '8'){
        $("#block8").text('x');
  }

   if(block9.innerHTML == '9'){
        $("#block9").text('x');
  } */


