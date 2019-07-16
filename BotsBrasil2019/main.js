$(".nav-links a").click(function() {
    $("#nav-check").prop('checked', false);
    $(".btn-close").css({ "display": "none" });
});
$(".nav-btn").click(function() {
    $(".btn-close").css({ "display": "block" });
});
$(".btn-close").click(function() {
    $("#nav-check").prop('checked', false);
    $(".btn-close").css({ "display": "none" });
});


$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/cb4073ac-9473-4af7-9921-9e38120ab1f0',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#cards').append(
                '<div class="col-4 card column is-6-mobile is-3-tablet is-3-desktop">' +
                ' <a href="#' + data[i]['id'] + '" rel="modal:open">' +
                '<img class="' + data[i]['stage'] + '" src="' + data[i]['pic'] + '" alt="' + data[i]['palestrante'] + '" height="150">' +
                ' <figcaption class="' + data[i]['stage'] + '">' +
                '  <p class="palestrante">' + data[i]['palestrante'] + '</p>' +
                ' <p class="modal-company">' + data[i]['company'] + '</p>' +
                ' </figcaption>' +
                ' </a>' +
                '  <br>' +
                ' </div><div id="' + data[i]['id'] + '" class="modal ' + data[i]['stage'] + '"><h3>' + data[i]['palestrante'] + '</h3><h5>' + data[i]['company'] + '</h5><br><p>' + data[i]['minibio'] + '</p><hr><h4>' + data[i]['title'] + '</h4><br><p>' + data[i]['description'] + '</p> </div>');

            i++;
        }
    }
});