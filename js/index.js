$.ajax({
    url : "https://api.deezer.com/search?q=eminem&output=jsonp",
    dataType : 'jsonp'
}).done(function(musiques) {
  
    console.log(musiques);
    document.querySelector('#cover').innerHTML =
        musiques.data.map(m => m.artist.name).join('<br>');
    document.querySelector('#artist').innerHTML =
        musiques.data.map(m => m.artist.name).join('<br>');
    document.querySelector('#title').innerHTML =
    musiques.data.map(m => m.title).join('<br>');
});