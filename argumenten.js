const paintWall = function(kleur){
console.log("de muur is " + kleur, "geverfd.")
};

paintWall("groen");
paintWall("geel");
paintWall();    //er komt de muur is undifined geverfd in het scherm te zien.

const paintWalls = function(colorA, colorB){
    console.log("de noordmuur is " + colorB, " geverfd.")
    console.log("de zuidoostmuur is " + colorA, " geverfd.")
};

paintWalls("oranje", "grijs");