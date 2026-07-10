
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var ser = document.getElementById("services");
    var msg = document.getElementById("message");


    var nameValue = name.value;
    var emailValue = email.value;
    var serValue = ser.value;
    var msgValue = msg.value;
    var formMessage = document.getElementById("formMessage");

    console.log(nameValue)
    console.log(emailValue)
    console.log(serValue)
    console.log(msgValue)

      if (nameValue.length === 0) {
    formMessage.innerHTML = "Please enter your name.";
    } else if (emailValue.length === 0) {        
    formMessage.innerHTML = "Please enter your email.";
      } else if (!emailValue.includes("@")) 
    {formMessage.innerHTML = "Please enter a valid email address.";
      } else if (serValue.length === 0){         
    formMessage.innerHTML = "Please select a service.";
    }    
      else {
      formMessage.innerHTML = "Thank you! Your request has been sent successfully.";
      document.getElementById("contactForm").reset();
    }

  
  
  }

);




  var ham = document.querySelector(".hamburguer");
  var men = document.querySelector("nav");

ham.addEventListener("click", function() {

men.classList.toggle("nav-open")
  


});

var nav = document.querySelectorAll("nav a")

nav.forEach(function(a) {
 a.addEventListener("click", function(){
  men.classList.remove("nav-open")
 })

});
