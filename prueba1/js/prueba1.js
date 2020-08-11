window.onload = function(){
  var newItem=document.getElementById("newElement");
  newItem.onclick=newItemFun;
  counter=1;
  function newItemFun(){
    var x=document.createElement('li');
    x.className='listItem';
    x.innerHTML='You added item mumber: ' + counter;
    document.getElementById('myList').appendChild(x);
    console.log(myList);
    counter++;
  }

  var newText=document.getElementById("changeText");
  newText.onclick=newTextFun;
  function newTextFun(){
    var li1=document.getElementById('firstText');
    var textToChange = document.getElementById('changed');
    li1.innerHTML=textToChange.value;
    console.log(textToChange);
  }

  var newColor=document.getElementById("changeColor");
  newColor.onclick=newColorFun;
  function newColorFun(){
    var titlesVar=document.getElementsByClassName('titles');
    titlesVar[0].style.color= 'red';
    titlesVar[1].style.color= 'green';
  }


}