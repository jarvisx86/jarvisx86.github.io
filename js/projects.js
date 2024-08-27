
// load projects
var projectsArray = [
    {
        link: "https://www.youtube.com/embed/BWv44mx2zcM?si=8oFKuyYUqmJtMJyQ",
        title: "Space Battle (Unity/C#)",
        description: "\nA top-down 2D asteroids clone. This was the first game that I completed. The ship enemies use the A* Pathfinding algorithm to find a path to the player."

    },
    {
        link: "https://www.youtube.com/embed/o6jPsjURkNw?si=0d1xk54O62YHtDG5",
        title: "Cyber Blaster (Unity/C#)",
        description: 
        "\nCyber Blaster is a 2D side-scrolling platformer where you blast/platform your way through enemies and obstacles in a cyberpunk-esque world. "
        + "This started out as a game jam project which quickly grew beyound the scope of a week.\n\n" 
        + "I created all of the pixel art using Aesprite and set all of the Unity sprite filters to point/no filter to get that classic pixel look. The actual platforming mechanic "
        + "utilizes Unity's 2D physics system. \n\n"
        + "As development went along I found a fair amount of code the could be reused across different objects. I started breaking out these pieces of functionality on the different enmey types and implemented "
        + "an system using C# events (not Unity events) to execute the newly decoupled logic. This was more of an experiement to get used to using these types of events.\n\n"
    },
    {
        link:"https://www.youtube.com/embed/yOyd9GxFznQ?si=vgeiAUtyQdjZRXpt",
        title: "Scream Secret (Unity/C#)",
        description: "\nFPS horror game"
    }
];

var projects = document.getElementById("projects")

for (var i = 0; i < projectsArray.length; i++) {

    var project = projectsArray[i];

    var newProjectElement = document.createElement("div");
    newProjectElement.className = "project_div";

    var newVideoElement = document.createElement("div");
    newVideoElement.className = "project_desc";

    var newVideoTitle = document.createElement("h2");
    newVideoTitle.innerText = project.title;

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

    projects.append(newProjectElement);
}
