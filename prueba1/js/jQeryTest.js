$(document).ready(function(){
   
    counter=1;
    $('#newElement').click(function(){
        var element = $("<li></li>").text("You added item: " + counter);
        element.addClass("display-4");
        $('#myList').append(element);
        counter ++;
    })

    $('#changeText').click(function(){
        $('#firstText').html($('#changed').val());
    });
    
    $('#changeColor').click(function(){
        
        $('#title1').addClass("text-danger");
        $('#title2').addClass("text-success");
    });
});