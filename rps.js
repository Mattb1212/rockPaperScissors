
    var compPlay;
    var userPlay = document.querySelector('#playerEntry');
    var submit = document.querySelector('button');
    var outcome = document.querySelector('#outcomeMessage')

    submit.addEventListener("click", playGame);

    function playGame(){

        ranNum= Math.floor(Math.random() * 3);
        
        //turning random number into comp choices - 0 = rock, 1 = paper, 2 = scissors
        if (ranNum == 0) {
            compPlay = "rock"
        } else if (ranNum == 1){
            compPlay = "paper"
        } else {
            compPlay = "scissors"
        }

        //if statements deciding who wins and outputs resulting text if user entered valid option
        
        if (userPlay.value == "rock"||userPlay.value == "paper"||userPlay.value == "scissors"){

            if (userPlay.value == "rock" && compPlay == "scissors" || userPlay.value == "paper" && compPlay == "rock" || userPlay.value == "scissors" && compPlay == "paper" ){
                outcome.textContent = "Player Won! Computer chose " + compPlay;
            }else if (userPlay.value == compPlay){
                outcome.textContent = "Tie Game! Both players chose "  + compPlay;
            }else{
                outcome.textContent = "Computer Won! Computer chose " + compPlay;
            }
        }else{
            outcome.textContent = "Invalid choice. Please enter exactly rock, paper or scissors."
        }

    }