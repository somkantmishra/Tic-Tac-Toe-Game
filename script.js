console.log('script started...');

var turn = "X";

var b = ["1", "", "", "", "2", "", "", "", "3"];

var winner = "nil";

function resetgame()
{
    for(let i = 0; i<9; i++)
    {
        b[i]=i;
    }
    for(let i = 0; i<9; i++)
    {
        document.querySelectorAll(".cell")[i].firstElementChild.style.width = "0";
        document.querySelectorAll(".cell")[i].lastElementChild.style.width = "0";
    }
    turn = "X";
    winner = "nil";
    document.querySelector(".turn").innerText = "X's Turn";
}

document.querySelector(".btn").addEventListener("click", function()
{
    resetgame();
});

function check(cur)
{
    if(b[0] === b[1] && b[1] === b[2] || 
       b[3] === b[4] && b[4] === b[5] || 
       b[6] === b[7] && b[7] === b[8] || 
       
       b[0] === b[3] && b[3] === b[6] || 
       b[1] === b[4] && b[4] === b[7] || 
       b[2] === b[5] && b[5] === b[8] || 
       
       b[0] === b[4] && b[4] === b[8] || 
       b[2] === b[4] && b[4] === b[6])
    {
        winner = cur;
        document.querySelector(".turn").innerText = cur + " Won, Reset to Play New Game.";
    }
}

for(let i = 0; i<9; i++)
{
    document.querySelectorAll(".cell")[i].addEventListener("click",
    function()
    {
        if(b[i] === "X" || b[i] === "O" || winner !== "nil") return;
        var cur = turn;
        if(turn === "X")
        {
            this.firstElementChild.style.width = "7vw";
            turn = "O";
            document.querySelector(".turn").innerText = "O's Turn";
            b[i] = "X";
        }
        else
        {
            this.lastElementChild.style.width = "7vw";
            turn = "X";
            document.querySelector(".turn").innerText = "X's Turn";
            b[i] = "O";
        }

        check(cur);

    });
}