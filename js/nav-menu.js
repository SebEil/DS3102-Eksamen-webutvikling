// Dummy tekst her //
const navMeny = document.querySelector(".nav-meny");
const mainNavigationContainer = document.querySelector(".navigation-container");

const changeDisplay = () => {
    
    const display = mainNavigationContainer.style.display;

    if( display === "none" || display === "" ){
        mainNavigationContainer.style.display = "block";
    }else{
        mainNavigationContainer.style.display = "none";
    }

}


navMeny.addEventListener("click", changeDisplay);