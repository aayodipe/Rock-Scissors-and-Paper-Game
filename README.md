# Rock-Scissors-and-Paper-Game

Rock–paper–scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock", "paper", and "scissors". Wikipedia

However, here, the player play against computer. The player press bewteen the Letters R- Rock, S- Scissors and P-Paper to initialize the game. Once the player press one Key, the Computer generate its own letter then the two Letter are compare against each other to determine the winner based on RSP principal.

The RSP PRINCIPAL:
Rock: wins against scissors, loses to paper, and ties against itself.
Paper: wins against rock, loses to scissors, and ties against itself.
Scissors: wins against paper, loses to rock, and ties against itself.

ABOUT THE PROGRAMMING OF THIS GAME

The game is writing in vanilla Javascript.
The player can only chose between R,S and P 
The game is case insensitive because whichever the key the user press between the three availiable letter, it is automatically converted to uppercase.
The game have a live of 10. At each keypressed, if the letter press is either of the three letters, the live reduce by once else it does nothing.
once the live is 0, the game determine either the player win or loss or tie then alert with a message.
