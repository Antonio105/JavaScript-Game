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
//window.setInterval(checkWinner,3000);
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

var theList = document.getElementsByTagName("td");
function idCheck()
{
    //var tempterment =theList.indexOf("red",0);

        var counter = new Number;
        
        for(var l =0;l<=theList.length;l++)
        {
            var temp = theList.item(l).style.backgroundColor;
            //var temp1 = theList.item(l+1).name;
            //var temp2 = theList.item(l+2).name;
            //var temp3 = theList.item(l+3).name;
         
           console.log(theList.item(l).style.backgroundColor);
           
            // horizontal check
            if(theList.item(l).style.backgroundColor == "red" && theList.item(l+1).style.backgroundColor == "red" && theList.item(l+2).style.backgroundColor == "red" && theList.item(l+3).style.backgroundColor == "red")
            {
                alert("Congrats red player, you won buy get 4 in a row horizontal!");
                
            }
            else if( theList.item(l).style.backgroundColor == "yellow" && theList.item(l+1).style.backgroundColor == "yellow" && theList.item(l+2).style.backgroundColor == "yellow" && theList.item(l+3).style.backgroundColor == "yellow")
            {
                alert("Congrats yellow player, you won buy get 4 in a row horizontal!");
            } 
            
            
            //vertical check
            if(theList.item(l).style.backgroundColor == "red" && theList.item(l+7).style.backgroundColor == "red" && theList.item(l+14).style.backgroundColor == "red" && theList.item(l+21).style.backgroundColor == "red")
            {
                alert("Congrats red player, you won buy get 4 in a row vertical!");
            }
            else if( theList.item(l).style.backgroundColor == "yellow" && theList.item(l+7).style.backgroundColor == "yellow" && theList.item(l+14).style.backgroundColor == "yellow" && theList.item(l+21).style.backgroundColor == "yellow")
            {
                alert("Congrats yellow player, you won buy get 4 in a row vertical!");
            } 

            //diagonal check down
            if(theList.item(l).style.backgroundColor == "red" && theList.item(l+8).style.backgroundColor == "red" && theList.item(l+16).style.backgroundColor == "red" && theList.item(l+24).style.backgroundColor == "red")
            {
                alert("Congrats red player, you won buy get 4 in a row diagonal down!");
            }
            else if( theList.item(l).style.backgroundColor == "yellow" && theList.item(l+8).style.backgroundColor == "yellow" && theList.item(l+16).style.backgroundColor == "yellow" && theList.item(l+24).style.backgroundColor == "yellow")
            {
                alert("Congrats yellow player, you won buy get 4 in a row diagonal down!");
            }  
            
            //diagonal check up
            if(theList.item(l).style.backgroundColor == "red" && theList.item(l+6).style.backgroundColor == "red" && theList.item(l+12).style.backgroundColor == "red" && theList.item(l+18).style.backgroundColor == "red")
            {
                alert("Congrats red player, you won buy get 4 in a row diagonal up!");
            }
            else if( theList.item(l).style.backgroundColor == "yellow" && theList.item(l+6).style.backgroundColor == "yellow" && theList.item(l+12).style.backgroundColor == "yellow" && theList.item(l+18).style.backgroundColor == "yellow")
            {
                alert("Congrats yellow player, you won buy get 4 in a row diagonal up!");
            }  
            
        }
     
  
}
function winners()
{
  
             
        theList.filter(idCheck());
  

}


function checkWinner()
{
    for(var w = 1; w <=6; w++)
    {  
        for(var q = 1; q<=7;q++)
        {
            var teller ="row"+w+"-col"+q;
           
            var hold = document.getElementById(teller).style.backgroundColor;
            console.log(hold);
            var track =0;var tracker = 0;
            if(hold=="red")
            {  
                cRed=1;
                track = track +2;
                console.log(track+"red");
                /*for(var count = 0;count <=3;count++)
                {
                    teller ="row"+w+"-col"+(q+count);
                    var listing = document.getElemensByTagName("td"");
                    if(hold =="red")
                    {
                        cRed+=1;
                    }

                }
                */
                flip=false;
                if(flip ==false)
                {
                    //cRed+=1;
                }
                else
                {
                    cYellow=0;
                    cRed+=1;
                   break;
                }
                
                if(cRed==4)
                {
                    
                }
                flip=true;
               // console.log("cRed"+cRed);
              //  console.log("cYellow"+cYellow);
            }
            else if(hold=="yellow")
            {
                tracker = tracker = 2;
                console.log(tracker+"yellow");
                flip=false;
                if(flip ==false)
                {
                    cYellow+=1;
                }
                else
                {
                    cRed=0;
                    cYellow+=1;
                   break;
                }
                if(cYellow==4)
                {
                    
                }
                
                //console.log("cRedY"+cRed);
                //console.log("cYellowY"+cYellow);
            }
        }
    }
}

function animation1() 
{

    var box = document.getElementById('animation');
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() 
    {
    if(pos==250)
    {
        clearInterval(id);
    }
    else
    {
        pos++;
        box.style.top = pos +'px';
        box.style.left = pos + 'px';
    }
    }
}