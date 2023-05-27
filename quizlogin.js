function adduser(){
    var player1 = document.getElementById("username1").value;
    var player2 = document.getElementById("username2").value;

    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);

    window.location="quizpage.html";
}