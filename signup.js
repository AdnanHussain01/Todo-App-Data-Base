 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyD4Hj6zZ-CPTlW6dGpsU2j8fh4PtdfJK3s",
  authDomain: "todo-app-data-base-a80c8.firebaseapp.com",
  databaseURL: "https://todo-app-data-base-a80c8-default-rtdb.firebaseio.com",
  projectId: "todo-app-data-base-a80c8",
  storageBucket: "todo-app-data-base-a80c8.appspot.com",
  messagingSenderId: "226213010542",
  appId: "1:226213010542:web:08750ba9fd6063b28f9a7f",
  measurementId: "G-9DMFRWZVGS"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const auth = getAuth();


var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var passowrd = document.getElementById('passowrd');

window.signup = function (e){
    e.preventDefault();
    var obj = {
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        passowrd : passowrd.value,
    };

    createUserWithEmailAndPassword(auth , obj.email , obj.passowrd)
    .then(function(success){
        console.log(success.user.uid);
      window.location.replace('login.html')
    })
    .catch(function(err){
        console.log(err);
    })
}

