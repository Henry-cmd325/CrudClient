export async function ajax(props){
    let { method, id, succesFunc, body} = props,
        url = "https://localhost:44355/api/cerveza",
        $main = document.getElementById("main");

    if(id != undefined) url = url + `/${id}`;

    await fetch(url, {method, body, headers: {"Content-Type" : "application/json"}})
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => succesFunc(json))
    .catch(err => {
        if (method === "DELETE" || method === "PUT") return;

        let message = err.statusText || "Ha ocurrido un error";

        if ($main.classList.contains("card-container")){
            $main.classList.remove("card-container");
            $main.classList.add("grid-fluid");
        }

        $main.innerHTML = `
        <div class="error">
            <h1>${err.status}: ${message}</h1>
        </div>`;

        document.querySelector(".loader").style.display = "none";
        console.log(err);
    });
}