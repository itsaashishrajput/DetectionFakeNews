// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  // apiKey: "xxxxx",
  // authDomain: "xxxxx",
  // databaseURL: "xxxxx",
  // projectId: "xxxxx",
  // storageBucket: "xxxxx",
  // messagingSenderId: "xxxxx"
  // const firebaseConfig = {
    apiKey: "AIzaSyCzpU86g9aL1fRX2vWsbX_eF4fuBldfAvM",
    authDomain: "feedback-form-f62be.firebaseapp.com",
    databaseURL: "https://feedback-form-f62be-default-rtdb.firebaseio.com",
    projectId: "feedback-form-f62be",
    storageBucket: "feedback-form-f62be.appspot.com",
    messagingSenderId: "995527550451",
    appId: "1:995527550451:web:9f426c8b3a128118c11e86",
    measurementId: "G-0JZQ8B7QYX"
  };
// };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}