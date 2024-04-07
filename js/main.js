// for front pages
function broccmon_hover(role){
    if(role == 1){
        $("#slogan").text("A designer who has code in his heart");
    }else if(role == 2){
        $("#slogan").text("A developer who is master of art");
    }else if(role == 3){
        $("#slogan").text("A photographer who believes in cinema");
    }else{
        $("#slogan").text("A designer who has code in his heart");
    }
}

function broccmon_pick(role){
    $("#dGreen").css("animation", "digIn 1s forwards");
    $("#cWhite").css("animation", "whiteDigIn 1s 0.5s forwards");
    if(role == 1){
        setTimeout(
            function(){window.location.href = "designer.html";}
            , 1500);
    }else if(role == 2){
        setTimeout(
            function(){window.location.href = "developer.html";}
            , 1500);
    }else if(role == 3){
        setTimeout(
            function(){window.location.href = "photographer.html";}
            , 1500);
    } 
}

// mouse trace function
$(document).ready(
    setTimeout(function() {
        traceM("red", 5);
        traceM("blue", 1.5);
        traceM("yellow", 1.5);
        traceM("white", 5);
        traceM("lGreen", 7);
        traceM("dGreen", -15);
        traceM("bm-lGreen", 40);
        traceM("bm-blue", 5);
        traceM("bm-yellow", 5);
    }, 2000)
);

function traceM(target, amount){
    const targetB = $("#" + target);
    targetB.css("animation", "none");
    $(window).mousemove(function (e) { 
        var offset = e.pageX / amount;
        targetB.css("transform", "translateX(" + offset + "px)");
    });
}



// for detail pages
function revolver() {
    var skillList = $("#skillList");
    var skillBox = $("#skillBox");
    var scrollPosition = skillList.scrollTop();
    var listHeight = skillBox.height();
    var listMiddle = listHeight / 1.3;

    $(".skillTag").each(function() {
        var skillTag = $(this);
        var tagPosition = skillTag.position().top - 50;
        var tagHeight = skillTag.outerHeight() + 50;
        if (tagPosition < listMiddle && tagPosition + tagHeight > listMiddle) {
            skillTag.addClass("activate");
        } else {
            skillTag.removeClass("activate");
        }
    });
}

// designer page skills
function skillShow(number){
    if (number == 1){
        $("#skillInfo").text("Sketching is an essential skill for designers to enhance their aesthetics and articulate their designs non-verbally.");
    }else if(number == 2){
        $("#skillInfo").text("Jing-An utilizes over 10 useful design tools to enhance the quality of the design ideation process.");
    }else if(number == 3){
        $("#skillInfo").text("Creating realistic 3D Models using a variety of software, including Blender, Maya, 3dMax, SolidWorks, and C4D.");
    }else if(number == 4){
        $("#skillInfo").text("Creating realistic 3D renderings using a variety of software, including Blender, Maya, 3dMax, SolidWorks, and C4D.");
    }else if(number == 5){
        $("#skillInfo").text("Jing-An is adept at using a variety of ingredients to swiftly create beautiful and functional prototypes.");
    }else if(number == 6){
        $("#skillInfo").text("Jing-An possesses extensive professional knowledge in ergonomics and human-machine interface design.");
    }else if(number == 7){
        $("#skillInfo").text("As an extension of ergonomics, Jing-An excels in enhancing user experiences.");
    }else if(number == 8){
        $("#skillInfo").text("Jing-An is familiar with the usage and characteristics of various materials, including metals, woods, and plastics.");
    }else if(number == 9){
        $("#skillInfo").text("Jing-An is an expert in design thinking, leading the design team to uncover the core value of various projects.");
    }else if(number == 10){
        $("#skillInfo").text("As an extension of UI/UX, Jing-An excels in creating compelling visual experiences.");
    }else if(number == 11){
        $("#skillInfo").text("Great designs are not created in isolation. Jing-An, as a skilled designer, excels in collaborating with diverse individuals.");
    }else if(number == 12){
        $("#skillInfo").text("Jing-An utilizes various efficient methods to stay updated on the newest trends every day.");
    }else if(number == 13){
        $("#skillInfo").text("Design isn't just about having the answers but knowing the most efficient ways to find them, and Jing-An is excels at this.");
    }else if(number == 14){
        $("#skillInfo").text("Jing-An is an experienced project manager with a proven track record of delivering perfect and timely results.");
    }else if(number == 15){
        $("#skillInfo").text("TRIZ is a problem-solving methodology used in design and engineering helps Jing-An to innovative solutions to complex problems.");
    }else if(number == 16){
        $("#skillInfo").text("SCAMPER is a creative thinking methodology that Jing-An loves to use for generating cool ideas.");
    }else if(number == 17){
        $("#skillInfo").text("Brainstorming is a fundamental methodology always coupled with SCAMPER by Jing-An.");
    }else if(number == 18){
        $("#skillInfo").text("The User Journey Map is a valuable tool that helps Jing-An identify critical points to enhance UX design.");
    }else if(number == 19){
        $("#skillInfo").text("Persona is a tool that helps Jing-An identify the specific target audience for design.");
    }else if(number == 20){
        $("#skillInfo").text("Mood Board is a tool that helps Jing-An to visualize the concept of design.");
    }else if(number == 21){
        $("#skillInfo").text("Tree Analysis aids Jing-An in testing prototypes and identifying crucial points to enhance UX design.");
    }else if(number == 22){
        $("#skillInfo").text("QFD is a valuable methodology for Jing-An to organize design requirements and optimize the best solution.");
    }

}

