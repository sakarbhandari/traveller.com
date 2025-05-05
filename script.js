function learnMore(place) {
    alert("More info about " + place + " coming soon!");
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Thanks for reaching out! I’ll get back to you soon.";
    this.reset();
  });
  