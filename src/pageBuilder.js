
// Build the whole page
function buildPage() {

    // Creates DOM elements
    const mainElement = document.createElement("div");
    mainElement.id = "mainElement";
    mainElement.innerHTML = "This will be a nice portfolio !";

    document.body.appendChild(mainElement);
}

export { buildPage };