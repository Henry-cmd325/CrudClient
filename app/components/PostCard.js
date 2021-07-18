import { ajax } from "../helpers/ajax.js";

export function PostCard(beer){
    let {id, nombre} = beer;

    document.addEventListener("click", async (e) => {
        if(e.target.id === `delete-${id}` ){
            document.querySelector(".loader").style.display = "block";

            await ajax({
                method: "DELETE",
                id,
                succesFunc: () => console.log("Eres un crack")
            });
            if (location.hash === "#/" || location.hash === ""){
                location.reload();
            }
            else{
                location.hash === "";
            }
        }

        if(e.target.id === `edit-${id}`){
            localStorage.setItem("PostCardId", id);
            location.hash = "#/Editar";
        }
    });

    return `
    <article class="post-card">
        <span>${id}</span>
        <img src="https:/placeimg.com/200/200/any" alt="imagen">
        <h3 class="name">${nombre}</h3>
        <button class="delete-btn" id="delete-${id}">Borrar</button>
        <button class="edit-btn" id="edit-${id}">Editar</button>
    </article>
    `;
}