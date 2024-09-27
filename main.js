//listing element
var _a;
(_a = document
    .getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePicInput = document.getElementById("profilePic");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experinceElement = document.getElementById("experince");
    var skillsElement = document.getElementById("skills");
    if (profilePicInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experinceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experince = experinceElement.value;
        var skills = skillsElement.value;
        //profile picture element
        var profilePicInputFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePicInputFile ? URL.createObjectURL(profilePicInputFile) : "";
        //create resume output
        var resumeOutPut = "<h2>Resume</h2>\n      ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profilePic\">") : "", "\n    <p><strong>Name:</strong> ").concat(name_1, "</p>\n    <p><strong>email:</strong> ").concat(email, "</p>\n    <p><strong>phone:</strong> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experince</h3>\n    <p>").concat(experince, "</p>\n\n    <h3>Skill</h3>\n    <p>").concat(skills, "</p>\n\n\n    ");
        var resumeOutPutElement = document.getElementById('resumeOutput');
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutPut;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
