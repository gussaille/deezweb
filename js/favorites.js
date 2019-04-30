var trackCard  = {
    cover : musiques.data[i].album.cover,
    title : musiques.data[i].title,
    artist : musiques.data[i].artist.name,
    album : musiques.data[i].album.title
};
var trackCard_json = JSON.stringify(trackCard);
localStorage.setItem("objet",trackCard_json);