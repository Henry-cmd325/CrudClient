import { ajax } from "./ajax.js";
import { PostCard } from "../components/PostCard.js";
import { CreateForm } from "../components/CreateForm.js";
import { PostCardUpdate } from "../components/PostCardUpdate.js";

export async function router(){
    const $main = document.getElementById("main");
    let {hash} = location;

    switch(hash){
        case "":
        case "#/":
            await ajax({
                method: "GET",
                succesFunc: (beers) =>{
                    let html = "";

                    beers.forEach(beer => html += PostCard(beer));

                    $main.innerHTML = html;
                }
            });
            break;
        case "#/Crear":
            $main.insertAdjacentElement("beforebegin", CreateForm());
            $main.classList.remove("grid-fluid");
            $main.classList.add("card-container");
            break;
        case "#/Editar":
            $main.classList.remove("grid-fluid");
            $main.classList.add("card-container");

            await ajax({
                method: "GET",
                id: localStorage.getItem("PostCardId"),
                succesFunc: (beer) => $main.innerHTML = PostCardUpdate(beer)
            })
            break;
    }
    document.querySelector(".loader").style.display = "none";
}