$(document).ready(function(){
   
    counter=1;
    $('#newElement').click(function(){
        var element = $("<li></li>").text("You added item: " + counter);
        $('#myList').append(element);
        counter ++;
    })

    $('#changeText').click(function(){
        $('#firstText').html($('#changed').val());
    });
    
    $('#changeColor').click(function(){
        var titulos = $('.titles');
        titulos[0].style.color= 'red';
        titulos[1].style.color= 'green';
    });
});