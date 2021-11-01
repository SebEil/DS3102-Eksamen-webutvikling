var unitedPlayers = [
    {
        name: "David De Gea",  age: "30", country: "Spania", position: "Målvakt"
    },
    {
        name: "Raphael Varane",  age: "28", country: "Frankrike", position: "Forsvarsspiller"
    },
    {
        name: "Harry Maguire",  age: "28", country: "Engcountry", position: "Forsvarsspiller"
    },
    {
        name: "Aaron Wan-Bissaka",  age: "23", country: "Engcountry", position: "Forsvarsspiller"
    },
    {
        name: "Luke Shaw",  age: "26", country: "Engcountry", position: "Forsvarsspiller"
    },
    {
        name: "Frederico Rodrigues Santos",  age: "28", country: "Brazil", position: "Midtbanespiller"
    },
    {
        name: "Paul Pogba",  age: "28", country: "France", position: "Midtbanespiller"
    },
    {
        name: "Marcus Rashford",  age: "24", country: "Engcountry", position: "Midtbanespiller"
    },
    {
        name: "Bruno Miguel Borges Fernandes",  age: "27", country: "Portugal", position: "Midtbanespiller"
    },
    {
        name: "Cristiano Ronaldo dos Santos Aveiro",  age: "36", country: "Portugal", position: "Angrepsspiller"
    },
    {
        name: "Edinson Cavani",  age: "34", country: "Uruguay", position: "Angrepsspiller"
    },
]

const playerContent = document.querySelector(".players-content")
const inputChoice = document.querySelector("#player-filter")
const searchInput = document.querySelector("#search-input")

unitedPlayers.forEach(player => {
    playerContent.innerHTML += `
        <article class="player-article">
            <h3>${player.name}</h3>
            <p>age: ${player.age}</p>
            <p>country: ${player.country}</p>
            <p>position: ${player.position}</p>
        </article>
    `
})

let showChoice = () => {
    playerContent.innerHTML = ""

    let searchPosition = unitedPlayers.filter(player => {
        return player.position === inputChoice.value
    })

    searchPosition.forEach(player => {
        playerContent.innerHTML += `
        <article class="player-article">
            <h3>${player.name}</h3>
            <p>age: ${player.age}</p>
            <p>country: ${player.country}</p>
            <p>position: ${player.position}</p>
        </article>
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
        <article class="player-article">
            <h3>${player.name}</h3>
            <p>age: ${player.age}</p>
            <p>country: ${player.country}</p>
            <p>position: ${player.position}</p>
        </article>
    `
    })
}

searchInput.addEventListener("input", showSearchInput)