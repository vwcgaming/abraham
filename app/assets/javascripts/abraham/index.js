//= require js.cookie
//= require tether

$(document).on('turbolinks:before-cache', function() {
    // Remove visible product tours
    $(".shepherd-step").remove();
});
