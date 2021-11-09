import unitedPlayers from "./united-data.js"
import liverpoolPlayers from "./liverpool-data.js"

const playerContent = document.querySelector(".players-content")
const inputChoice = document.querySelector("#player-filter")
const searchInput = document.querySelector("#search-input")
const changeTeamLiverpool = document.querySelector("#change-team-liverpool")
const changeTeamManu = document.querySelector("#change-team-manu")

const searchbar2 = document.querySelector(".fotball-players2")
const searchbar = document.querySelector(".fotball-players")
const contentBanner = document.querySelector(".content-header")
const playerHeader = document.querySelector(".players-header")
const playerHeaderTekst = document.querySelector(".content-header__tekst")


//Liverpool del her

searchbar2.style.display = "none"

let showLiverpoolPlayers = () => {
    playerContent.innerHTML = ""
    
    searchbar.style.display = "none"
    searchbar2.style.display = "block"

    playerHeader.style.backgroundImage = "linear-gradient(blue, black)"

    playerHeaderTekst.innerHTML = ""
    playerHeaderTekst.innerHTML = "Fotballspillere for Liverpool"






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



//Block 2
const inputChoice2 = document.querySelector("#player-filter2")
const searchInput2 = document.querySelector("#search-input2")


let showChoice2 = () => {
    playerContent.innerHTML = ""

    let searchPosition = liverpoolPlayers.filter(player => {
        return player.position === inputChoice2.value
    })

    searchPosition.forEach(player => {
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

inputChoice2.addEventListener("input", showChoice2)

let showSearchInput2 = () => {
    playerContent.innerHTML = ""

    let search = searchInput2.value

    //filter funksjon
    const resultOfSearch = liverpoolPlayers.filter(player => {
        // returnere hele objekter som inneholder verdier som inkluderer searchet

        return Object.values(player).some(val => val.includes(search))
    })

    resultOfSearch.forEach(player => {
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

searchInput2.addEventListener("input", showSearchInput2)


//Block 2 slutt



let showManuPlayers = () => {
    playerContent.innerHTML = ""

    searchbar.style.display = "block"
    searchbar2.style.display = "none"

    playerHeader.style.backgroundImage = "linear-gradient(red, black)"

    playerHeaderTekst.innerHTML = ""
    playerHeaderTekst.innerHTML = "Fotballspillere for Manchester United"

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