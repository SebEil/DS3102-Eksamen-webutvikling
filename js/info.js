var unitedSpillere = [
    {
        Navn: "David De Gea",  Alder: "30", Land: "Spania", Posisjon: "Målvakt"
    },
    {
        Navn: "Raphael Varane",  Alder: "28", Land: "Frankrike", Posisjon: "Forsvarsspiller"
    },
    {
        Navn: "Harry Maguire",  Alder: "28", Land: "England", Posisjon: "Forsvarsspiller"
    },
    {
        Navn: "Aaron Wan-Bissaka",  Alder: "23", Land: "England", Posisjon: "Forsvarsspiller"
    },
    {
        Navn: "Luke Shaw",  Alder: "26", Land: "England", Posisjon: "Forsvarsspiller"
    },
    {
        Navn: "Frederico Rodrigues Santos",  Alder: "28", Land: "Brazil", Posisjon: "Midtbanespiller"
    },
    {
        Navn: "Paul Pogba",  Alder: "28", Land: "France", Posisjon: "Midtbanespiller"
    },
    {
        Navn: "Marcus Rashford",  Alder: "24", Land: "England", Posisjon: "Midtbanespiller"
    },
    {
        Navn: "Bruno Miguel Borges Fernandes",  Alder: "27", Land: "Portugal", Posisjon: "Midtbanespiller"
    },
    {
        Navn: "Cristiano Ronaldo dos Santos Aveiro",  Alder: "36", Land: "Portugal", Posisjon: "Angrepsspiller"
    },
    {
        Navn: "Edinson Cavani",  Alder: "34", Land: "Uruguay", Posisjon: "Angrepsspiller"
    },
]

const spillerInnhold = document.querySelector(".spiller-innhold")
const inputValg = document.querySelector("#spiller-filter")
const inputOrd = document.querySelector("#search-input")

unitedSpillere.forEach(spiller => {
    spillerInnhold.innerHTML += `
        <article class="spiller-article">
            <h3>${spiller.Navn}</h3>
            <p>Alder: ${spiller.Alder}</p>
            <p>Land: ${spiller.Land}</p>
            <p>Posisjon: ${spiller.Posisjon}</p>
        </article>
    `
})

let visValg = () => {
    spillerInnhold.innerHTML = ""

    let posisjonsSøk = unitedSpillere.filter(spiller => {
        return spiller.Posisjon === inputValg.value
    })

    posisjonsSøk.forEach(spiller => {
        spillerInnhold.innerHTML += `
        <article class="spiller-article">
            <h3>${spiller.Navn}</h3>
            <p>Alder: ${spiller.Alder}</p>
            <p>Land: ${spiller.Land}</p>
            <p>Posisjon: ${spiller.Posisjon}</p>
        </article>
    `
    })
}

inputValg.addEventListener("input", visValg)

let visSøk = () => {
    spillerInnhold.innerHTML = ""

    let søkeOrd = inputOrd.value

    //filter funksjon
    const søkeResultat = unitedSpillere.filter(spiller => {
        // returnere hele objekter som inneholder verdier som inkluderer søkeordet

        return Object.values(spiller).some(val => val.includes(søkeOrd))
    })

    søkeResultat.forEach(spiller => {
        spillerInnhold.innerHTML += `
        <article class="spiller-article">
            <h3>${spiller.Navn}</h3>
            <p>Alder: ${spiller.Alder}</p>
            <p>Land: ${spiller.Land}</p>
            <p>Posisjon: ${spiller.Posisjon}</p>
        </article>
    `
    })
}

inputOrd.addEventListener("input", visSøk)