var firebaseConfig = {
    apiKey: "AIzaSyCSkDppXduvnhIYgby9xDloNivKh2erfmU",
    authDomain: "kwitter-779f1.firebaseapp.com",
    databaseURL: "https://kwitter-779f1-default-rtdb.firebaseio.com",
    projectId: "kwitter-779f1",
    storageBucket: "kwitter-779f1.appspot.com",
    messagingSenderId: "225000484829",
    appId: "1:225000484829:web:fe072adbded8890787d034"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function  addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("Room Name-"+ Room_names);
  row= "<div class='room_name' id="+Room_names +"onclick='redirectToRoomName(this.id)>#"+ Room_names+ "</div><hr>"
    //End code
    });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="chat_page.html";
}
function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");

window.location="index.html";
}