import unitedPlayers from "./united-data.js"
import liverpoolPlayers from "./liverpool-data.js"

const playerContent = document.querySelector(".players-content")
const inputChoiceUnited = document.querySelector("#player-filter__united")
const searchInputUnited = document.querySelector("#search-input__united")
const changeTeamLiverpool = document.querySelector("#change-team-liverpool")
const changeTeamManu = document.querySelector("#change-team-manu")

const searchbarLiverpool = document.querySelector(".fotball-players__liverpool")
const searchbarUnited = document.querySelector(".fotball-players__united")
const playerHeader = document.querySelector(".players-header")
const playerHeaderTekst = document.querySelector(".content-header__tekst")


//Liverpool del her

searchbarLiverpool.style.display = "none"

let showLiverpoolPlayers = () => {
    playerContent.innerHTML = ""
    
    searchbarUnited.style.display = "none"
    searchbarLiverpool.style.display = "block"

    playerHeader.style.backgroundImage = "linear-gradient(blue, black)"

    playerHeaderTekst.innerHTML = ""
    playerHeaderTekst.innerHTML = "Fotballspillere for Liverpool"

    liverpoolPlayers.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article__liverpool">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content__liverpool">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg"></p>
            </article>
        </section>
    `
    })
}


changeTeamLiverpool.addEventListener("click", showLiverpoolPlayers)
//Slutt på liverpool del her

//Block 2
const inputChoiceLiverpool = document.querySelector("#player-filter__liverpool")
const searchInputLiverpool = document.querySelector("#search-input__liverpool")


let showChoiceLiverpool = () => {
    playerContent.innerHTML = ""

    let searchPosition = liverpoolPlayers.filter(player => {
        return player.position === inputChoiceLiverpool.value
    })

    searchPosition.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article__liverpool">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content__liverpool">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg"></p>
            </article>
        </section>
    `
    })
}

inputChoiceLiverpool.addEventListener("input", showChoiceLiverpool)

let showSearchInputLiverpool = () => {
    playerContent.innerHTML = ""

    let search = searchInputLiverpool.value

    //filter funksjon
    const resultOfSearch = liverpoolPlayers.filter(player => {
        // returnere hele objekter som inneholder verdier som inkluderer searchet

        return Object.values(player).some(val => val.includes(search))
    })

    resultOfSearch.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article__liverpool">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content__liverpool">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg"></p>
            </article>
        </section>
    `
    })
}

searchInputLiverpool.addEventListener("input", showSearchInputLiverpool)


//Block 2 slutt



let showManuPlayers = () => {
    playerContent.innerHTML = ""

    searchbarUnited.style.display = "block"
    searchbarLiverpool.style.display = "none"

    playerHeader.style.backgroundImage = "linear-gradient(red, black)"

    playerHeaderTekst.innerHTML = ""
    playerHeaderTekst.innerHTML = "Fotballspillere for Manchester United"

    unitedPlayers.forEach(player => {
        playerContent.innerHTML += `
            <section class="player-card">
                <article class="player-article__united">
                    <img src=${player.image}>
                    <h3 class="cardTitle">${player.name}</h3>
                    <p id="playerAge">age: ${player.age}</p>
                    <p id="playerCountry">country: ${player.country}</p>
                    <p id="playerPosition">position: ${player.position}</p>
                </article>
                <article class="back-players-content__united">
                    <h1>Om spilleren</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                    tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                    <hr />
                    <p class="msg"></p>
                </article>
            </section>
        `
    })

}

changeTeamManu.addEventListener("click", showManuPlayers)


unitedPlayers.forEach(player => {
    playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article__united">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content__united">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg"></p>
            </article>
        </section>
    `
})


let showChoiceUnited = () => {
    playerContent.innerHTML = ""

    let searchPosition = unitedPlayers.filter(player => {
        return player.position === inputChoiceUnited.value
    })

    searchPosition.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article__united">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content__united">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg"></p>
            </article>
        </section>
    `
    })
}

inputChoiceUnited.addEventListener("input", showChoiceUnited)

let showSearchInputUnited = () => {
    playerContent.innerHTML = ""

    let search = searchInputUnited.value

    //filter funksjon
    const resultOfSearch = unitedPlayers.filter(player => {
        // returnere hele objekter som inneholder verdier som inkluderer searchet

        return Object.values(player).some(val => val.includes(search))
    })

    resultOfSearch.forEach(player => {
        playerContent.innerHTML += `
        <section class="player-card">
            <article class="player-article__united">
                <img src=${player.image}>
                <h3 class="cardTitle">${player.name}</h3>
                <p id="playerAge">age: ${player.age}</p>
                <p id="playerCountry">country: ${player.country}</p>
                <p id="playerPosition">position: ${player.position}</p>
            </article>
            <article class="back-players-content__united">
                <h1>Om spilleren</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus
                tenetur laborum vitae iusto sequi rem quas aspernatur adipisci aliquam.</p>
                <hr />
                <p class="msg"></p>
            </article>
        </section>
    `
    })
}

searchInputUnited.addEventListener("input", showSearchInputUnited)