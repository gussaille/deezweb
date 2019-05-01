$( "#form" ).submit(function(e) {
    e.preventDefault();

    var inputValue = $('#title').val();  
    var select = $('#sort').find('option:selected');
    var selectValue = select.val();

    // LOOP SELECT VALUE
    switch (selectValue) {
        case 'song':
            selectValue = 'TRACK_ASC';
            break;
        case 'artist':
            selectValue = 'ARTIST_ASC';
            break;
        case 'album':
            selectValue = 'ALBUM_ASC';
            break;
        case 'popularity':
            selectValue = 'RATING_ASC';
            break;
        case 'rank':
            selectValue = 'RANKING';
            break;
        default:
            selectValue = 'TRACK_ASC';
    }

    $.ajax({
        url : "https://api.deezer.com/search?q=" + inputValue + "&order=" + selectValue +"&output=jsonp",
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

                    var favoriteSong = [
                        { id : musiques.data[i].id },
                        { cover : musiques.data[i].album.cover },
                        { title : musiques.data[i].title },
                        { artist : musiques.data[i].artist.name },
                        { album : musiques.data[i].album.title }
                    ];

                $("#tracklist").append("<div id=card"+ [i] + " class=card></div>");
                $("#card"+[i]).append("<div id=description"+[i]+ " class=description></div>");
                $("#description"+[i]).append("<img src="+ cover + " class=cover>");
                $("#description"+[i]).append("<div id=track"+ [i] + " class=track></div></div>");
                $("#track"+[i]).append("<p class=song>" + title + " </p>");
                $("#track"+[i]).append("<div id=credit"+ [i] + " class=credit ></div>");
                $("#credit"+[i]).append("<p class=artist>" + artist + " </p>");
                $("#credit"+[i]).append("<p class=album>" + album + " </p>");
                $("#card"+[i]).append("<audio controls id=musicPlayer"+[i]+ " class=musicPlayer src="+player+"></audio>");
                $("#card"+[i]).append("<button id=addFavorites"+ [i] +" class=addFavorites>Ajouter aux favoris</button>");
            }      
            
            $(".addFavorites").click(function(e) {
                e.preventDefault();
                $(this).text($(this).text() == 'Ajouter aux favoris' ? 'Retirer des favoris' : 'Ajouter aux favoris');   
                if($(this).text() == 'Retirer des favoris'){
                    $(this).css({
                        'backgroundColor': "transparent",
                        'color': 'rgba(223, 21, 21, 0.877)',
                        'border' : '1px solid rgba(223, 21, 21, 0.877)'
                    });
                }
                else{
                    $(this).css({
                        'backgroundColor': "rgba(223, 21, 21, 0.877)",
                        'color': 'white'
                    });
                }      
            // LOCAL STORAGE
                var favoriteSong_json = JSON.stringify(favoriteSong);
                localStorage.setItem("objet",favoriteSong_json); 
            });                      
        }
        else{
            $("#tracklist").html("Désolé, aucun résultat ne correspond à votre recherche...");
        }
    });
    $('#tracklist').html('').css('font-size', '30px');
});