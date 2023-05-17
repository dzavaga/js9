/*1
$(document).ready(function () {
  $("h2.head").each(function() {
    $(this).css("background-color", "green");
               $(this).find(".inner").each(function() {
      $(this).css("font-size", "35px");
    });
  });
});*/
//2
/*
$(document).ready(function() {
  $('a[href^="https://"]').each(function() {
    $(this).attr('target', '_blank');
  });
});*/
//3
/*
$(document).ready(function() {
  $('h3').each(function() {
    let nextDiv = $(this).next('div');
    
    $(this).before(nextDiv);
  });
});*/

$(document).ready(function() {
      let checkboxes = $('input[type="checkbox"]');
      checkboxes.change(function() {
        let checkedCount = checkboxes.filter(':checked').length;
        if (checkedCount === 3) {
          checkboxes.attr('disabled', 'disabled');
        }
      });
    });