let buildNavMenu = () => {
    
    var menuItems = [
        {
            title: "Kyle Hardy Dev",
            link: "#hero-section",
            element: "a"
        },
        {
            title: "Welcome",
            link: "#welcome_link",
            element: "a"
        },
        {
            title: "Projects",
            link: "#projects_link",
            element: "a"
        },
        {
            title: "Resume",
            link: "#resume_link",
            element: "a"
        }
    ];
    
    var navMenu = document.getElementById("menu_links");

    for (var i = 0; i < menuItems.length; i++) {

        var menuItem = document.createElement(menuItems[i].element);
        menuItem.innerText = menuItems[i].title;
        menuItem.className = "menu_link";
        
        if (menuItems[i].link.length > 0) {
            menuItem.href = menuItems[i].link;
        }

        navMenu.append(menuItem);
    }
}

buildNavMenu();