function createSnavElement(tag, className, parent) {
    const selement = document.createElement(tag);

    if (className) {
        selement.classList.add(className);
    }

    if (parent) {
        parent.appendChild(selement);
    }

    return selement;
}

function createSnav(parent) {
    const snavDiv = createSnavElement("div", "snav-div", parent);

    // menu
    const menuDiv = createSnavElement(
        "div",
        "menu-div",
        snavDiv
    );
}