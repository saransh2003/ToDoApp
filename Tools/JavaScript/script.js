//Check off Specific Todo By Clicking
$("ul").on("click", "li", function(){
  //*************************************************************
  // if ($(this).css("color") === "rgb(128, 128, 128)"){
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });  
  // } else {
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }
  //*************************************************************
  // Same as Above code with the help of CSS
  $(this).toggleClass("completed")
});

//Click on 'X' to delete To-Do(s)
$("ul").on("click", "span", function(event){  // ("li ----> span ")*("parent()" use to reffer to li(or Parent) from span(or Child))*
  $(this).parent().fadeOut(500, function(){ // Here, this represent "span"
      $(this).remove();                   // Here, this represent "li" parent class of "span"
  });  
  event.stopPropagation();  //It Stops Parent Properties to Propagate to Child. (".stopPropagation()")---> jQuery Function
});

//Input From text area
$("input[type = 'text']").keypress(function(event){
  if (event.which === 13){
    //Getting new todo in varible 'todoText'
    var todoText = $(this).val();
    $(this).val("");
    //Creating new li now
    $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i> </span> " + todoText + "</li>");
  }
});

$(".fa-plus-square").on("click", function(){
  $("input[type = 'text']").fadeToggle(500);
});
























