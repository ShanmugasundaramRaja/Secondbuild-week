
window.onload = () => {
    loadArtist("rain")
    loadAlbums("Madonna")
    loadQueen("queen")
    likedSongs("Hasley")
}
const options = {
    method: "GET",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
    },
}
const loadArtist = async (query) => {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
            },
        }

        const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
            options
        );

        const songs = await response.json();
        console.log(songs)
        const { data } = songs
        const artists = data.slice(0, 8)
        artists.forEach((song) => {
            const popularAlbums = document.getElementById("sectionOne")
            popularAlbums.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <a href="details.html?albumId=${song.album.id}"> <div class="artist-img d-inline-block"><img class="img-fluid" src="${song.artist.picture_medium}" width="100%"></img>
                                            </div>
                                            <div class="artist-name d-inline-block"><span><b>${song.artist.name}</b></span></div></a>
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
            const popularAlbums = document.getElementById("recent")
            popularAlbums.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-2 mb-4">
            <a href="details.html?albumId=${song.album.id}"><img class="img-fluid" src="${song.album.cover_medium}" width="100%"></img>
        <span>${song.album.title}</span></a>
    </div>`

        })


    } catch (err) {
        console.log(err)

    };
}


const loadQueen = async (value) => {
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
            const popularAlbums = document.getElementById("sectionTwo")
            popularAlbums.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-2 mb-4">
            <a href="details.html?albumId=${song.album.id}"><img class="img-fluid" src="${song.album.cover_medium}" width="100%"></img>
        <span>${song.album.title}</span></a>
    </div>`

        })


    } catch (err) {
        console.log(err)

    };
}


const likedSongs = async (value) => {
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


// Search 


const searchInput = document.querySelector("input")
const searchbutton = document.querySelector(".search-btn")

const searchSong = async () => {
    //search bar toggle
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
    } else {
        searchInput.style.display = "none";
    }
}


const searchAlbum = async (value) => {
    const grid = document.getElementById("container")
    grid.innerHTML = ""
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
        const artists = data.slice(0, 12)
        const popularAlbums = document.getElementById("container")
        popularAlbums.innerHTML = `<div class="col-12"><h2>${value} Albums</h2></div>`
        artists.forEach((song) => {
            popularAlbums.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-2 mb-2">
            <a href="details.html?albumId=${song.album.id}"><img class="img-fluid" src="${song.album.cover_medium}" width="100%"></img>
        <span>${song.album.title}</span></a>
    </div>`

        })
    } catch (err) {
        console.log(err)

    };
}

const artistList = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=rock', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        console.log(response.data[0].artist.name)
        let parent = document.getElementById("recommend")
        for (let i = 0; i < response.data.length; i++) {
            if (i < 15) {
                let kid = document.createElement('div')
                kid.innerHTML = `<a href="./artist.html?artistId=${response.data[i].artist.id}">${response.data[i].artist.name}<a>`
                kid.style = "color:#BBBCBE; font-size: 15px"
                parent.appendChild(kid)
            }
            else { break }
        }
    })
    .catch(err => console.error(err));
}
artistList()



//Search Song

/* const findSong = (userEvent) => {
    if (userEvent.type === "click") {
        searchSong(input.value)
    }
}
searchbutton.addEventListener("click", searchSong) */

//



