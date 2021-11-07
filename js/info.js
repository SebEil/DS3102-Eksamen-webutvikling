import unitedPlayers from "./united-data.js"
import liverpoolPlayers from "./liverpool-data.js"

const playerContent = document.querySelector(".players-content")
const inputChoice = document.querySelector("#player-filter")
const searchInput = document.querySelector("#search-input")
const changeTeamLiverpool = document.querySelector("#change-team-liverpool")
const changeTeamManu = document.querySelector("#change-team-manu")




//Forsøk på liverpool del her

let showLiverpoolPlayers = () => {
    playerContent.innerHTML = ""

    liverpoolPlayers.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article2">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content2">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg">Slipp for å snu tilbake</p>
            </article>
        </section>
    `
    })
}


changeTeamLiverpool.addEventListener("click", showLiverpoolPlayers)




//Slutt på liverpool del her




let showManuPlayers = () => {
    playerContent.innerHTML = ""

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
                    <p class="msg">Slipp for å snu tilbake</p>
                </article>
            </section>
        `
    })

}

changeTeamManu.addEventListener("click", showManuPlayers)


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
                <p class="msg">Slipp for å snu tilbake</p>
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
                <p class="msg">Slipp for å snu tilbake</p>
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
                <p class="msg">Slipp for å snu tilbake</p>
            </article>
        </section>
    `
    })
}

searchInput.addEventListener("input", showSearchInput)