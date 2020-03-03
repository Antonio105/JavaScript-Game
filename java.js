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
        for(var count = 1; count <=6; count++)
        {
            if(document.getElementById(currentID).name=="empty")
            {
                tcpx+=1;
                var marker = "row"+tcpx+"-col"+currentPositionY;
                if(document.getElementById(marker).name=="filled")
                    {
                        if(player == true)
                        {
                            document.getElementById(currentID).style.backgroundColor="red";
                            document.getElementById(currentID).name = "filled";
                            console.log(document.getElementById(currentID).name);
                            player = false;
                        }
                        else if(player == false)
                        {
                            document.getElementById(currentID).style.backgroundColor="yellow";
                            document.getElementById(currentID).name = "filled";
                            console.log(document.getElementById(currentID).name);
                            player = true;  
                        }
                    }
                else
                    {
                        tcpx = 6;
                        var marker = "row"+tcpx+"-col"+currentPositionY;
                        if(document.getElementById(marker).name=="empty")
                        {
                            if(player == true)
                            {
                                document.getElementById(currentID).style.backgroundColor="red";
                                document.getElementById(currentID).name = "filled";
                                console.log(document.getElementById(currentID).name);
                                player = false;
                            }
                            else if(player == false)
                            {
                                document.getElementById(currentID).style.backgroundColor="yellow";
                                document.getElementById(currentID).name = "filled";
                                console.log(document.getElementById(currentID).name);
                                player = true;  
                            }
                        }
                    }
            }
        }   
}
