// load projects
var projectsArray = [
    {
        link: "https://www.youtube.com/embed/l4o5U9Vo3-w?si=r7egM3iloXtvF6C2",
        title: "Laser Defender",
        id: "laser_defender",
        platform: "(Unity/C#)",
        description: "",
        game: "games/LaserDefender/index.html"
    },
    {
        link: "https://www.youtube.com/embed/qjgxjcG8Wl0?si=lKvQH7-WhQZ0-zsN",
        title: "Cyber Blaster",
        id: "cyber_blaster",
        platform: "(Unity/C#)",
        description: 
        "\nCyber Blaster is a 2D side-scrolling platformer where you blast/platform your way through enemies and obstacles in a cyberpunk-esque world. "
        + "This started out as a game jam project which quickly grew beyound the scope of a week.\n\n" 
        + "I created all of the pixel art using Aesprite and set all of the Unity sprite filters to point/no filter to get that classic pixel look. The actual platforming mechanic "
        + "utilizes Unity's 2D physics system.",
        game: "games/CyberBlaster/index.html"
    },
    {
        link: "https://www.youtube.com/embed/oBTZOmK9A-w?si=JYMrSW565Q2Im---",
        title: "Space Battle", 
        id: "space_battle",
        platform: "(Unity/C#)",
        description: "\nA top-down 2D asteroids clone. This was the first project that I created from start to finish. Like any  other asteroids game, the " 
        + "goal is to destory as many asteroids and othe enemies as possible before you run out of lives. Beware - you are in Klingon territory and they "
        + "don't take kindly to trespassers!\n\n"
        + "The enemy ships use the A* Pathfinding algorithm to find a path to the player. They have a limited firing range so keep them at a distance."
        + " If they get too close... well, I bet you can guess what happens next. Fun side note: the enemy laser sound effects are taken from the Star Wars X-wing.",
        game: "games/SpaceBattle/index.html"

    },
    {
        link: "https://www.youtube.com/embed/XvZt-fzC2e0?si=eC9uHyUn2RC6enhs",
        title: "Feed Fred",
        id: "feed_fred",
        platform: "(Unity/C#)",
        description: "\nMeet Fred The Fish. He's always hungry and he loves pizza. Feed him as much as you can before the screen fills up with trash. "
        + "This was my second completed project using Unity and was submitted for FishFest 2024 Game Jam.",
        game: "games/FeedFred/index.html"

    }
];


let buildProjectElement = (project) => {

    // create new project <div> element
    var newProjectElement = document.createElement("div");
    newProjectElement.className = "project_div";

    // create new <div> for the project vidpe
    var newVideoElement = document.createElement("div");
    newVideoElement.className = "project_desc";

    // add <h3> for project title
    var newVideoTitle = document.createElement("a");
    newVideoTitle.href = project.game;
    newVideoTitle.target = "_blank";

    var title = document.createElement("h3");
    title.innerText = project.title + " " + project.platform;
    title.className = "project_title";
    
    newVideoTitle.appendChild(title);
   

    // add
    var newVideoFrame = document.createElement("iframe");
    newVideoFrame.className = "project_vid";
    newVideoFrame.title = "YouTube video player";
    newVideoFrame.width = 500;
    newVideoFrame.height = 450;
    newVideoFrame.src = project.link;

    newProjectElement.append(newVideoElement);
    newProjectElement.append(newVideoFrame);
    newProjectElement.append(newVideoTitle);
    newProjectElement.id = project.id;

    return newProjectElement;
};


// script starts here!
var menuLinks = document.getElementById("menu_links");
var projects = document.getElementById("projects");

for (var i = 0; i < projectsArray.length; i++) {

    var newProjectElement = buildProjectElement(projectsArray[i]);
    projects.append(newProjectElement);
}
// end script