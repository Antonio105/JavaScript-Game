var position = [
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ]
];
var currentID;
var currentPositionX;
var currentPositionY;
function tableClick()
{
    document.getElementById(currentID).style.backgroundColor="red";
/*  player = true
    for(var count = currentPositionX; count <= 7; count++)
    {
        if(document.getElementById(currentID[8]).name == "empty")
        {
            document.getElementById(currentID[8]).style.backgroundColor="red";
            document.getElementById(currentID).name = "filled";
        }
    }
*/
}

function game(x)
{
    currentID = x.id;
    currentPositionX = currentID[3];
    currentPositionY = currentID[8]; 
    if(position[0],[0]){
        
        document.getElementById("one").style.background = "red";
    }
}


