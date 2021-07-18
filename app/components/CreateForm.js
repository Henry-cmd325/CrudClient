import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function CreateForm(){
    const $inputName = document.createElement("input"),
        $submitBtn = document.createElement("input"),
        $form = document.createElement("form");

    $form.classList.add("create-form");
    
    $inputName.name = "nombre";
    $inputName.type = "text";
    $inputName.placeholder = "Nombre de la cerveza...";

    $submitBtn.type = "submit";

    $form.appendChild($inputName);
    $form.appendChild($submitBtn);

    document.addEventListener("submit", async (e) => {
        if(!e.target.matches(".create-form") || $inputName.value === "") return;

        e.preventDefault();
        $form.style.display = "none"
        document.querySelector(".loader").style.display = "block";

        await ajax({
            method: "POST",
            succesFunc: (beer) => document.getElementById("main").innerHTML += PostCard(beer),
            body: JSON.stringify({nombre: $inputName.value})
        });
        
        document.querySelector(".loader").style.display = "none";
        $form.style.display = "block";
    });

    return $form;
}