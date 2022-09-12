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


var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
