
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8fgusdt6VSudD8YO7kKLqD8vQbTnnMGc",
      authDomain: "my-chat-box-app.firebaseapp.com",
      databaseURL: "https://my-chat-box-app-default-rtdb.firebaseio.com",
      projectId: "my-chat-box-app",
      storageBucket: "my-chat-box-app.appspot.com",
      messagingSenderId: "734318685782",
      appId: "1:734318685782:web:e66b179a1b4de3c23d95f7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("welcome_user_name").innerHTML ="Welcome "+ user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function logout()
{
      
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}

function addRoom(){

      room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_room.html";
  
  
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_.html";
}
