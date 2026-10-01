form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const section = document.getElementById("section").value;
    const email = document.getElementById("email").value;

    // Validation
    if (name === ""|| course === "" || year === "" || section === "" || email === "") {
        alert("Please fill out all the fields");
        return;
    }

    // Display output (simple concatenation)
    document.getElementById("preview").innerHTML =
        "<h2>Student Information Preview</h2>" +
        "Name: " + name + "<br>" +
        "Course: " + course + "<br>" +
        "Year Level:" + year + "<br>" +
        "Section: " + section + "<br>" +
        "Email Adress: " + email;
});

    clearBtn.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("name").value = "";
      document.getElementById("course").value = "";
      document.getElementById("year").value = "";
      document.getElementById("section").value = "";
      document.getElementById("email").value = ""; 
      
      document.getElementById("preview").innerHTML = 
      "<h2>Student Information Preview</h2>";
});