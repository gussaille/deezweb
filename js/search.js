$( "#form" ).submit(function(e) {
    e.preventDefault();

    var inputValue = $('#title').val();
    console.log(inputValue);

    $.ajax({
        url : "https://api.deezer.com/search?q=" + inputValue + "&output=jsonp",
        dataType : 'jsonp'
    }).done(function(musiques) {
        console.log(musiques);

            if(inputValue.length != 0){
            
            for (let i = 0; i < musiques.data.length; i++) {
                var cover = musiques.data[i].album.cover;
                    title = musiques.data[i].title;
                    artist = musiques.data[i].artist.name;
                    album =  musiques.data[i].album.title; 
                    player = musiques.data[i].preview;

                $("#tracklist").append("<div id=card"+ [i] + " class=card></div>");
                $("#card"+[i]).append("<div id=description"+[i]+ " class=description></div>");
                $("#description"+[i]).append("<img src="+ cover + " class=cover>");
                $("#description"+[i]).append("<div id=track"+ [i] + " class=track></div></div>");
                $("#track"+[i]).append("<p class=song>" + title + " </p>");
                $("#track"+[i]).append("<div id=credit"+ [i] + " class=credit ></div>");
                $("#credit"+[i]).append("<p class=artist>" + artist + " </p>");
                $("#credit"+[i]).append("<p class=album>" + album + " </p>");
                $("#card"+[i]).append("<audio controls id=musicPlayer"+[i]+ " class=musicPlayer src="+player+"></audio>");
                $("#card"+[i]).append("<button class=addFavorites> <i class=far fa-heart></i> Ajouter aux favoris</button>");
            }
        }
        else{
            $("#tracklist").html("Désolé, aucun résultat ne correspond à votre recherche...");
        }
    });
    $('#tracklist').html('').css('font-size', '30px');
});


//LOCAL STORAGE
