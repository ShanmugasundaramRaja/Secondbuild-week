
window.onload = () => {
    loadAlbums("all")
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
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=all",
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const artists = data.slice(0, 8)
        artists.forEach((song) => {
            const popularAlbums = document.getElementById("sectionOne")
            popularAlbums.innerHTML += `<div class="col-3 mb-2 d-flex">
                                            <div class="artist-img"><img class="img-fluid" src="${song.artist.picture_small}" width="100%"></img>
                                            </div>
                                            <div class="artist-name"><span>${song.artist.name}</span></div>
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
        <img class="img-fluid" src="${song.album.cover_small}" width="100%"></img>
        <span>${song.album.title}</span>
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
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const displaySongs = data.slice(0, 6)
        displaySongs.forEach((song) => {
            const popularAlbums = document.getElementById("sectionTwo")
            popularAlbums.innerHTML += `<div class="col-2 mb-2">
        <img class="img-fluid" src="${song.album.cover_small}" width="100%"></img>
        <span>${song.album.title}</span>
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
            <span><p>${song.title_short}</p></span>`

        })


    } catch (err) {
        console.log(err)

    };
}