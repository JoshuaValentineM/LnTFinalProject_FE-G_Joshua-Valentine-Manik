const firebaseConfig = {
  apiKey: "AIzaSyAk7F2W86tZgD-0bG_WlRrz7MPu-MO7QPA",
  authDomain: "lnt-fe---final-project.firebaseapp.com",
  databaseURL: "https://lnt-fe---final-project-default-rtdb.firebaseio.com",
  projectId: "lnt-fe---final-project",
  storageBucket: "lnt-fe---final-project.appspot.com",
  messagingSenderId: "672433683017",
  appId: "1:672433683017:web:387e828081960a05019d98",
  measurementId: "G-DRJTM3PJSX"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref('EventTicket')

const regisForm = document.querySelector('section form');

regisForm.addEventListener('submit', function(firebaseForm) {
  firebaseForm.preventDefault();
  const name = document.querySelector('#name').value;
  const event = document.querySelector('#event').value;
  const emailAddress = document.querySelector('#emailAddress').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;

  let newTicket = database.push();
  newTicket.set({
    name: name,
    event: event,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber
  })
});


// Registration Form
function validateForm() {
  var name = document.getElementById('name').value;
  var emailAddress = document.getElementById('emailAddress').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var event = document.getElementById('event').value

  if (name == "" || emailAddress == "" || phoneNumber == "") {
    alert("Please fill out every field!")
  }

  if (document.registForm.name.length < 3) {
    alert("Name must be at least 3 characters");
    return false;
  }
  
  if(phoneNumber.length > 14) {
    alert("Maximum digits for phone number is 14")
    return false;
  }

  if(!phoneNumber.value == /^08[0-9][0-9]{7,12}$/.test(phoneNumber)){
    return false;
  }

  return true;
}