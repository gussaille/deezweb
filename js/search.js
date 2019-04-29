// document.getElementById('submit').addEventListener("click", function(e){
//     e.preventDefault();
//     var inputValue = document.getElementById('title').value;
//     console.log(inputValue);
// });

$.ajax({
    url : "https://api.deezer.com/search?q=eminem&output=jsonp",
    dataType : 'jsonp'
}).done(function(musiques) {


    console.log(musiques);
    document.querySelector('#artist').innerHTML =
        musiques.data.map(m => m.title).join('<br>');

});

