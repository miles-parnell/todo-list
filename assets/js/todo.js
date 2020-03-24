//adds line through to todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//deletes todos
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//to add new todos
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        let newToDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i>   </span> " + newToDo + "</li>");
    }
});

$(".fa-minus-square").click(function(){
    $("input[type='text']").fadeToggle();
});