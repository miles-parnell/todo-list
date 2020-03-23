$("li").click(function(){
    $(this).toggleClass("done");
});
$("span").click(function(e){
    $(this).parent().fadeOut();
    e.stopPropagation();
});