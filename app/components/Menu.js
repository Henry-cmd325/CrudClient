export function Menu(){
    const $menu = document.createElement("nav");

    $menu.classList.add("menu");
    $menu.innerHTML = `
    <a href=#/>Ver datos</a>
    <span>-</span>
    <a href=#/Crear>Crear datos</a>
    `;
    return $menu;
}