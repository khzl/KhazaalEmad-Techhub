// How To Accept User Input 

// Easy Way : window prompt
//let username = window.prompt("Enter Your Name");
// Proffessional Way : Html TextBox
document.getElementById("username").value = username;


document.getElementById("mySubmit").onclick = function (){
    username = document.getElementById("Text").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}