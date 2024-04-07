

function attack(){
    const points = $("#points").css("width");
    if(points == "300px"){
        useSkill();
        wiggle();
    }else if(points == "150px"){
        useSkill();
        win();
    }
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
        $("#points").css("width", "150px");
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