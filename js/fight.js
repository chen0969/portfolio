var initialPoints;
var newPoints;

$(document).ready(function(){
    initialPoints = $("#points").width();
    console.log('intial', initialPoints);
    newPoints = initialPoints / 2;
    console.log('new', newPoints);
});

function attack(){
    const points = $("#points").width();
    if(points >= initialPoints - 1 && points <= initialPoints + 1){
        useSkill();
        wiggle();
    }else if(points >= newPoints - 1 && points <= newPoints + 1){
        useSkill();
        win();
    }
    console.log('points', points);
    // console.log('clicked!');
}

function useSkill(){
    $("#broccoliSkillUse").css("animation", "none");
    $("#broccoliSkillUse").css("transform", "translateX(-100vw)");
    setTimeout(() => {
        $("#broccoliSkillUse").css("animation", "slide 1.5s backwards cubic-bezier(.21,.86,.02,1)");
    }, 1);
}

function wiggle(){
    $("#enemyStatus").css("animation", "none");
    setTimeout(function(){
        $("#enemyStatus").css("animation", "wiggle 0.1s 3 alternate backwards linear");
        $("#points").css("width", newPoints + "px");
    }, 1500)
}

function win(){
    $("#points").css("width", "1px");
    setTimeout(function() {
        $("#happyClient").css("animation", "slideUp 1.5s backwards cubic-bezier(.21,.86,.02,1)");
    }, 1000);
    setTimeout(function() {
        window.location.href = "hire.html";
    }, 2000);
}