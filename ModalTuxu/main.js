$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/cb4073ac-9473-4af7-9921-9e38120ab1f0',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#cards').append(
                '<div class="col-4 card column is-6-mobile is-3-tablet is-3-desktop" onclick="Modal(' + i + ')">' +
                ' <a href="#' + data[i]['id'] + '" rel="modal:open">' +
                '<img class="' + data[i]['stage'] + '" src="' + data[i]['pic'] + '" alt="' + data[i]['palestrante'] + '" height="150">' +
                ' <figcaption class="' + data[i]['stage'] + '">' +
                '  <p class="palestrante">' + data[i]['palestrante'] + '</p>' +
                ' <p class="modal-company">' + data[i]['company'] + '</p>' +
                ' </figcaption>' +
                ' </a>' +
                '  <br>' +
                ' </div>');

            i++;
        }
    }
});

function Modal(id) {
    $.ajax({
        type: 'GET',
        url: 'https://api.sheety.co/cb4073ac-9473-4af7-9921-9e38120ab1f0',
        dataType: 'json',
        success: function(data) {
            var j = id;
            $('.modaljson').html('<h3>' + data[j]['palestrante'] + '</h3><h5>' + data[j]['company'] + '</h5><br><p>' + data[j]['minibio'] + '</p><hr><h4>' + data[j]['title'] + '</h4><br><p>' + data[j]['description'] + '</p>');
        }
    });

}