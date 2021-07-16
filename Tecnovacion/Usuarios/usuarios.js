  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjw2qU85FgPy7lSGKEOxchodOKRUgaGGk",
    authDomain: "tecnovacion-a0fbc.firebaseapp.com",
    projectId: "tecnovacion-a0fbc",
    storageBucket: "tecnovacion-a0fbc.appspot.com",
    messagingSenderId: "949606260583",
    appId: "1:949606260583:web:208746dfab3379fa9f59c2",
    measurementId: "G-0MFPNH48EH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //console.log(proyecto.name);
  firebase.analytics();

  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;    
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    if (emailVerified === false) {
      textVer = "- Correo no verificado";
    } else {
      textVer = "- Correo verificado";
    }
    document.getElementById('login').innerHTML = `<p>Estas Logeado con el correo ` + user.email + ` ` + textVer + 
      `<p> <button onclick="cerrarSesion()">Cerrar Sesión</button>`;
    console.log(user);
  } else {
    document.getElementById('login').innerHTML = "No estas Logeado ";
  }
});

  function registrar() {
      var email = document.getElementById('emailR').value;
      var password = document.getElementById('passR').value;
    //alert("email: "+ email + " / password: " + password);
    firebase.auth().createUserWithEmailAndPassword(emailR, passR)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);

  })
  .then(function(){
    verificarCorreo();
  });
  }

  function ingresar() {
      var emailL = document.getElementById('emailS').value;
      var passwordL = document.getElementById('passS').value;
    //alert("email: "+ email + " / password: " + password);
    firebase.auth().signInWithEmailAndPassword(emailS, passS)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function verificarCorreo(){
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
}

function cerrarSesion() {
  firebase.auth().signOut()
  .then(function () {
  console.log('salir');
  })
  .catch(function(error) {
     console.log(error);
   })

//   firebase.auth().signOut().then(() => {
//     console.log('salir');
// }).catch((error) => {
//   console.log(error);
// });
  
}