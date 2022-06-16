
window.onload = () => {
    loadAlbums("style")
    loadArtist()
    loadQueen()
    likedSongs()
}

const loadArtist = async () => {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
            },
        }

        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=beautiful",
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const artists = data.slice(0, 8)
        artists.forEach((song) => {
            const popularAlbums = document.getElementById("sectionOne")
            popularAlbums.innerHTML += `<div class="col-3 mb-2 ">
                                            <a href="details.html?albumId=${song.album.id}"> <div class="artist-img d-inline-block"><img class="img-fluid" src="${song.artist.picture_small}" width="100%"></img>
                                            </div>
                                            <div class="artist-name d-inline-block"><span>${song.artist.name}</span></div></a>
                                        </div>`

        })


    } catch (err) {
        console.log(err)

    };
}




const loadAlbums = async (value) => {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
            },
        }

        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + value,
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const displaySongs = data.slice(0, 6)
        displaySongs.forEach((song) => {
            const popularAlbums = document.getElementById("popularAlbums")
            popularAlbums.innerHTML += `<div class="col-2 mb-2">
            <a href="details.html?albumId=${song.album.id}"><img class="img-fluid" src="${song.album.cover_small}" width="100%"></img>
        <span>${song.album.title}</span></a>
    </div>`

        })


    } catch (err) {
        console.log(err)

    };
}


const loadQueen = async () => {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
            },
        }

        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=maroon5",
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const displaySongs = data.slice(0, 6)
        displaySongs.forEach((song) => {
            const popularAlbums = document.getElementById("sectionTwo")
            popularAlbums.innerHTML += `<div class="col-2 mb-2">
            <a href="details.html?albumId=${song.album.id}"><img class="img-fluid" src="${song.album.cover_small}" width="100%"></img>
        <span>${song.album.title}</span></a>
    </div>`

        })


    } catch (err) {
        console.log(err)

    };
}


const likedSongs = async () => {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
            },
        }

        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=all",
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const displaySongs = data.slice(0, 12)
        displaySongs.forEach((song) => {
            const popularAlbums = document.getElementById("likedSongs")
            popularAlbums.innerHTML += `
            <a href="details.html?albumId=${song.album.id}"><span><p>${song.title_short}</p></span></a>`

        })


    } catch (err) {
        console.log(err)

    };
}

const searchSong = () => {
    const searchInput = document.querySelector("input")
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
    } else {
        searchInput.style.display = "none";
    }

}