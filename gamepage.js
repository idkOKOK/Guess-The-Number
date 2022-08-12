// random value generated
var y = Math.floor(Math.random() * 20 + 1)
// counting the number of guesses
var playername = localStorage.getItem("player_name");
var guess = 1;
// made for correct Guess
function submit()
{
    var x = document.getElementById("guessField").value;
    if (x == y)
    {
      alert("CONGRATULATIONS "+playername+" YOU GUESSED IT RIGHT IN " +guess + " GUESSES ");
      guess = 1;
    }
    else if (x > y)

   {
     guess++;
     alert("OOPS SORRY!! TRY A SMALLER NUMBER");
   } 

   else
   {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
   }
}

function playagain()
{
  y = Math.floor(Math.random() * 20 + 1);
}
  
// function for number guessed by user