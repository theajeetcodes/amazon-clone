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

    // language hover list 

    const languageList = document.createElement("div");
    languageList.classList.add("language-list");
    langDiv.appendChild(languageList);

    const languages = [
        "English - EN",
        "हिन्दी - HI",
        "தமிழ்",
        "ಕನ್ನಡ",
        "മലയാളം",
        "বাংলা",
        "मराठी",
        "ਪੰਜਾਬੀ"
    ];

    languages.forEach(language => {
        const item = document.createElement("div");
        item.classList.add("language-item");
        item.textContent = language;
        languageList.appendChild(item);
    });

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

    // hover list 

    const accountList = document.createElement("div");
    accountList.classList.add("account-list");
    detailDiv.appendChild(accountList);

    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile-div");
    accountList.appendChild(profileDiv);

    const profile = document.createElement("span");
    profile.classList.add("profile-span");
    profile.textContent = " Who is shopping? Select a profile.";
    profileDiv.appendChild(profile);

    const manageProfile = document.createElement("a");
    manageProfile.classList.add("manage-profile");
    manageProfile.href = "#";
    manageProfile.textContent = "Manage Profiles";
    profileDiv.appendChild(manageProfile);

    const profileArrow = document.createElement("span");
    profileArrow.classList.add("profile-arrow");
    profileArrow.textContent = ">";
    profileDiv.appendChild(profileArrow);

    // list div

    const listAccountdiv = document.createElement("div");
    listAccountdiv.classList.add("list-account");
    accountList.appendChild(listAccountdiv);

    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");
    listAccountdiv.appendChild(listDiv);

    const list = document.createElement("h2");
    list.classList.add("head");
    list.textContent = "Your Lists";
    listDiv.appendChild(list);

    const shoppingList = document.createElement("span");
    shoppingList.classList.add("shopping-list");
    shoppingList.textContent = "Shopping List";
    listDiv.appendChild(shoppingList);

    const wishList = document.createElement("span");
    wishList.classList.add("text");
    wishList.textContent = "Create a Wish List";
    listDiv.appendChild(wishList);

    const babyList = document.createElement("span");
    babyList.classList.add("text");
    babyList.textContent = "Baby Wishlist";
    listDiv.appendChild(babyList);

    const discoverStyle = document.createElement("span");   
    discoverStyle.classList.add("text");
    discoverStyle.textContent = "Discover Your Style";
    listDiv.appendChild(discoverStyle);

    const exploreShowroom = document.createElement("span");
    exploreShowroom.classList.add("text");
    exploreShowroom.textContent = "Explore Showroom";
    listDiv.appendChild(exploreShowroom);
  
    //    YOUR ACCOUNT 
    const yourAccountDiv = document.createElement("div");
    yourAccountDiv.classList.add("list-div");
    listAccountdiv.appendChild(yourAccountDiv);

    const yourAcount = document.createElement("h2");
    yourAcount.classList.add("head");
    yourAcount.textContent = "Your Account";
    yourAccountDiv.appendChild(yourAcount);

    const switchAccount = document.createElement("span");
    switchAccount.classList.add("shopping-list");
    switchAccount.textContent = "Switch Accounts";
    yourAccountDiv.appendChild(switchAccount);

    const signOut = document.createElement("span");
    signOut.classList.add("shopping-list");
    signOut.textContent = "Sign Out";
    yourAccountDiv.appendChild(signOut);

    const hello = document.createElement("h3");
    hello.classList.add("hello-text");
    hello.textContent = "Hello, Ajeet";
    detailDiv.appendChild(hello);

    const accountDiv = document.createElement("div");
    accountDiv.classList.add("account-div");
    detailDiv.appendChild(accountDiv);

    const account = document.createElement("span");
    account.classList.add("account");
    account.textContent = "Account & Lists";
    accountDiv.appendChild(account);

    const accountArrow = document.createElement("img");
    accountArrow.classList.add("account-arrow");
    accountArrow.src = "assets/icons/downarrow.png";
    accountArrow.alt = "Down Arrow";
    accountDiv.appendChild(accountArrow);

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

