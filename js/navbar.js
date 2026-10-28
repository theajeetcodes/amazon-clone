function createElement(tag, className, parent) {
    const element = document.createElement(tag);

    if (className) {
        element.classList.add(className);
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}

function createNavbar(parent) {
    const navDiv = createElement("div", "nav-div", parent);
   
    // logoDiv
    const logoDiv = createElement("div", "logo-div", navDiv);
    const logo = createElement("img", "logo", logoDiv);
    logo.src = "assets/images/logo.png";
    logo.alt = "Amazon Logo";

    // location
    const locationDiv = createElement("div", "location-div", navDiv);

    const locationPopup = createElement("div", "location-popup", locationDiv);
    const popupHeadDiv = createElement(
        "div",
        "popup-headdiv",
        locationPopup
    );
    const popupHead = createElement("h2", "popup-head", popupHeadDiv);
    popupHead.textContent = "Choose Your location";

    const multiplyIcon = createElement(
        "img",
        "multiply-icon",
        popupHeadDiv
    );
    multiplyIcon.src = "assets/icons/multiply.png";
    multiplyIcon.alt = "multiply Icon";

    const paraText = createElement(
        "p",
        "para-text",
        locationPopup
    );

    paraText.textContent = 
    "Select a delivery location to see product availability and delivery options";

    const addressDiv = createElement(
        "div",
        "add-div",
        locationPopup
    );

    const address = createElement(
        "span",
        "add-text",
        addressDiv
    );

    address.textContent = "Sign in to see your Addresses";

    const dividerDiv = createElement(
        "div",
        "divider-div",
        locationPopup
    );

    const leftLine = createElement(
        "div",
        "line",
        dividerDiv
    );

    const dividerText = createElement(
        "span",
        "divider-text",
        dividerDiv
    );
    dividerText.textContent = "or enter an Indian pincode";

    const rightLine = createElement(
        "div",
        "line",
        dividerDiv
    );

    const boxDiv = createElement(
        "div",
        "box-div",
        locationPopup
    );

    const box = createElement(
        "input",
        "box",
        boxDiv
    );
    box.placeholder = "Enter pincode";

    const applyDiv = createElement(
        "div",
        "apply-div",
        boxDiv
    );

    const apply = createElement(
        "span",
        "apply-text",
        applyDiv
    );
    apply.textContent = "Apply"

    const iconDiv = createElement(
        "div",
        "icon-div",
        locationDiv
    );

    const icon = createElement(
        "img",
        "icon",
        iconDiv
    );
    icon.src = "assets/icons/location.png";
    icon.alt = "Location Icon";

    const textDiv = createElement(
        "div",
        "text-div",
        locationDiv
    );

    const firstSpan = createElement(
        "span",
        "first-span",
        textDiv
    );
    firstSpan.textContent = "Delivering to Lucknow 226005";

    const secondSpan = createElement(
        "span",
        "second-span",
        textDiv
    );
    secondSpan.textContent = "Update location";

    locationDiv.addEventListener("click", () => {
        locationPopup.style.display = "block";
    });

    multiplyIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        locationPopup.style.display = "none";
    });

    applyDiv.addEventListener("click", () => {
        const pincode = box.value.trim();

        if (pincode.length !== 6 || isNaN(pincode)) {
            alert("Please enter a valid 6-digit pincode");
            return;
        }

        firstSpan.textContent = `Dilivering to ${pincode}`;
        locationPopup.style.display = "none";
    });

    const searchDiv = createElement(
        "div",
        "search-div",
        navDiv
    );

    const categoriesDiv = createElement(
        "div",
        "categories-div",
        searchDiv
    );

    const categoriesBtn = createElement(
        "button",
        "categories-btn",
        categoriesDiv
    );

    const categoriesText = createElement(
        "span",
        "categories-text",
        categoriesBtn
    );
    categoriesText.textContent = "All";

    const downArrow = createElement(
        "img",
        "down-arrow",
        categoriesBtn
    );

    downArrow.src = "assets/icons/downarrow1.png";
    downArrow.alt = "Down Arrow";

    const categoriesList = createElement(
        "div",
        "categories-list",
        categoriesDiv
    );

    const categories = [
        "All",
        "Amazon Devices",
        "Amazon Fashion",
        "Books",
        "Electronics",
        "Furniture",
        "Grocery",
        "Mobile",
        "Sports"
    ];

    categories.forEach((category) => {
        const categoryItem = createElement(
            "div",
            "category-item",
            categoriesList
        );

        categoryItem.textContent = category;
    });

    categoriesBtn.addEventListener("click", (event) => {
        event.stopPropagation();

        if (categoriesList.style.display === "flex") {
            categoriesList.style.display = "none";
        } else {
            categoriesList.style.display = "flex";
        }
    });

    document.addEventListener("click", () => {
        categoriesList.style.display = "none";
    });

    const input = createElement(
        "input",
        "input",
        searchDiv
    );

    input.placeholder = "Search Amazon.in";
    
    const searchIcon = createElement(
        "div",
        "search-icon",
        searchDiv
    );

    const search = createElement(
        "img",
        "search",
        searchIcon
    )

    search.src = "assets/icons/search.png";
    search.alt = "Search";

    search.addEventListener("click", () => {
        const searchValue = input.value.trim();

        if (searchValue === "") {
            alert("Please enter a product name");
            return;
        }
        console.log(searchValue);
    });

    // language
    const langDiv = createElement(
        "div",
        "lang-div",
        navDiv
    );

    const detailDiv = createElement(
        "div",
        "detail-div",
        navDiv
    );

    const hello = createElement(
        "h3",
        "hello-text",
        detailDiv
    );

    hello.textContent = "Hello, Ajeet";

    const accountDiv = createElement(
        "div",
        "account-div",
        detailDiv
    );

    const account = createElement(
        "span",
        "account",
        accountDiv
    );
    
    account.textContent = "Account & Lists";

    const accountArrow = createElement(
        "img",
        "account-arrow",
        accountDiv
    );

    accountArrow.src = "assets/icons/downarrow.png";
    accountArrow.alt = "Down Arrow"

    const accountList = createElement(
        "div",
        "account-list",
        detailDiv
    );

    const profileDiv = createElement(
        "div",
        "profile-div",
        accountList
    );

    const profile = createElement(
        "span",
        "profile-span",
        profileDiv
    );

    profile.textContent = "Who is shopping? Select a profile.";

    const manageProfile = createElement(
        "a",
        "manage-profile",
        profileDiv
    );

    manageProfile.href = "#";
    manageProfile.textContent = "Manage Profiles";

    const profileArrow = createElement(
        "span",
        "profile-arrow",
        profileDiv
    );

    profileArrow.textContent = ">";

    const listAccountDiv = createElement(
        "div",
        "list-account",
        accountList
    );

    const listDiv = createElement(
        "div",
        "list-div",
        listAccountDiv
    );

    const list = createElement(
        "h2",
        "head",
        listDiv
    );

    list.textContent = "Your Lists";

    const shoppingList = createElement(
        "span",
        "shopping-list",
        listDiv
    );

    shoppingList.textContent = "Shopping List";

    const wishList = createElement(
        "span",
        "text",
        listDiv
    );

    wishList.textContent = "Create a Wish List";

    const babyList = createElement(
        "span",
        "text",
        listDiv
    );

    babyList.textContent = "Baby Wishlist";

    const discoverStyle = createElement(
        "span",
        "text",
        listDiv
    );

    discoverStyle.textContent = "Discover Your Style";

    const exploreShowroom = createElement(
        "span",
        "text",
        listDiv
    );

    exploreShowroom.textContent = "Explore Showroom";

    const yourAccountDiv = createElement(
        "div",
        "list-div",
        listAccountDiv
    );

    const yourAcount = createElement(
        "h2",
        "head",
        yourAccountDiv
    );

    yourAcount.textContent = "Your Account";

    const switchAccounts = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    switchAccounts.textContent = "Switch Accounts";

    const signOut = createElement(
        "span",
        "shopping-list",
        yourAccountDiv
    );

    signOut.textContent = "Sign Out";

    const yourAccount = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    yourAccount.textContent = "Your Account";

    const yourOrder = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    yourOrder.textContent = "Your Order";

    const yourWishList = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    yourWishList.textContent = "Your Wish List";

    const keepShopping = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    keepShopping.textContent = "Keep shopping for";

    const recommendations = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    recommendations.textContent = "Your Recommendations";

    const returns = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    returns.textContent = "Returns";

    const Recalls = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    Recalls.textContent = "Recalls & Product Safety Alerts";

    const PrimeMembership = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    PrimeMembership.textContent = "Your Prime Membership";

    const primeVideo = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    primeVideo.textContent = "Your Prime Video";

    const subscribeSave = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    subscribeSave.textContent = "Your Subscribe & Save Items";

    const Memberships = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    Memberships.textContent = "Memberships & Subscriptions";

    const sellerAccount = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    sellerAccount.textContent = "Seller Account";

    const contentLibrary = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    contentLibrary.textContent = "Content Library";

    const musicLibrary = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    musicLibrary.textContent = "Your Music Library";

    const businessAccount = createElement(
        "span",
        "text",
        yourAccountDiv
    );

    businessAccount.textContent = "Register for a free Business Account";

    const returnDiv = createElement(
        "div",
        "detail-div",
        navDiv
    );

    const returnText = createElement(
        "h3",
        "hello-text",
        returnDiv
    );

    returnText.textContent = "Returns";

    const orderText = createElement(
        "h3",
        "account",
        returnDiv
    );

    orderText.textContent = "& Orders";

    const cartDiv = createElement(
        "div",
        "cart-div",
        navDiv
    );

    const cartIconDiv = createElement(
        "div",
        "cart-icon-div",
        cartDiv
    );

    const cartIcon = createElement(
        "img",
        "cart-icon",
        cartIconDiv
    );

    cartIcon.src = "assets/icons/cart.png";
    cartIcon.alt = "Cart Icon";

    const cartText = createElement(
        "h3",
        "account",
        cartDiv
    );

    cartText.textContent = "Cart";

    const flag = createElement(
        "img",
        "flag",
        langDiv
    );

    flag.src = "assets/images/flag.png";
    flag.alt = "Indian Flag";

    const lang = createElement(
        "span",
        "lang",
        langDiv
    );

    lang.textContent = "EN";

    const langArrow = createElement(
        "img",
        "lang-arrow",
        langDiv
    );

    langArrow.src = "assets/icons/downarrow.png";
    langArrow.alt = "Down Arrow";

    const languageList = createElement(
        "div",
        "language-list",
        langDiv
    );
    
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

    languages.forEach((language) => {

        const languageItem = createElement(
            "div",
            "language-item",
            languageList
        );
        languageItem.textContent = language;

        languageItem.addEventListener("click", () => {
            lang.textContent = language;
            languageList.style.display = "none";
        });
    });
}