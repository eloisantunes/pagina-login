btnLogin.addEventListener("click", Event => {
    Event.preventDefault();
    main.classList.add("form-hide")
});

main.addEventListener("animationstart", Event => {
    if (Event.animationName = "down") {
    document.querySelector("form").style.overflow ="hidden" 
    }
});

main.addEventListener("animationend", Event => {
    if (Event.animationName = "down") {
    main.style.display = "none";
    document.querySelector("form").style.overflow ="none"
    }
});


const btnLogin = document.querySelector(".btnLogin")
const main = document.querySelector("main.container");

const fields = [ ... document.querySelectorAll(".container .btnLogin")]

fields.forEach(field => {
    if(field.value === "") FormData.classList.add(".validate-error")
})

const formError = document.querySelector("validate-error")
    if (formError) {
    formError.addEventListener("animationend", (Event) =>{
        if (Event.animationName === "nono") {
            formError.classList.remove(".validate-error");
        }
    })
} else {
    formError.classList.add("form-hide")
}