
var b = ["1", "", "", "", "2", "", "", "", "3"];

var turn = "X";
var winner = "nil";
var count = 0;

function resetgame()
{
    for(let i = 0; i < 9; i++)
    {
        b[i] = i;
    }
    for(let i = 0; i < 9; i++)
    {
        document.querySelectorAll(".cell")[i].querySelector(".X").style.width = "0";
        document.querySelectorAll(".cell")[i].querySelector(".O").style.width = "0";
    }
    turn = "X";
    winner = "nil";
    count = 0;
    document.querySelector(".turn").innerText = turn + " - Turn";
}

resetgame();

document.querySelector(".btn").addEventListener("click", function()
{
    resetgame();
});

function check(cur)
{
    if(b[0] == b[1] && b[1] == b[2] || 
       b[3] == b[4] && b[4] == b[5] || 
       b[6] == b[7] && b[7] == b[8] || 
       
       b[0] == b[3] && b[3] == b[6] || 
       b[1] == b[4] && b[4] == b[7] || 
       b[2] == b[5] && b[5] == b[8] || 
       
       b[0] == b[4] && b[4] == b[8] || 
       b[2] == b[4] && b[4] == b[6])
    {
        winner = cur;
        var oldbg = document.querySelector("body").style.backgroundColor;
        document.querySelector("body").style.backgroundColor = "white";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor = oldbg;
        }, 100);
        
        document.querySelector(".turn").innerText = cur + " - Winner!!!";
    }
    if(count == 9 && winner == "nil")
    {
        document.querySelector(".turn").innerText = "Draw!!!";
    }
}

for(let i = 0; i < 9; i++)
{
    document.querySelectorAll(".cell")[i].addEventListener("click",
    function()
    {
        if(winner != "nil" || count == 9)
        {
            resetgame();
            return;
        }
        if(b[i] == "X" || b[i] == "O" || winner != "nil")
        {
            return;
        }
        var cur = turn;
        this.querySelector("." + turn).style.width = "16vmin";
        turn = ( turn == "X" ? "O" : "X");
        document.querySelector(".turn").innerText = turn + " - Turn";
        b[i] = turn;
        count++;
        check(cur);
    });
}