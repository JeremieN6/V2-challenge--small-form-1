document.querySelectorAll('.content-option').forEach(function(label) {
    label.addEventListener('click', function() {
        var checkbox = label.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            label.style.backgroundColor = '#652CD1'; // Si déjà coché, décoche et réinitialise le fond
            label.style.border = '1px solid #845EEE';
            label.style.color= '#FFF';
        } else {
            label.style.backgroundColor = ''; // Changement de fond pour indiquer la sélection
            label.style.color = '#A1A1A9';
            label.style.border ='1px solid #A1A1A9';
        }
    });
});

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");


var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");

var userName;
var userEmail;
var userTopics = [];

var putUserName = document.getElementById("label-summary-profil-value-name");
var putUserEmail = document.getElementById("label-summary-profil-value-email");
var userTopicsContainerList = document.getElementById("userTopics");

var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");

var current_step = document.getElementById("current_step");


function validateEmail(email) {
    // Expression régulière pour valider une adresse e-mail
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function theStep1(){
    userName = inputName.value;
    userEmail = inputEmail.value;
    console.log("Here is my name : " + userName + "\nHere is my Email : " + userEmail);

    dot2.classList.add("done");
    current_step.innerText = 2;

    // Check if the email is valid
    if (validateEmail(userEmail)) {
        console.log("Adresse e-mail valide !");
        step1.style.display = "none";
        step2.style.display = "flex";
    } else {
        console.log("Adresse e-mail invalide !");
        alert("⚠️ Please, insert a valid email. Indeed :" +userEmail+" is not valid!");
    }
}

function theStep2(){
    step2.style.display = "none";
    step3.style.display = "flex";

     // Get all checkbox type input elements
     var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

     // Create an array to stock label names
     var labelsNames = [];
 
     // Browse all checked elements
     checkboxes.forEach(function(checkbox) {
         // Get input ID
         var inputId = checkbox.id;
 
         // Get label element corresponding to the input
         var label = document.querySelector('label[for="' + inputId + '"]');
 
         // Get label text to add it to the array
         userTopics.push(label.textContent.trim());
     });
 
     // Display label names in console to test
     console.log("Noms des labels sélectionnés : ", userTopics);

     // Display informations for the next modal
      putUserName.innerHTML = userName;
      putUserEmail.innerHTML = userEmail;

      userTopics.forEach(function(topic) {
        var newLiItem = document.createElement("li");
        newLiItem.classList.add("label-summary-topics-value");
        newLiItem.textContent = topic;
        userTopicsContainerList.appendChild(newLiItem);
    });

    dot3.classList.add("done");
    current_step.innerText = 3;
}

function refreshPageWithDelay() {
    // Ajoutez un délai de 3000 millisecondes (3 secondes) avant de rafraîchir la page
    setTimeout(function() {
        window.location.reload(); // Rafraîchir la page
    }, 3000);
}

function submit(){
    swal("Good job!", "You filled this form successfully 🫡", "success");

      step3.style.display = "none";
      step1.style.display = "flex";
      dot2.classList.remove("done");
      dot3.classList.remove("done");
      current_step.innerText = 1;
      refreshPageWithDelay()
}