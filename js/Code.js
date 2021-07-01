const accessCode1 = "2%";
const accessCode2 = "BELTS";
const accessCode3 = "HEALTHY";
const accessCode4 = "LIVESTOCK"

function clues() {
    
    fill("white")
    textSize(15)
    text("Question: The ___ of  the population worked in agriculture", 100,50)
    fill("lightblue")
    text("Hint: 1/50*2/2 And Not a Standard Form ", 100,70)

    fill("white")
    textSize(15)
    text("The agriculture in USA is divided into various __.",displayWidth/2+360,displayHeight-968);
    fill("lightblue");
    text("Jumbled Word: L S B T E",displayWidth/2+360,displayHeight-940);
    
    fill("white")
    textSize(15)
    text("A stable supply of diverse and nutritious food is an important aspect of staying ___.",100,300);
    fill("lightblue");
    text("Jumbled Word: Y H T L A E H",100,333);

    fill("white")
    textSize(15)
    text("A stable supply of diverse and nutritious food is an important aspect of staying ___.",displayWidth/2+360,displayHeight-568);
    fill("lightblue");
    text("Hint: _STOCK",displayWidth/2+360,displayHeight-540);
}