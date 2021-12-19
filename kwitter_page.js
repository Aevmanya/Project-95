var firebaseConfig = {
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
    
user_name= localStorage.getItem("Username");
room_name= localStorage.getItem("Room_name");
    
function send(){
          
msg= document.getElementById("msg").value;
          
firebase.database().ref(room_name).push({
          
Name: user_name,
Message: msg, 
Like:0
          
});
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
    
Name= message_data['Name'];
Message= message_data['Message'];
Like= message_data['Like'];
name_with_tag= "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>" + Message + "</h4>"
like_button= "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + Like + " onclick= 'update_likes(this.id)'>"
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'> &nbsp;" + Like + "</span></button></hr>"
row= name_with_tag + message_with_tag + like_button + span_with_tag;

document.getElementById("output").innerHTML += row;
    
} });  }); }
getData();
    
    
function update_likes(message_id){
    
button_id= message_id;
Like= document.getElementById(button_id).value;
Update_like= Number(Like) + 1;
    
firebase.database().ref(room_name).child(message_id).update({
Like: Update_like
});
};


function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("Room_name");
        
window.location= "index.html";
}