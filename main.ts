//listing element

document
  .getElementById("resumeform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experinceElement = document.getElementById(
      "experince"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      profilePicInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experinceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experince = experinceElement.value;
      const skills = skillsElement.value;

      //profile picture element
      const profilePicInputFile = profilePicInput.files?.[0]
      const profilePicURL = profilePicInputFile ? URL.createObjectURL(profilePicInputFile) : "";

      //create resume output
      const resumeOutPut = `<h2>Resume</h2>
      ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profilePic">` : ""}
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>email:</strong> ${email}</p>
    <p><strong>phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experince</h3>
    <p>${experince}</p>

    <h3>Skill</h3>
    <p>${skills}</p>


    `;



    const resumeOutPutElement = document.getElementById('resumeOutput')
    if(resumeOutPutElement){
        resumeOutPutElement.innerHTML = resumeOutPut

    }else {
        console.error('the resume output elements are missing');
    }  
    }else{
        console.error('one or more output are missing');
        
    
    }
  });
