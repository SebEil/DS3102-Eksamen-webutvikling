// Dummy tekst her //
const hamburgerMenu = document.querySelector(".hamburger");
const mainNavigationContainer = document.querySelector(".navigation-container");

const changeDisplay = () => {
    
    const display = mainNavigationContainer.style.display;

    if( display === "none" || display === "" ){
        mainNavigationContainer.style.display = "block";
    }else{
        mainNavigationContainer.style.display = "none";
    }

}


hamburgerMenu.addEventListener("click", changeDisplay);