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

let allIconsDiv = document.querySelectorAll(`.${parentClass}`);

allIconsDiv.forEach((thisIconDiv, index) => {
    let thisIcon = thisIconDiv.querySelector(".icon");

    addDataAttribute(thisIconDiv);
    thisIconDiv.addEventListener("click", styleIcon);

    function styleIcon() {
        changeBgColor();
        makeIconSolid(thisIcon);

        function changeBgColor() {
            let thisIconColor = iconData[index].color;
            let bodyElement = document.querySelector("body");

            bodyElement.style.setProperty("--bg", `${thisIconColor}`);
        }

        function makeIconSolid(iconName) {
            resetAllIcons();
            addClassesToThisIcon();
    
            function resetAllIcons() {
                allIconsDiv.forEach((thisDiv) => {
                    let thisSolidIcon = thisDiv.querySelector(".icon");
    
                    makeIconOutlined(thisSolidIcon);
                    thisDiv.classList.remove("active");
                    
                    function makeIconOutlined(iconName) {
                        iconName.classList.remove(`${iconStyleArray[1]}`);
                        iconName.classList.add(`${iconStyleArray[0]}`);
                    }
                });
            }

            function addClassesToThisIcon() {
                thisIconDiv.classList.add("active");
                iconName.classList.add(`${iconStyleArray[1]}`);
            }
        }
    }

    function addDataAttribute(iconName) {
        let thisTitle = iconData[index].text;
        iconName.setAttribute("data-text", `${thisTitle}`);
    }
});

