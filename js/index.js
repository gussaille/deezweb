$(document).ready(function(){

// BOUCLE POUR GENERER LES FAVORIS ALEATOIREMENT
    for (let i = 0; i < 1; i++) {
        let fav = JSON.parse(localStorage.getItem("favoris"))[i]; 
        console.log(fav);
        
        $('#randomFavorite').append("<div class=card id=card"+ [i]+"></div>");
        $("#card"+[i]).append("<div id=description" + [i] + " class=description></div>");
        $("#description"+[i]).append("<img src=" + fav.cover + " class=cover >");
        $("#description"+[i]).append("<div id=track" + [i] + " class=track></div>");
        $("#track"+[i]).append("<p class=song>" + fav.title + " </p>");
        $("#track"+[i]).append("<div id=credit" + [i] + " class=credit ></div>");
        $("#credit"+[i]).append("<p class=artist>" + fav.artist + " </p>");
        $("#credit"+[i]).append("<p class=album>" + fav.album + " </p>");
        $("#card"+[i]).append("<audio controls id=musicPlayer" + [i] + " class=musicPlayer src=" + fav.player + "></audio>");
        $("#card"+[i]).append("<button id=addFavorites" + [i] + " class=removeFavorites></button>"); 
        
        // FONCTION DE RETRAIT DU FAVORIS
        $('.removeFavorites').on("click", function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });
    }
});

