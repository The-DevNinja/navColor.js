let iconStyleArray = Object.values({
    outlined: "fa-regular",
    filled: "fa-solid"
});

let navContainer = document.querySelector("nav");
let parentClass = "icon-div";

iconData.forEach((thisData) => {
    let newIconContainer;
    let thisIconName = thisData.iconName;

    createDivContainer(parentClass);
    createNewIcon(thisIconName);
    appendChildToNavbar(navContainer);


    function createDivContainer(className) {
        newIconContainer = document.createElement("div");
        newIconContainer.classList.add(className);
    }

    function createNewIcon(iconName) {
        let newIcon = document.createElement("i");

        let classesToAdd = [`${iconName}`, `${iconStyleArray[0]}`, `icon`];
        classesToAdd.forEach((thisClass) => {
            newIcon.classList.add(`${thisClass}`);
        });

        newIconContainer.appendChild(newIcon);
    }

    function appendChildToNavbar(navName) {
        navName.appendChild(newIconContainer);
    }
});