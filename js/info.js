var unitedPlayers = [
    {
        Navn: "David De Gea",  Alder: "30", Land: "Spain", posisjon: "Målvakt"
    },
    {
        Navn: "Raphael Varane",  Alder: "28", Land: "France", position: "Defender"
    },
    {
        Navn: "Harry Maguire",  Alder: "28", Land: "England", position: "Defender"
    },
    {
        Navn: "Aaron Wan-Bissaka",  Alder: "23", from: "England", position: "Defender"
    },
    {
        Navn: "Luke Shaw",  Alder: "26", from: "England", position: "Defender"
    },
    {
        Navn: "Frederico Rodrigues Santos",  Alder: "28", from: "Brazil", position: "Midfielder"
    },
    {
        Navn: "Paul Pogba",  Alder: "28", from: "France", position: "Midfielder"
    },
    {
        Navn: "Marcus Rashford",  Alder: "24", from: "England", position: "Midfielder"
    },
    {
        Navn: "Bruno Miguel Borges Fernandes",  Alder: "27", from: "Portugal", position: "Midfielder"
    },
    {
        Navn: "Cristiano Ronaldo dos Santos Aveiro",  Alder: "36", from: "Portugal", position: "Attacker"
    },
    {
        Navn: "Edinson Cavani",  Alder: "34", from: "Uruguay", position: "Attacker"
    },
]

const playersContent = document.querySelector(".players-content")
const selectInput = document.querySelector("#player-filter")
const wordInput = document.querySelector("#search-input")

unitedPlayers.forEach(player => {
    console.log(player)
    playersContent.innerHTML += `
        <article class="players-article">
            <h3>${player.name}</h3>
            <p>Age: ${player.age}</p>
            <p>From: ${player.from}</p>
            <p>Position: ${player.position}</p>
        </article>
    `
})

let showSelected = () => {
    playersContent.innerHTML = ""

    let positionSearchPlayers = unitedPlayers.filter(player => {
        return player.position === selectInput.value
    })

    positionSearchPlayers.forEach(player => {
        playersContent.innerHTML += `
        <article class="players-article">
            <h3>${player.name}</h3>
            <p>Age: ${player.age}</p>
            <p>From: ${player.from}</p>
            <p>Position: ${player.position}</p>
        </article>
    `
    })
}

selectInput.addEventListener("input", showSelected)

let showSearched = () => {
    playersContent.innerHTML = ""

    let searchWord = wordInput.value

    //filter funksjon
    const searchResult = unitedPlayers.filter(player => {
        // returnere hele objekter som inneholder verdier som inkluderer søkeordet

        return Object.values(player).some(val => val.includes(searchWord))
    })

    searchResult.forEach(player => {
        playersContent.innerHTML += `
        <article class="players-article">
            <h3>${player.name}</h3>
            <p>Age: ${player.age}</p>
            <p>From: ${player.from}</p>
            <p>Position: ${player.position}</p>
        </article>
    `
    })
}

wordInput.addEventListener("input", showSearched)