// developer page skills
function devSkillShow(number){
    if (number == 1){
        $("#skillInfo").text("Jing-An is highly proficient in HTML(Hypertext Markup Language), particularly excelling in accessibility settings, and optimizing search engine settings for digital marketing. ");
    }else if(number == 2){
        $("#skillInfo").text("Jing-An is an expert in various stylesheet languages like CSS(Cascading Style Sheets) and SCSS(Sassy Cascading Style Sheets), effortlessly managing complex animations and special effects.");
    }else if(number == 3){
        $("#skillInfo").text("Jing-An enjoys using HTML, CSS, and JavaScript to build websites. The current web portfolio is constructed by Jing-An with these three languages. ");
    }else if(number == 4){
        $("#skillInfo").text("SVG(Scalable Vector Graphics) is a powerful vector file format that allows Jing-An to integrate his graphic design and web development skills seamlessly. ");
    }else if(number == 5){
        $("#skillInfo").text("Vue, as a JavaScript framework, is increasingly popular in the web development field, and Jing-An is a fluent Vue developer.");
    }else if(number == 6){
        $("#skillInfo").text("jQuery is a classic and useful JavaScript library that Jing-An loves to use to expedite his development process.");
    }else if(number == 7){
        $("#skillInfo").text("Jing-An is also an expert in digital marketing, having served as an SEO (Search Engine Optimization) analyst for numerous clients. With his web development skills, Jing-An can effectively optimize SEO rankings. ");
    }else if(number == 8){
        $("#skillInfo").text("To accommodate various devices and screen sizes, Jing-An always incorporates responsive web design (RWD) into web development projects. ");
    }else if(number == 9){
        $("#skillInfo").text("Creating a large website requires collaboration. Jing-An is proficient in using Git & GitHub to facilitate seamless collaboration with coworkers.");
    }else if(number == 10){
        $("#skillInfo").text("As both a designer and a developer, Jing-An values and understands the key aspects of Agile Development processes, ensuring projects perform at their best.");
    }else if(number == 11){
        $("#skillInfo").text("Jing-An's expertise extends beyond front-end development; he is also familiar with various back-end systems, including Node.js.");
    }else if(number == 12){
        $("#skillInfo").text("Thanks to Jing-An's background in industrial design, he is also familiar with other coding languages used in various applications, such as Python.");
    }else if(number == 13){
        $("#skillInfo").text("Database management poses no challenge to Jing-An; he has previously utilized MySQL to develop storage and retrieval systems for clients. ");
    }else if(number == 14){
        $("#skillInfo").text("Accessibility is a crucial aspect of UX ergonomics and web optimization, and Jing-An prioritizes it in all his projects.");
    }else if(number == 15){
        $("#skillInfo").text("Jing-An is highly proficient in PHP (Hypertext Preprocessor) as a full-stack developer, particularly in dynamic website cases.");
    }else if(number == 16){
        $("#skillInfo").text("WordPress was the first Content Management System (CMS) Jing-An ever learned. He has created numerous WP plugins and has been working with WordPress for many years.");
    }else if(number == 17){
        $("#skillInfo").text("Jing-An is also very familiar with Drupal, another CMS constructed with PHP. He is proficient in creating plugins for Drupal cases.");
    }else if(number == 18){
        $("#skillInfo").text("Jing-An also has the ability to work on Shopify projects without any issues.");
    }else if(number == 19){
        $("#skillInfo").text("As a true full-stack developer, Jing-An excels at creating top-notch e-commerce websites to help his clients optimize their businesses.");
    }else if(number == 20){
        $("#skillInfo").text("Visual Studio, as a development tool, is Jing-An's trusted companion in all his projects.");
    }else if(number == 21){
        $("#skillInfo").text("With knowledge of Arduino, Jing-An is adept at coding for devices beyond just websites, providing comprehensive solutions for his clients.");
    }else if(number == 22){
        $("#skillInfo").text("With knowledge of XAMPP & MAMP, Jing-An has no problem developing for both Windows and Mac systems.");
    }

}

