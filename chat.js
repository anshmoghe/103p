// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
     localStorage.setItem("user_name", user_name);
     window.location = "chat_room.html";
}



