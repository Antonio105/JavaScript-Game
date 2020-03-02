var position = [
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ]
];

for(var j= 1;j <=6;j++)
{
    for(var k=1;k<=7;k++){
    var tek = "row"+j+"-col"+k;
    document.getElementById(tek).name = "empty";
    }
}

var currentID;
var currentPositionX;
var currentPositionY;

function game(x)
{
    currentID = x.id;
    currentPositionX = currentID[3];
    currentPositionY = currentID[8]; 
}

function tableClick()
{
        if(document.getElementById(currentID).name == "empty")
        {
            document.getElementById(currentID).style.backgroundColor="red";
            document.getElementById(currentID).name = "filled";
            console.log(document.getElementById(currentID).name); 
        }
}




