
$( "#form" ).submit(function( event ) {
    event.preventDefault();
    var inputValue = $('#title').value;
    //     console.log(inputValue);
    $.ajax({
        url : "https://api.deezer.com/search?q=" + inputValue + "&output=jsonp",
        dataType : 'jsonp'
    }).done(function(musiques) {
        console.log(musiques);

        document.querySelector('#cover').innerHTML =
            musiques.data.map(m => m.album.cover).join('<br>');
        document.querySelector('#artist').innerHTML =
            musiques.data.map(m => m.artist.name).join('<br>');
        document.querySelector('#song').innerHTML =
        musiques.data.map(m => m.title).join('<br>');
    });
});