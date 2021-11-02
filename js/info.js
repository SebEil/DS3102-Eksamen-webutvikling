var unitedPlayers = [
    {
        name: "David De Gea",  age: "30", country: "Spania", position: "Målvakt", image: "/Img/ManchesterUnitedSpillere/deGea.png"
    },
    {
        name: "Raphael Varane",  age: "28", country: "Frankrike", position: "Forsvarsspiller", image: "/Img/ManchesterUnitedSpillere/varane.png"
    },
    {
        name: "Harry Maguire",  age: "28", country: "England", position: "Forsvarsspiller", image: "/Img/ManchesterUnitedSpillere/maguire.png"
    },
    {
        name: "Aaron Wan-Bissaka",  age: "23", country: "England", position: "Forsvarsspiller", image: "/Img/ManchesterUnitedSpillere/wan-bissaka.png"
    },
    {
        name: "Luke Shaw",  age: "26", country: "England", position: "Forsvarsspiller", image: "/Img/ManchesterUnitedSpillere/shaw.png"
    },
    {
        name: "Frederico Rodrigues Santos",  age: "28", country: "Brazil", position: "Midtbanespiller", image: "/Img/ManchesterUnitedSpillere/fred.png"
    },
    {
        name: "Paul Pogba",  age: "28", country: "France", position: "Midtbanespiller", image: "/Img/ManchesterUnitedSpillere/pogba.png"
    },
    {
        name: "Marcus Rashford",  age: "24", country: "England", position: "Midtbanespiller", image: "/Img/ManchesterUnitedSpillere/rashford.png"
    },
    {
        name: "Bruno Miguel Borges Fernandes",  age: "27", country: "Portugal", position: "Midtbanespiller", image: "/Img/ManchesterUnitedSpillere/bruno.png"
    },
    {
        name: "Cristiano Ronaldo dos Santos Aveiro",  age: "36", country: "Portugal", position: "Angrepsspiller", image: "/Img/ManchesterUnitedSpillere/ronaldo.png"
    },
    {
        name: "Edinson Cavani",  age: "34", country: "Uruguay", position: "Angrepsspiller", image: "/Img/ManchesterUnitedSpillere/cavani.png"
    },
]

const playerContent = document.querySelector(".players-content")
const inputChoice = document.querySelector("#player-filter")
const searchInput = document.querySelector("#search-input")

unitedPlayers.forEach(player => {
    playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="click">Klikk for å snu tilbake</p>
            </article>
        </section>
    `
})

let showChoice = () => {
    playerContent.innerHTML = ""

    let searchPosition = unitedPlayers.filter(player => {
        return player.position === inputChoice.value
    })

    searchPosition.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="click">Klikk for å snu tilbake</p>
            </article>
        </section>
    `
    })
}

inputChoice.addEventListener("input", showChoice)

let showSearchInput = () => {
    playerContent.innerHTML = ""

    let search = searchInput.value

    //filter funksjon
    const resultOfSearch = unitedPlayers.filter(player => {
        // returnere hele objekter som inneholder verdier som inkluderer searchet

        return Object.values(player).some(val => val.includes(search))
    })

    resultOfSearch.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="click">Klikk for å snu tilbake</p>
            </article>
        </section>
    `
    })
}

searchInput.addEventListener("input", showSearchInput)