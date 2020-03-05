var position = [
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ],
    [ , , , , , , ]
];
window.onload=function board()
{
    for(var j = 1; j<=6;j++)
    {
        for(var k =1;k<=7;k++)
        {
            var filler = "row"+j+"-col"+k;
            document.getElementById(filler).name="empty";
        }
    }
}
function boboard()
{
    for(var j = 1; j<=6;j++)
    {
        for(var k =1;k<=7;k++)
        {
            var filler = "row"+j+"-col"+k;
            console.log(filler);
            console.log(document.getElementById(filler).name);
        }
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

var player = true;
function tableClick()
{
    var tcpx = currentPositionX;
    var marker = "row"+tcpx+"-col"+currentPositionY;
        for(var count = 0; count <=5; count++)
        { 
            if(tcpx==6 && document.getElementById(marker).name == "empty")
            {
                var marker = "row"+6+"-col"+currentPositionY;
                            if(player == true)
                            {
                                document.getElementById(marker).style.backgroundColor="red";
                                document.getElementById(marker).name = "filled";
                                player = false;
                                break;
                            }
                            else if(player == false)
                            {
                                document.getElementById(marker).style.backgroundColor="yellow";
                                document.getElementById(marker).name = "filled";
                                player = true;  
                                break;  
                            }

            }
            else if(document.getElementById(marker).name=="empty")
            {
                tcpx= parseInt(tcpx) +1;
            }
/*
            else if (document.getElementById(currentID).name=="empty")
            {
                tcpx+=1;
                marker="row"+tcpx+"-col"+currentPositionY; 
                if(document.getElementById(marker).name=="filled")
                {
                    tcpx-=1;
                    marker="row"+tcpx+"-col"+currentPositionY; 
                    console.log(tcpx);
                    console.log("k");
                    if(player == true)
                            {
                                document.getElementById(marker).style.backgroundColor="red";
                                document.getElementById(marker).name = "filled";
                                player = false;
                                break;
                            }
                            else if(player == false)
                            {
                                document.getElementById(marker).style.backgroundColor="yellow";
                                document.getElementById(marker).name = "filled";
                                player = true;  
                                break;
                            }
                }
            }
*/
            else if(document.getElementById(currentID).name=="filled")
            {
                tcpx-=1;
                marker="row"+tcpx+"-col"+currentPositionY;
                if(document.getElementById(marker).name=="empty")
                {
                    if(player == true)
                            {
                                document.getElementById(marker).style.backgroundColor="red";
                                document.getElementById(marker).name = "filled";
                                player = false;
                                break;
                            }
                            else if(player == false)
                            {
                                document.getElementById(marker).style.backgroundColor="yellow";
                                document.getElementById(marker).name = "filled";
                                player = true;  
                                break;
                            }
                }
            }
            /*
            boboard();
            */
        }
}
var rred =0;
var yyellow=0;
var flip = true;
var cRed=0;
var cYellow=0;

function checkWinner()
{
    for(var w = 1; w <=6; w++)
    {  
        for(var q = 1; q<=7;q++)
        {
            var teller ="row"+w+"-col"+q;
            var hold = document.getElementById(teller).style.backgroundColor;
            if(hold=="red")
            {  
                if(flip ==true)
                {
                    cRed+=1;
                }
                else 
                {
                    cYellow=0;
                    cRed+=1;
                   // break;
                }
                if(cRed==4)
                {
                    alert("Winner! Congratulations Player Red!");
                }
                flip=true;
                console.log("cRed"+cRed);
                console.log("cYellow"+cYellow);
            }
            else if(hold=="yellow")
            {
                flip=false;
                if(flip ==false)
                {
                    cYellow+=1;
                }
                else
                {
                    cRed=0;
                    cYellow+=1;
                   // break;
                }
                if(cYellow==4)
                {
                    alert("winner! Congratulations Player Yellow!");
                }
                
                console.log("cRedY"+cRed);
                console.log("cYellowY"+cYellow);
            }
        }
    }
}