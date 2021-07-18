export function Loader(){
    const $loader = document.createElement("img");

    $loader.src = "app/assets/Pulse-1s-200px.svg";
    $loader.alt = "cargando...";
    $loader.classList.add("loader");

    return $loader;
}