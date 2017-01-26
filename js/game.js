$(document).ready(function(){

        var contador = 0;
        var img_circle = "img/circle-icon.png";
        var img_x = "img/x-icon.png";
        var player1 = "";  
        var player2 = "";  

 

        swal({
            title: "Bienvenido a tic tac toe!",   
            text: "Jugador 1 escribe tu nombre :",   
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
                return false;
            }
            if(inputValue.length > 10){
                swal.showInputError("Espera! tu nombre solo puede tener un maximo de 10 caracteres...");  
                return false;
            }
             player1 = inputValue;
             $('.player1').text(player1);

            swal({
                title: "Bienvenido a tic tac toe!",   
                text: "Jugador 2 escribe tu nombre :",   
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
                    return false;
                }
                if(inputValue.length > 10){
                swal.showInputError("Espera! tu nombre solo puede tener un maximo de 10 caracteres...");  
                return false;
  } 

                   swal("Excelente! " + "Muy Bien!", "Empezemos...", "success");
                   player2 = inputValue;
                   $('.player2').text(player2);
            });
        });                 





            $('.conf').click(function(){
                    
            
            swal({
            title: "<small>Intrucciones</small>!",
            text: "El Jugador 1 :  Parte con la 'x'. <br> El Jugador 2 : Parte con el 'o'. ",
            html: true
            });
            
                
            });

            $('.btn-reset').click(function(){
                    
            $(".block img").remove();
            $('.block').removeClass('check-o');
            $('.block').removeClass('check-x');
            $('.block').css("pointer-events","auto");

            contador = 0;

                
            });








        $('.block').click(function() {
        

        contador = contador + 1;



        if (contador%2==0){
            
        
            if($(this).prop("id").length > 0){

            $(this).html("<img class='circle-icon' src='"+img_circle+"' height='145px' width='145px'>");
            $(this).addClass('check-o');
            $(this).css("pointer-events","none");
            
        
            /*  if($('#block1').hasClass('check-o') && $('#block2').hasClass('check-o') && $('#block3').hasClass('check-o') ){
                    
                    swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");


            }


                if($('#block4').hasClass('check-o') && $('#block5').hasClass('check-o') && $('#block6').hasClass('check-o') ){
                    
                swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");

            }


            
                if($('#block7').hasClass('check-o') && $('#block8').hasClass('check-o') && $('#block9').hasClass('check-o') ){
                    
                    
                    swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");

            }
            
                if($('#block1').hasClass('check-o') && $('#block4').hasClass('check-o') && $('#block7').hasClass('check-o') ){
                    
                    
                    swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");


            }

                if($('#block2').hasClass('check-o') && $('#block5').hasClass('check-o') && $('#block8').hasClass('check-o') ){
                    
                    
                swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");

            }

            
                if($('#block3').hasClass('check-o') && $('#block6').hasClass('check-o') && $('#block9').hasClass('check-o') ){
                    
                    
                    sswal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");

            }

                    if($('#block1').hasClass('check-o') && $('#block5').hasClass('check-o') && $('#block9').hasClass('check-o') ){
                    
                    
                    swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");


            } 


                    if($('#block3').hasClass('check-o') && $('#block5').hasClass('check-o') && $('#block7').hasClass('check-o') ){
                    
                    
                    swal("Genial!", "Ganaste!!!" + " " + player2 + "", "success");


            }*/

        
        
            
            }

        }else{
      
    

            if($(this).prop("id").length > 0){
            
        
            $(this).html ("<img class='x-icon' src='"+img_x+"' height='200px' width='150px'>");
            $(this).addClass('check-x');
            $(this).css("pointer-events","none");

            if($('#block1').hasClass('check-x') && $('#block2').hasClass('check-x') && $('#block3').hasClass('check-x') ){
                    
                    swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");
                


            }


       
                    if($('#block4').hasClass('check-x') && $('#block5').hasClass('check-x') && $('#block6').hasClass('check-x') ){
                        
                            swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");


                }


                
                    if($('#block7').hasClass('check-x') && $('#block8').hasClass('check-x') && $('#block9').hasClass('check-x') ){
                        
                            swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");


                }
                
                    if($('#block1').hasClass('check-x') && $('#block4').hasClass('check-x') && $('#block7').hasClass('check-x') ){
                        
                        swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");


                }

                    if($('#block2').hasClass('check-x') && $('#block5').hasClass('check-x') && $('#block8').hasClass('check-x') ){
                        
                        swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");


                }

                
                    if($('#block3').hasClass('check-x') && $('#block6').hasClass('check-x') && $('#block9').hasClass('check-x') ){
                        
                        swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");

                }

                        if($('#block1').hasClass('check-x') && $('#block5').hasClass('check-x') && $('#block9').hasClass('check-x') ){
                        
                        swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");


                } 


                        if($('#block3').hasClass('check-x') && $('#block5').hasClass('check-x') && $('#block7').hasClass('check-x') ){
                        
                        swal("Genial!", "Ganaste!!!" + " " + player1 + "", "success");

                }

           

       }   

}


});

   
});

