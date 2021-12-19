var firebaseConfig= {
apiKey: "AIzaSyA-IZ6d5IOObv6yq07E2oi8EIDHa58EC6o",
authDomain: "chat-app-297c3.firebaseapp.com",
databaseURL: "https://chat-app-297c3-default-rtdb.firebaseio.com",
projectId: "chat-app-297c3",
storageBucket: "chat-app-297c3.appspot.com",
messagingSenderId: "386309838238",
appId: "1:386309838238:web:a87d28151bf90ae902728f",
measurementId: "G-LXRGDRTS3F"
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row= "<div class='room_name' id="+Room_names+" onclick='Redirect_to_room_name(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
});});}
getData();
    
function add_room_name(){
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adduser"
});
    
localStorage.setItem("Room_name", room_name);
    
window.location= "Kwitter_chat.html";
}
    
function Redirect_to_room_name(name){    
localStorage.setItem("Room_name", name);
window.location= "Kwitter_chat.html";
}
    
user_name= localStorage.getItem("Username");
    
function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("Room_name");
    
window.location= "index.html";
}