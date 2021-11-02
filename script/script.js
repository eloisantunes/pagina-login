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