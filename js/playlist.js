let playlist = []
const songTemplate = document.getElementById("song-template");
const addPlaylist = document.getElementById("playlist");
const renderPlaylist = () => {
    playlist.reverse().forEach(item => {
        let song = songTemplate.content.cloneNode(true);
        song.getElementById("song-image").src = item.image
        song.getElementById("song-name").textContent = item.title
        song.getElementById("song-singer").textContent = item.user
        song.getElementById("song-audio").src = item.audio
        addPlaylist.appendChild(song);
    });

};





const getPlaylist = () => {
    fetch("https://65225f4af43b179384146e0d.mockapi.io/products").then((res) => {
        return res.json()
    }).then((data) => {
        playlist = data
        renderPlaylist();
    })
};
getPlaylist();




