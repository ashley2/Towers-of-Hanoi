'use strict';

$(document).ready(init);

function init() {
  console.log('ready!');
  $(".container").on('click', moveBox);
  $(".container").on('click', selectPiece);

} 

var boxClicked = false;

function moveBox(div){
  var opposingChild = $(this).children().first()
  weight2 = parseInt(opposingChild.text())
  console.log("weight 2:" ,weight2)
  if ($('#box3').children().length === 3){
    console.log("winner");
    return;
  }

  if(weight2 === NaN){
    $('.selected').appendTo($(this));
  } else if(weight1 > weight2){
    return;
  } else if(weight2 >= weight1) {
    $(this).prepend($('.selected'))
  } else {$('.selected').appendTo($(this))}

}



var weight1 = ""
var weight2 = ""
function selectPiece(div){

  console.log( $(this).children().first() );
  var $target = $(this).children().first();
  weight1 = parseInt($target.text());
  console.log(weight1)
  var isSelected = $target.hasClass('selected');
  
  if ($("#box3").children().length === 3){
    console.log("winner");
    return;
  }

    if(isSelected){ 
      $target.removeClass('selected');
      boxClicked = false
    } else {
      $('.selected').removeClass('selected');
      $target.addClass('selected'); 
      boxClicked = true 
    }
  }





// var $selected = $("#box2").detach().removeClass('selected'),
// $this.append($selected));


// function diskClicked(event) {
//   var $target = $(event.target);

//  




