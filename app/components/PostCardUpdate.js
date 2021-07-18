import { ajax } from "../helpers/ajax.js";

export function PostCardUpdate(beer){
    let {id, nombre} = beer;

    document.addEventListener("submit", async (e) => {
        if(!e.target.matches(".update-form") || document.getElementById("input-name").value === "") return
        
        e.preventDefault();

        document.querySelector(".loader").style.display = "block";

        await ajax({
            method: "PUT",
            id,
            succesFunc: () => console.log("eres un crack"),
            body: JSON.stringify({nombre: document.getElementById("input-name").value})
        });

        location.hash = "#/";
    });

    return `
    <article class="post-card">
        <span>${id}</span>
        <img src="https:/placeimg.com/200/200/any" alt="imagen">
        <form class="update-form">
            <input id="input-name" type="text" value="${nombre}">
            <input type="submit">
        </form>
    </article>
    `;
}