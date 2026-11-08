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

    const freshDiv = createSnavElement(
        "div",
        "fresh-div",
        snavDiv
    );

    const freshText = createSnavElement(
        "span",
        "fresh-text",
        freshDiv
    );
    freshText.textContent = "Fresh";

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

    const sellDiv = createSnavElement(
        "div",
        "sell-div",
        snavDiv
    );

    const sellText = createSnavElement(
        "span",
        "sell-text",
        sellDiv
    );

    sellText.textContent = "Sell";

    const bestSellerDiv = createSnavElement(
        "div",
        "bestseller-div",
        snavDiv
    );

    const bestSellerText = createSnavElement(
        "span",
        "bestsellers-text",
        bestSellerDiv
    );

    bestSellerText.textContent = "BestSellers";

    const dayDealDiv = createSnavElement(
        "div",
        "daydeal-div",
        snavDiv
    );

    const dayDealText = createSnavElement(
        "span",
        "daydeal-text",
        dayDealDiv
    );
    dayDealText.textContent = "Today's Deals";


    const mobileDiv = createSnavElement(
        "div",
        "mobile-div",
        snavDiv
    );

    const mobileText = createSnavElement(
        "span",
        "mobile-text",
        mobileDiv
    );

    mobileText.textContent = "Mobiles";

    const amazonpayDiv = createSnavElement(
        "div",
        "amazonpay-div",
        snavDiv
    );

    const amazonpayText = createSnavElement(
        "span",
        "amazonpay-text",
        amazonpayDiv
    );
    amazonpayText.textContent = "Amazon Pay";

    const couponDiv = createSnavElement(
        "div",
        "coupon-div",
        snavDiv
    );

    const couponText = createSnavElement(
        "span",
        "coupon-text",
        couponDiv
    );
    couponText.textContent = "Coupons";

}