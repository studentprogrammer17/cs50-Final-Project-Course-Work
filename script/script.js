
// Отображение описания страны  //

$(document).ready(function(){
$('.part').hover(
    function(){
        $('.description').html($(this).attr("description-data"));
        $('.description').fadeIn();
    },
    function(){
        $('.description').fadeOut(3000);
    }
)
})






//  Один клик - Закрашивает в синее // два клика - Закрашивает в белоеы //

function functionclick(id){
var id =  document.getElementById(id);
id.setAttribute('style', 'fill: #000080');
$(id).click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     id.setAttribute('style', 'fill: white');
  } else {
     id.setAttribute('style', 'fill: #000080');
  }
  $(this).data("clicks", !clicks);
});
}



