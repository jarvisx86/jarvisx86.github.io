// load projects
var projectsArray = [
    // {
    //     link:"https://www.youtube.com/embed/yOyd9GxFznQ?si=vgeiAUtyQdjZRXpt",
    //     title: "Scream Secret",
    //     id: "scream_secret",
    //     platform: "(Unity/C#)",
    //     description: "\nFPS horror game"
    // },
    {
        link: "https://www.youtube.com/embed/qjgxjcG8Wl0?si=lKvQH7-WhQZ0-zsN",
        title: "Cyber Blaster",
        id: "cyber_blaster",
        platform: "(Unity/C#)",
        description: 
        "\nCyber Blaster is a 2D side-scrolling platformer where you blast/platform your way through enemies and obstacles in a cyberpunk-esque world. "
        + "This started out as a game jam project which quickly grew beyound the scope of a week.\n\n" 
        + "I created all of the pixel art using Aesprite and set all of the Unity sprite filters to point/no filter to get that classic pixel look. The actual platforming mechanic "
        + "utilizes Unity's 2D physics system."
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
        + " If they get too close... well, I bet you can guess what happens next. Fun side note: the enemy laser sound effects are taken from the Star Wars X-wing."

    }
    
];

var projectLinks = document.getElementById("project_links");
var projects = document.getElementById("projects")

for (var i = 0; i < projectsArray.length; i++) {

    var project = projectsArray[i];

    var newProjectSpacer = document.createElement("div");
    newProjectSpacer.className = "spacer";

    var newProjectElement = document.createElement("div");
    newProjectElement.className = "project_div";

    var newVideoElement = document.createElement("div");
    newVideoElement.className = "project_desc";

    var newVideoTitle = document.createElement("h3");
    newVideoTitle.innerText = project.title + " " + project.platform;

    var newVideoDesc = document.createElement("p");
    newVideoDesc.innerText = project.description;
    
    var newVideoFrame = document.createElement("iframe");
    newVideoFrame.className = "project_vid";
    newVideoFrame.title = "YouTube video player";
    newVideoFrame.width = 560;
    newVideoFrame.height = 315;
    newVideoFrame.src = project.link;

    newVideoElement.append(newVideoTitle);
    newVideoElement.append(newVideoDesc);
    
    newProjectElement.append(newVideoElement);
    newProjectElement.append(newVideoFrame);
    newProjectElement.id = project.id;

    projects.append(newProjectElement);

    if (i < projectsArray.length - 1) {
        projects.append(newProjectSpacer);
    }

    var newProjectLink = document.createElement("a");
    newProjectLink.className = "project_link";
    newProjectLink.innerText = project.title;
    newProjectLink.href = "#" + project.id;

    projectLinks.append(newProjectLink);
}
