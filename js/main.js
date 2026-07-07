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
    categoriesBtn.textContent = "All";
    categoriesDiv.appendChild(categoriesBtn);

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

}

createNavbar(app);