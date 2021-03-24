// HANDLE THE LOAD EVENT OF THE WINDOW
function init() {
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;
  
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);
  
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(
      (window.screen.width - width) / 2,
      (window.screen.height - height) / 2
    );
  
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    let cancel = document.getElementById("cancel");
  
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    cancel.addEventListener("click", () => {
      window.close();
    });
  
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    let empForm = document.getElementById("empForm");
  
    empForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
      let id = document.getElementById("id").value;
      let name = document.getElementById("name").value;
      let extension = document.getElementById("extension").value;
      let email = document.getElementById("email").value;
      let department = document.getElementById("department").value;
  
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
      let loginDetails = window.opener.document.getElementById("loginDetails");
  
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        loginDetails.innerHTML = `ID: ${id} <br>Name: ${name} <br>Extension: ${extension} <br>Email: ${email} <br>Department: ${department}`;
        
// CLOSE THE POPUP
        window.close();
  
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
    });
  }
  
  window.addEventListener("load", init);