var unitedPlayers = [
    {
        name: "David De Gea",  age: "30", from: "Spain", position: "Keeper"
    },
    {
        name: "Raphael Varane",  age: "28", from: "France", position: "Defender"
    },
    {
        name: "Harry Maguire",  age: "28", from: "England", position: "Defenderk"
    },
    {
        name: "Aaron Wan-Bissaka",  age: "23", from: "England", position: "Defender"
    },
    {
        name: "Luke Shaw",  age: "26", from: "England", position: "Defender"
    },
    {
        name: "Frederico Rodrigues Santos",  age: "28", from: "Brazil", position: "Midfielder"
    },
    {
        name: "Paul Pogba",  age: "28", from: "France", position: "Midfielder"
    },
    {
        name: "Marcus Rashford",  age: "24", from: "England", position: "Midfielder"
    },
    {
        name: "Bruno Miguel Borges Fernandes",  age: "", from: "", position: ""
    },
    {
        name: "Cristiano Ronaldo dos Santos Aveiro",  age: "36", from: "Portugal", position: "Attacker"
    },
    {
        name: "Cristiano Ronaldo dos Santos Aveiro",  age: "36", from: "Portugal", position: "Attacker"
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
            <p>From: ${player.country}</p>
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
            <p>From: ${player.country}</p>
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
            <p>From: ${player.country}</p>
            <p>Position: ${player.position}</p>
        </article>
    `
    })
}

wordInput.addEventListener("input", showSearched)