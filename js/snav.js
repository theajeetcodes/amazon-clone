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

    const menuIcon = createSnavElement(
        "img",
        "menu-icon",
        menuDiv
    );
    menuIcon.src = "assets/icons/menu.png";
    menuIcon.alt = "Menu Icon";

    const menuText = createSnavElement(
        "span",
        "menu-text",
        menuDiv
    );
    menuText.textContent = "All";

    const primeVideoDiv = createSnavElement(
        "div",
        "primeVideoDiv",
        snavDiv
    );

    const primeVideoText = createSnavElement(
        "span",
        "primeVideoText",
        primeVideoDiv
    );
    primeVideoText.textContent = "Prime Video";
}