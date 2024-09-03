function createResumeFileLink() {
    
    var resumeText = "Kyle Hardy\n"							   		
        + "Brooklin, ME 04616\n"
        + "kyleahardy@gmail.com\n"
        + "207-245-0238\n"
        + "https://www.github.com/jarvisX86\n"
        + "https://kylehardy.itch.io/\n"
        + "https://www.linkedin.com/in/kyle-hardy-347b87248/\n\n"
        + "Software Engineer with 5 years of professional experience in the field. Passionate about software development, music, and sailing.\n\n"
        + "Professional Experience\n"
        + "- Software Engineer - Tyler Technologies, Inc September, 2021 - Present\n"
        + "- Genero 4js - Develop web applications for an enterprise-scale ERP solution that adhere to stringent state and federal reporting guidelines\n"
        + "- MS SQL Server - Implement complex sql queries in order to retrieve data from a remote database in an optimized fashion\n"
        + "- C# - Build desktop tools with C# WPF\n\n"
        + "Programmer Analyst - Sharetec Systems, Inc March, 2021 - September, 2021\n"
        + "- C# ASP.NET Core - Develop REST APIs for large fintech software suite\n"
        + "- Progress 4gl - Develop backend for large fintech software suite\n\n"
        + "Software Support Analyst - Tyler Technologies, Inc September, March, 2019 - March, 2021\n"
        + "- Respond To client Issues and provide deep technical product knowledge\n"
        + "- Provide detailed analysis for client reported issues and design requirements\n"
        + "- Create technical documentation for new and existing programs\n\n"
        + "Additional Technologies\n"
        + "- HTML5\n"
        + "- CSS/Sass\n"
        + "- Angular (TypeScript/JavaScript)\n"
        + "- Node.js\n"
        + "- Git / GitHub\n"
        + "- Linux\n"
        + "- Bash\n"
        + "- Docker\n\n"
        + "Personal Projects\n"
        + "Unreal 5 - FPS dungeon crawler utilizing grabber mechanics to solve puzzles\n"
        + "Unreal 5 - Third Person platformer obstacle course using C++ and Blueprints\n"
        + "Unity 2D - top down Star Trek-themed asteroids clone\n"
        + "Unity 2D - side-scrolling platformer\n\n"
        + "Education \n"
        + "University of Southern Maine, Portland, ME - Bachelor of Music Performance 2008\n";

        var textFile = null;
        var data = new Blob([resumeText], {type: 'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        // returns a URL you can use as a href
        return textFile;   
}


// script starts here
var modal = document.getElementById("resume_modal");

var btn = document.getElementById("resume_button");

var span = document.getElementsByClassName("close")[0];

var resumeFileUrl = createResumeFileLink();
btn.href = resumeFileUrl;
