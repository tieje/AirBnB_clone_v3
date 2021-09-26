$(document).ready(function () {
  let amenities = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
      if (response.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  $.ajax({
    type: 'POST',
    url = 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: function (response) {
      const title = "<article><div class='title_box'><h2></h2><div class='price_by_night'></div></div>";
      const info = "<div class='information'><div class='max_guest'></div><div class='number_rooms'></div>";
      const baths = "<div class='number_bathrooms'></div></div><div class='description'></div></article>";
      const article = title + info + baths;
      response.forEach((val, index) => {
        $('section.places').append(article);
        $('.title_box h2').last().html(val.name);
        $('.price_by_night').last().html('$' + val.price_by_night);
        $('.max_guest').last().html(val.max_guest);
        $('.number_rooms').last().html(val.number_rooms);
        $('.number_bathrooms').last().html(val.number_bathrooms);
        $('.description').last().html(val.description);
      });
    }
  });
});
