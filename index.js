let screen = "homeScreen";
screens = ["homeScreen", "survivelModeScreen", "creativeModeScreen", "hardcoreModeScreen", "worldStructureScreen", "animalsAndMobsScreen", "serversScreen"]

screens.forEach(element => {
    document.getElementById(element).hidden = true;
});
document.getElementById(screen).hidden = false;




ShowAndHide = function(was, now){
    document.getElementById(was).hidden = true;
    document.getElementById(now).hidden = false;
    document.getElementById("title").innerHTML = ("Minecraft net / " + now)
    screen = now;
}

document.getElementById("homeScreenButton").onclick = function(){ShowAndHide(screen, "homeScreen");}
document.getElementById("survivelScreenButton").onclick = function(){ShowAndHide(screen, "survivelModeScreen");}
document.getElementById("creativeScreenButton").onclick = function(){ShowAndHide(screen, "creativeModeScreen");}
document.getElementById("hardcoreScreenButton").onclick = function(){ShowAndHide(screen, "hardcoreModeScreen");}
document.getElementById("worldScreenButton").onclick = function(){ShowAndHide(screen, "worldStructureScreen");}
document.getElementById("mobsScreenButton").onclick = function(){ShowAndHide(screen, "animalsAndMobsScreen");}
document.getElementById("serversScreenButton").onclick = function(){ShowAndHide(screen, "serversScreen");}
