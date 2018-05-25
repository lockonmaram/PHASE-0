-FIND goals
-SET team1SCore to 0
-SET team2Score to 0
-SET i to 0
-FOR i less than goals length
  i increment
    IF element i of goals is 'Gryffindor'
      team1Score increment
    ELSE IF element i of goals is 'Slytherin'
      team2Score increment
-IF team1Score is more than team2Score
    RETURN 'Gryffindor Juara Futsal Hogwarts 2018'
  ELSE IF team1SCore is less than team2Score
    RETURN 'Slytherin Juara Futsal Hogwarts 2018'
  ELSE IF team1Score is same as team2Score
    RETURN 'Draw, pertandingan akan dilanjutkan dengan penalty kick!'