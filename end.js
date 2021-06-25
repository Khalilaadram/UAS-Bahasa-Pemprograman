const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


localStorage.setItem("highScores", []);
console.log(localStorage.getItem("highScore"));


saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore
    };
    highScore.push(score);

    highScore.sort( (a,b) => b.score - a.score)
    console.log(highScore);
};