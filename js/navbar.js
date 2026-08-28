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
        "categoriesDiv"
    );


    // logoDiv.addEventListener("click", () => {
    //     alert("Clicked");
    //     window.location.reload();
    // });

    // // locationDiv
    // const locationDiv = document.createElement("div");
    // locationDiv.classList.add("location-div");
    // navDiv.appendChild(locationDiv);

    // const locationPopup = document.createElement("div");
    // locationPopup.classList.add("location-popup");
    // locationDiv.appendChild(locationPopup);

    // const popupHeadDiv = document.createElement("div");
    // popupHeadDiv.classList.add("popup-headdiv");
    // locationPopup.appendChild(popupHeadDiv);

    // const popupHead = document.createElement("h2");
    // popupHead.classList.add("popup-head");
    // popupHead.textContent = "Choose your location";
    // popupHeadDiv.appendChild(popupHead);

    // const multiplyIcon = document.createElement("img");
    // multiplyIcon.classList.add("multiply-icon");
    // multiplyIcon.src = "assets/icons/multiply.png";
    // multiplyIcon.alt = "Multiply Icon";
    // popupHeadDiv.appendChild(multiplyIcon);

    // multiplyIcon.addEventListener("click", (event) => {
    //     event.stopImmediatePropagation();
    //     locationPopup.style.display = "none";
    // });

    // const paraText = document.createElement("p");
    // paraText.classList.add("para-text");
    // paraText.textContent = "Select a delivery location to see product availability and delivery options";
    // locationPopup.appendChild(paraText);

    // const addressDiv = document.createElement("div")
    // addressDiv.classList.add("add-div");
    // locationPopup.appendChild(addressDiv);

    // const address = document.createElement("span");
    // address.classList.add("add-text");
    // address.textContent = "Sign in to see your Addresses";
    // addressDiv.appendChild(address);

    // const dividerDiv = document.createElement("div");
    // dividerDiv.classList.add("divider-div");
    // locationPopup.appendChild(dividerDiv);

    // const leftLine = document.createElement("div");
    // leftLine.classList.add("line");
    // dividerDiv.appendChild(leftLine);

    // const dividerText = document.createElement("span");
    // dividerText.classList.add("divider-text");
    // dividerText.textContent = "or enter an Indian pincode";
    // dividerDiv.appendChild(dividerText);

    // const rightLine = document.createElement("div");
    // rightLine.classList.add("line");
    // dividerDiv.appendChild(rightLine);

    // const boxDiv = document.createElement("div");
    // boxDiv.classList.add("box-div");
    // locationPopup.appendChild(boxDiv);

    // const box = document.createElement("div");
    // box.classList.add("box");
    // boxDiv.appendChild(box);

    // const applyDiv = document.createElement("div");
    // applyDiv.classList.add("apply-div");
    // boxDiv.appendChild(applyDiv);

    // const apply = document.createElement("span");
    // apply.classList.add("apply-text");
    // apply.textContent = "Apply";
    // applyDiv.appendChild(apply);

    // locationDiv.addEventListener("click", () => {
    //     locationPopup.style.display = "block";
    //     console.log("pop active");
    // })
    
    // const iconDiv = document.createElement("div");
    // iconDiv.classList.add("icon-div");
    // locationDiv.appendChild(iconDiv);

    // const icon = document.createElement("img");
    // icon.classList.add("icon");
    // icon.src = "assets/icons/location.png";
    // icon.alt = "location Icon";
    // iconDiv.appendChild(icon);

    // const textDiv = document.createElement("div");
    // textDiv.classList.add("text-div");
    // locationDiv.appendChild(textDiv);

    // const firstSpan = document.createElement("span");
    // firstSpan.classList.add("first-span");
    // firstSpan.textContent = "Delivering to Lucknow 226005";
    // textDiv.appendChild(firstSpan);

    // const secondSpan = document.createElement("span");
    // secondSpan.classList.add("second-span");
    // secondSpan.textContent = "Update location";
    // textDiv.appendChild(secondSpan);

    // // search
    // const searchDiv = document.createElement("div");
    // searchDiv.classList.add("search-div");
    // navDiv.appendChild(searchDiv);

    // const categoriesDiv = document.createElement("div");
    // categoriesDiv.classList.add("categories-div");
    // searchDiv.appendChild(categoriesDiv);

    // const categoriesBtn = document.createElement("button");
    // categoriesBtn.classList.add("categories-btn");
    // categoriesDiv.appendChild(categoriesBtn);

    // const text = document.createElement("span");
    // text.textContent = "All";
    // categoriesBtn.appendChild(text);

    // const downArrow = document.createElement("img");
    // downArrow.classList.add("down-arrow");
    // downArrow.src = "assets/icons/downarrow1.png";
    // downArrow.alt = "Down Arrow";
    // categoriesBtn.appendChild(downArrow);

    // const input = document.createElement("input");
    // input.classList.add("input");
    // input.placeholder = "Search Amazon.in";
    // searchDiv.appendChild(input);

    // const searchIcon = document.createElement("div")
    // searchIcon.classList.add("search-icon");
    // searchDiv.appendChild(searchIcon);

    // const search = document.createElement("img");
    // search.classList.add("search");
    // search.src = "assets/icons/search.png";
    // search.alt = "Search Icon";
    // searchIcon.appendChild(search)

    // // language
    // const langDiv = document.createElement("div");
    // langDiv.classList.add("lang-div");
    // navDiv.appendChild(langDiv);

    // // language hover list 

    // const languageList = document.createElement("div");
    // languageList.classList.add("language-list");
    // langDiv.appendChild(languageList);

    // const languages = [
    //     "English - EN",
    //     "हिन्दी - HI",
    //     "தமிழ்",
    //     "ಕನ್ನಡ",
    //     "മലയാളം",
    //     "বাংলা",
    //     "मराठी",
    //     "ਪੰਜਾਬੀ"
    // ];

    // languages.forEach(language => {
    //     const item = document.createElement("div");
    //     item.classList.add("language-item");
    //     item.textContent = language;
    //     languageList.appendChild(item);
    // });

    // const flag = document.createElement("img");
    // flag.classList.add("flag");
    // flag.src = "assets/images/flag.png";
    // flag.alt = "Indian Flag";
    // langDiv.appendChild(flag);

    // const lang = document.createElement("span");
    // lang.classList.add("lang");
    // lang.textContent = "EN";
    // langDiv.appendChild(lang);

    // const langArrow = document.createElement("img");
    // langArrow.classList.add("lang-arrow");
    // langArrow.src = "assets/icons/downarrow.png";
    // langArrow.alt = "Down Arrow";
    // langDiv.appendChild(langArrow);

    // // account
    // const detailDiv = document.createElement("div");
    // detailDiv.classList.add("detail-div");
    // navDiv.appendChild(detailDiv);

    // // hover list 

    // const accountList = document.createElement("div");
    // accountList.classList.add("account-list");
    // detailDiv.appendChild(accountList);

    // const profileDiv = document.createElement("div");
    // profileDiv.classList.add("profile-div");
    // accountList.appendChild(profileDiv);

    // const profile = document.createElement("span");
    // profile.classList.add("profile-span");
    // profile.textContent = " Who is shopping? Select a profile.";
    // profileDiv.appendChild(profile);

    // const manageProfile = document.createElement("a");
    // manageProfile.classList.add("manage-profile");
    // manageProfile.href = "#";
    // manageProfile.textContent = "Manage Profiles";
    // profileDiv.appendChild(manageProfile);

    // const profileArrow = document.createElement("span");
    // profileArrow.classList.add("profile-arrow");
    // profileArrow.textContent = ">";
    // profileDiv.appendChild(profileArrow);

    // // list div

    // const listAccountdiv = document.createElement("div");
    // listAccountdiv.classList.add("list-account");
    // accountList.appendChild(listAccountdiv);

    // const listDiv = document.createElement("div");
    // listDiv.classList.add("list-div");
    // listAccountdiv.appendChild(listDiv);

    // const list = document.createElement("h2");
    // list.classList.add("head");
    // list.textContent = "Your Lists";
    // listDiv.appendChild(list);

    // const shoppingList = document.createElement("span");
    // shoppingList.classList.add("shopping-list");
    // shoppingList.textContent = "Shopping List";
    // listDiv.appendChild(shoppingList);

    // const wishList = document.createElement("span");
    // wishList.classList.add("text");
    // wishList.textContent = "Create a Wish List";
    // listDiv.appendChild(wishList);

    // const babyList = document.createElement("span");
    // babyList.classList.add("text");
    // babyList.textContent = "Baby Wishlist";
    // listDiv.appendChild(babyList);

    // const discoverStyle = document.createElement("span");   
    // discoverStyle.classList.add("text");
    // discoverStyle.textContent = "Discover Your Style";
    // listDiv.appendChild(discoverStyle);

    // const exploreShowroom = document.createElement("span");
    // exploreShowroom.classList.add("text");
    // exploreShowroom.textContent = "Explore Showroom";
    // listDiv.appendChild(exploreShowroom);
  
    // //    YOUR ACCOUNT 
    // const yourAccountDiv = document.createElement("div");
    // yourAccountDiv.classList.add("list-div");
    // listAccountdiv.appendChild(yourAccountDiv);

    // const yourAcount = document.createElement("h2");
    // yourAcount.classList.add("head");
    // yourAcount.textContent = "Your Account";
    // yourAccountDiv.appendChild(yourAcount);

    // const switchAccount = document.createElement("span");
    // switchAccount.classList.add("text");
    // switchAccount.textContent = "Switch Accounts";
    // yourAccountDiv.appendChild(switchAccount);

    // const signOut = document.createElement("span");
    // signOut.classList.add("shopping-list");
    // signOut.textContent = "Sign Out";
    // yourAccountDiv.appendChild(signOut);

    // const accountText = document.createElement("span");
    // accountText.classList.add("text");
    // accountText.textContent = "Your Account";
    // yourAccountDiv.appendChild(accountText);

    // const order = document.createElement("span");
    // order.classList.add("text");
    // order.textContent = "Your Order";
    // yourAccountDiv.appendChild(order);

    // const wishlistText = document.createElement("span");
    // wishlistText.classList.add("text");
    // wishlistText.textContent = "your Wish List";
    // yourAccountDiv.appendChild(wishlistText);

    // const shoppingText = document.createElement("span");
    // shoppingText.classList.add("text");
    // shoppingText.textContent = "Keep shopping for";
    // yourAccountDiv.appendChild(shoppingText);

    // const recommend = document.createElement("span");
    // recommend.classList.add("text");
    // recommend.textContent = "Your Recommendations";
    // yourAccountDiv.appendChild(recommend);

    // const reTurn = document.createElement("span");
    // reTurn.classList.add("text");
    // reTurn.textContent = "Returns";
    // yourAccountDiv.appendChild(reTurn);

    // const recall = document.createElement("span");
    // recall.classList.add("text");
    // recall.textContent = "Recalls and Product Safety Alerts";
    // yourAccountDiv.appendChild(recall);

    // const primeMember = document.createElement("span");
    // primeMember.classList.add("text");
    // primeMember.textContent = "Your Prime Membership";
    // yourAccountDiv.appendChild(primeMember);

    // const primeVideo = document.createElement("span");
    // primeVideo.classList.add("text");
    // primeVideo.textContent = "Your Prime Video";
    // yourAccountDiv.appendChild(primeVideo);

    // const subscribeText = document.createElement("span");
    // subscribeText.classList.add("text");
    // subscribeText.textContent = "Your Subscribe & Save Items";
    // yourAccountDiv.appendChild(subscribeText);

    // const membershipAndSubscriptions = document.createElement("span");
    // membershipAndSubscriptions.classList.add("text");
    // membershipAndSubscriptions.textContent = "Memberships & Subscriptions";
    // yourAccountDiv.appendChild(membershipAndSubscriptions);

    // const sellerAccount = document.createElement("span");
    // sellerAccount.classList.add("text");
    // sellerAccount.textContent = "Seller Account";
    // yourAccountDiv.appendChild(sellerAccount);

    // const contentLibrary = document.createElement("span");
    // contentLibrary.classList.add("text");
    // contentLibrary.textContent = "Content Library";
    // yourAccountDiv.appendChild(contentLibrary);

    // const musicLibrary = document.createElement("span");
    // musicLibrary.classList.add("text");
    // musicLibrary.textContent = "Your Music Library";
    // yourAccountDiv.appendChild(musicLibrary);

    // const businessAccount = document.createElement("span")
    // businessAccount.classList.add("text");
    // businessAccount.textContent = "Register for a free Business Account";
    // yourAccountDiv.appendChild(businessAccount);
    
    // const hello = document.createElement("h3");
    // hello.classList.add("hello-text");
    // hello.textContent = "Hello, Ajeet";
    // detailDiv.appendChild(hello);

    // const accountDiv = document.createElement("div");
    // accountDiv.classList.add("account-div");
    // detailDiv.appendChild(accountDiv);

    // const account = document.createElement("span");
    // account.classList.add("account");
    // account.textContent = "Account & Lists";
    // accountDiv.appendChild(account);

    // const accountArrow = document.createElement("img");
    // accountArrow.classList.add("account-arrow");
    // accountArrow.src = "assets/icons/downarrow.png";
    // accountArrow.alt = "Down Arrow";
    // accountDiv.appendChild(accountArrow);

    // // return & order
    // const returnDiv = document.createElement("div");
    // returnDiv.classList.add("detail-div");
    // navDiv.appendChild(returnDiv);

    // const returnText = document.createElement("h3");
    // returnText.classList.add("hello-text");
    // returnText.textContent = "Returns";
    // returnDiv.appendChild(returnText);

    // const orderTest = document.createElement("h3");
    // orderTest.classList.add("account");
    // orderTest.textContent = "& Orders";
    // returnDiv.appendChild(orderTest);

    // // Cart
    // const cartDiv = document.createElement("div");
    // cartDiv.classList.add("cart-div");
    // navDiv.appendChild(cartDiv);

    // const cartIconDiv = document.createElement("div");
    // cartIconDiv.classList.add("cart-icon-div");
    // cartDiv.appendChild(cartIconDiv);

    // const cartIcon = document.createElement("img");
    // cartIcon.classList.add("cart-icon");
    // cartIcon.src = "assets/icons/cart.png";
    // cartIcon.alt = "Cart Icon";
    // cartIconDiv.appendChild(cartIcon);

    // const cartText = document.createElement("h3");
    // cartText.classList.add("account");
    // cartText.textContent = "Cart";
    // cartDiv.appendChild(cartText);
}