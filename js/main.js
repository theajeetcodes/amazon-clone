const body = document.body

const app = document.createElement("div");
app.classList.add("app");
body.appendChild(app);

function createNavbar(parent) {
    const navDiv = document.createElement("div");
    navDiv.classList.add("nav-div");
    parent.appendChild(navDiv);
    
    // logoDiv
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-div");
    navDiv.appendChild(logoDiv);

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "assets/images/logo.png";
    logo.alt = "Amazon Logo";
    logoDiv.appendChild(logo);

    // locationDiv
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location-div");
    navDiv.appendChild(locationDiv);

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon-div");
    locationDiv.appendChild(iconDiv);

    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = "assets/icons/location.png";
    icon.alt = "location Icon";
    iconDiv.appendChild(icon);

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    locationDiv.appendChild(textDiv);

    const firstSpan = document.createElement("span");
    firstSpan.classList.add("first-span");
    firstSpan.textContent = "Delivering to Lucknow 226005";
    textDiv.appendChild(firstSpan);

    const secondSpan = document.createElement("span");
    secondSpan.classList.add("second-span");
    secondSpan.textContent = "Update location";
    textDiv.appendChild(secondSpan);

    // search
    const searchDiv = document.createElement("div");
    searchDiv.classList.add("search-div");
    navDiv.appendChild(searchDiv);

    const categoriesDiv = document.createElement("div");
    categoriesDiv.classList.add("categories-div");
    searchDiv.appendChild(categoriesDiv);

    const categoriesBtn = document.createElement("button");
    categoriesBtn.classList.add("categories-btn");
    categoriesDiv.appendChild(categoriesBtn);

    const text = document.createElement("span");
    text.textContent = "All";
    categoriesBtn.appendChild(text);

    const downArrow = document.createElement("img");
    downArrow.classList.add("down-arrow");
    downArrow.src = "assets/icons/downarrow1.png";
    downArrow.alt = "Down Arrow";
    categoriesBtn.appendChild(downArrow);

    const input = document.createElement("input");
    input.classList.add("input");
    input.placeholder = "Search Amazon.in";
    searchDiv.appendChild(input);

    const searchIcon = document.createElement("div")
    searchIcon.classList.add("search-icon");
    searchDiv.appendChild(searchIcon);

    const search = document.createElement("img");
    search.classList.add("search");
    search.src = "assets/icons/search.png";
    search.alt = "Search Icon";
    searchIcon.appendChild(search)

    // language
    const langDiv = document.createElement("div");
    langDiv.classList.add("lang-div");
    navDiv.appendChild(langDiv);

    const flag = document.createElement("img");
    flag.classList.add("flag");
    flag.src = "assets/images/flag.png";
    flag.alt = "Indian Flag";
    langDiv.appendChild(flag);

    const lang = document.createElement("span");
    lang.classList.add("lang");
    lang.textContent = "EN";
    langDiv.appendChild(lang);

    const langArrow = document.createElement("img");
    langArrow.classList.add("lang-arrow");
    langArrow.src = "assets/icons/downarrow.png";
    langArrow.alt = "Down Arrow";
    langDiv.appendChild(langArrow);

    // account
    const detailDiv = document.createElement("div");
    detailDiv.classList.add("detail-div");
    navDiv.appendChild(detailDiv);

    const hello = document.createElement("h3");
    hello.classList.add("hello-text");
    hello.textContent = "Hello, Ajeet";
    detailDiv.appendChild(hello);

    const accountDiv = document.createElement("div");
    accountDiv.classList.add("account-div");
    detailDiv.appendChild(accountDiv);

    const account = document.createElement("h3");
    account.classList.add("account");
    account.textContent = "Account & Lists";
    accountDiv.appendChild(account);

    // return & order
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("detail-div");
    navDiv.appendChild(returnDiv);

    const returnText = document.createElement("h3");
    returnText.classList.add("hello-text");
    returnText.textContent = "Returns";
    returnDiv.appendChild(returnText);

    const orderTest = document.createElement("h3");
    orderTest.classList.add("account");
    orderTest.textContent = "& Orders";
    returnDiv.appendChild(orderTest);

    // Cart
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-div");
    navDiv.appendChild(cartDiv);

    const cartIconDiv = document.createElement("div");
    cartIconDiv.classList.add("cart-icon-div");
    cartDiv.appendChild(cartIconDiv);

    const cartIcon = document.createElement("img");
    cartIcon.classList.add("cart-icon");
    cartIcon.src = "assets/icons/cart.png";
    cartIcon.alt = "Cart Icon";
    cartIconDiv.appendChild(cartIcon);

    const cartText = document.createElement("h3");
    cartText.classList.add("account");
    cartText.textContent = "Cart";
    cartDiv.appendChild(cartText);
}

createNavbar(app);