// photographer page skills
function phoSkillShow(number){
    if (number == 1){
        $("#skillInfo").text("Jing-An honed his photography skills by challenging himself to capture the beauty in everyday trash. Now, he has the ability to make anything look like treasure.");
    }else if(number == 2){
        $("#skillInfo").text("Jing-An is an expert at utilizing natural light, consistently achieving optimal lighting even in challenging conditions. ");
    }else if(number == 3){
        $("#skillInfo").text("As a photographer with degrees in design, Jing-An excels in composition. This background enables Jing-An to transform photos into more than just images—they become works of art.");
    }else if(number == 4){
        $("#skillInfo").text("Jing-An's design background extends to expertise in color psychology, enriching his ability to use color effectively.");
    }else if(number == 5){
        $("#skillInfo").text("Jing-An's communication skills enable him to effectively guide models to reveal their most attractive aspects, whether they are professional models or have no prior experience.");
    }else if(number == 6){
        $("#skillInfo").text("Jing-An is an expert in commercial photography. He can capture the most beautiful aspects of any product and produce photos at lightning speed.");
    }else if(number == 7){
        $("#skillInfo").text("Jing-An's design background endows him with exceptional editing skills. Beyond basic tasks like background removal or color changes, he excels at tackling any editing challenge.");
    }else if(number == 8){
        $("#skillInfo").text("Jing-An is an experienced animator who has been learning 3D animation since 2014. He has assisted numerous firms in producing animations.");
    }else if(number == 9){
        $("#skillInfo").text("Adobe is Jing-An's trusted partner, encompassing Illustrator, Photoshop, InDesign, After Effects, Premiere Pro, Lightroom Classic, Adobe XD, and Acrobat. He is a master of all these tools.");
    }else if(number == 10){
        $("#skillInfo").text("Blender has been Jing-An's primary 3D animation tool for creating animations in both his college assignments and client projects for several years.");
    }else if(number == 11){
        $("#skillInfo").text("Jing-An is proficient in Autodesk software, including AutoCAD, Maya, and 3ds Max. These skills also make him familiar with landscape drawing and engineering drawing.");
    }else if(number == 12){
        $("#skillInfo").text("SolidWorks plays a significant role in Jing-An's career as a designer, offering essential capabilities for various design tasks and projects.");
    }else if(number == 13){
        $("#skillInfo").text("Jing-An harbors a director's dream in his mind, having created numerous storyboards with compelling narratives.");
    }
}

function scrollToExp(number){
    if(number == 1){
        const target = $("#experience1").offset().top;
        $(window).scrollTop(target);
    }
}

$(window).on("scroll", function(){
    seeAvatar();
});

function seeAvatar(){
    let nowHeight = $(window).scrollTop();
    const keyHeight = $("#summarySection").offset().top / 2;
    console.log(keyHeight);
    if(nowHeight >= keyHeight){
        $("#scrollAvatar").addClass("goScrollAvatar");
    }else{
        $("#scrollAvatar").removeClass("goScrollAvatar");
    }
}

function showExample(element) {
    $(element).css("transform", "scale(1.2)");
}

function hideExample(element) {
    $(element).css("transform", "scale(1)");
}