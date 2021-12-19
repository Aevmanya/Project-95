function adduser(){
user_name= document.getElementById("User_name").value;
localStorage.setItem("Username", user_name);
window.location= "kwitter_room.html";
}