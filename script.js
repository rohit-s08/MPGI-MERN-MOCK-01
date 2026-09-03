
// DOM Elements

const form = document.querySelector("#studentForm");

const studentName = document.querySelector("#studentName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const dob = document.querySelector("#dob");
const course = document.querySelector("#course");
const about = document.querySelector("#about");
const photo = document.querySelector("#photo");

const studentContainer =
    document.querySelector("#studentContainer");

const studentCount =
    document.querySelector("#studentCount");



const students = [];


// -------------------------------------
// Generate Unique ID
// -------------------------------------

let nextId = 1;


// -------------------------------------
// Error Elements
// -------------------------------------

const studentNameError =
    document.querySelector("#studentNameError");

const emailError =
    document.querySelector("#emailError");

const phoneError =
    document.querySelector("#phoneError");

const dobError =
    document.querySelector("#dobError");

const genderError =
    document.querySelector("#genderError");

const courseError =
    document.querySelector("#courseError");

const skillsError =
    document.querySelector("#skillsError");

const aboutError =
    document.querySelector("#aboutError");

const photoError =
    document.querySelector("#photoError");


// Clear Validation Messages

function clearErrors() {

    studentNameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    dobError.textContent = "";
    genderError.textContent = "";
    courseError.textContent = "";
    skillsError.textContent = "";
    aboutError.textContent = "";
    photoError.textContent = "";
}


// -------------------------------------
// Validate Student Name
// -------------------------------------

function validateName(name) {

    // Required
    if (name.trim() === "") {
        studentNameError.textContent =
            "Student name is required.";

        return false;
    }

    // Minimum 3 characters
    if (name.trim().length < 3) {
        studentNameError.textContent =
            "Name must contain at least 3 characters.";

        return false;
    }

    // Only letters and spaces
    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(name.trim())) {

        studentNameError.textContent =
            "Name can contain only letters and spaces.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Email
// -------------------------------------

function validateEmail(emailValue) {

    if (emailValue.trim() === "") {

        emailError.textContent =
            "Email is required.";

        return false;
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Phone
// -------------------------------------

function validatePhone(phoneValue) {

    if (phoneValue.trim() === "") {

        phoneError.textContent =
            "Phone number is required.";

        return false;
    }

    // Exactly 10 digits
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneValue.trim())) {

        phoneError.textContent =
            "Phone number must contain exactly 10 digits.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Date of Birth
// -------------------------------------

function validateDOB(dobValue) {

    if (dobValue === "") {

        dobError.textContent =
            "Date of birth is required.";

        return false;
    }

    const selectedDate =
        new Date(dobValue);

    const today =
        new Date();

    // Remove time from today's date
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {

        dobError.textContent =
            "Future dates are not allowed.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Gender
// -------------------------------------

function validateGender() {

    const selectedGender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    if (!selectedGender) {

        genderError.textContent =
            "Please select a gender.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Course
// -------------------------------------

function validateCourse() {

    if (course.value === "") {

        courseError.textContent =
            "Please select a course.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Skills
// -------------------------------------

function validateSkills() {

    const selectedSkills =
        document.querySelectorAll(
            'input[name="skills"]:checked'
        );

    if (selectedSkills.length === 0) {

        skillsError.textContent =
            "Please select at least one skill.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate About Student
// -------------------------------------

function validateAbout(aboutValue) {

    if (aboutValue.trim() === "") {

        aboutError.textContent =
            "About student is required.";

        return false;
    }

    return true;
}


// -------------------------------------
// Validate Photo
// -------------------------------------

function validatePhoto() {

    if (photo.files.length === 0) {

        photoError.textContent =
            "Please select a profile photo.";

        return false;
    }

    return true;
}


// -------------------------------------
// Get Selected Gender
// -------------------------------------

function getSelectedGender() {

    const selectedGender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    return selectedGender
        ? selectedGender.value
        : "";
}


// -------------------------------------
// Get Selected Skills
// -------------------------------------

function getSelectedSkills() {

    const selectedSkills =
        document.querySelectorAll(
            'input[name="skills"]:checked'
        );

    const skills = [];

    selectedSkills.forEach(function (skill) {

        skills.push(skill.value);

    });

    return skills;
}


// -------------------------------------
// Update Student Count
// -------------------------------------

function updateStudentCount() {

    studentCount.textContent =
        `Total Students: ${students.length}`;
}


// -------------------------------------
// Create Student Card
// -------------------------------------

function createStudentCard(student) {

    // Main card
    const card =
        document.createElement("div");

    card.classList.add("student-card");

    // Store ID using data-* attribute
    card.dataset.id = student.id;


    // Student Photo
    const image =
        document.createElement("img");

    image.src = student.photo;

    image.alt =
        `${student.name}'s profile photo`;


    // Student Name
    const heading =
        document.createElement("h3");

    heading.textContent =
        student.name;


    // Email
    const emailElement =
        document.createElement("p");

    emailElement.textContent =
        `Email: ${student.email}`;


    // Phone
    const phoneElement =
        document.createElement("p");

    phoneElement.textContent =
        `Phone: ${student.phone}`;


    // DOB
    const dobElement =
        document.createElement("p");

    dobElement.textContent =
        `Date of Birth: ${student.dob}`;


    // Gender
    const genderElement =
        document.createElement("p");

    genderElement.textContent =
        `Gender: ${student.gender}`;


    // Course
    const courseElement =
        document.createElement("p");

    courseElement.textContent =
        `Course: ${student.course}`;


    // Skills
    const skillsElement =
        document.createElement("p");

    skillsElement.classList.add("skills");

    skillsElement.textContent =
        `Skills: ${student.skills.join(", ")}`;


    // About
    const aboutElement =
        document.createElement("p");

    aboutElement.classList.add("about");

    aboutElement.textContent =
        `About: ${student.about}`;


    // Delete Button
    const deleteButton =
        document.createElement("button");

    deleteButton.classList.add("delete-btn");

    deleteButton.type = "button";

    deleteButton.textContent =
        "Delete";


    // Add everything to card
    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(emailElement);
    card.appendChild(phoneElement);
    card.appendChild(dobElement);
    card.appendChild(genderElement);
    card.appendChild(courseElement);
    card.appendChild(skillsElement);
    card.appendChild(aboutElement);
    card.appendChild(deleteButton);


    // Add card to container
    studentContainer.appendChild(card);
}


// -------------------------------------
// Reset Form
// -------------------------------------

function resetForm() {

    form.reset();

    clearErrors();
}


// -------------------------------------
// Form Submit Event
// -------------------------------------

form.addEventListener(
    "submit",
    function (event) {

        // Prevent browser refresh
        event.preventDefault();

        // Clear old validation messages
        clearErrors();


        // Read form values
        const nameValue =
            studentName.value.trim();

        const emailValue =
            email.value.trim();

        const phoneValue =
            phone.value.trim();

        const dobValue =
            dob.value;

        const courseValue =
            course.value;

        const aboutValue =
            about.value.trim();

        const genderValue =
            getSelectedGender();

        const skillsValue =
            getSelectedSkills();


        // Validate all fields
        const isNameValid =
            validateName(nameValue);

        const isEmailValid =
            validateEmail(emailValue);

        const isPhoneValid =
            validatePhone(phoneValue);

        const isDOBValid =
            validateDOB(dobValue);

        const isGenderValid =
            validateGender();

        const isCourseValid =
            validateCourse();

        const areSkillsValid =
            validateSkills();

        const isAboutValid =
            validateAbout(aboutValue);

        const isPhotoValid =
            validatePhoto();


        // Stop if any validation fails
        if (
            !isNameValid ||
            !isEmailValid ||
            !isPhoneValid ||
            !isDOBValid ||
            !isGenderValid ||
            !isCourseValid ||
            !areSkillsValid ||
            !isAboutValid ||
            !isPhotoValid
        ) {

            return;
        }


        // Get profile photo
        const selectedFile =
            photo.files[0];

        const reader =
            new FileReader();


        // Convert image to Data URL
        reader.onload = function () {

            // Create student object
            const student = {

                id: nextId++,

                name: nameValue,

                email: emailValue,

                phone: phoneValue,

                dob: dobValue,

                gender: genderValue,

                course: courseValue,

                skills: skillsValue,

                about: aboutValue,

                photo: reader.result

            };


            // Add object to students array
            students.push(student);


            // Create card dynamically
            createStudentCard(student);


            // Update count
            updateStudentCount();


            // Reset form
            resetForm();

        };


        // Read image
        reader.readAsDataURL(selectedFile);

    }
);


// -------------------------------------
// Event Delegation for Delete
// -------------------------------------

studentContainer.addEventListener(
    "click",
    function (event) {

        // Check whether Delete button was clicked
        if (
            event.target.classList.contains("delete-btn")
        ) {

            // Find the closest student card
            const card =
                event.target.closest(".student-card");


            // If no card found, stop
            if (!card) {
                return;
            }


            // Read student ID from data-id
            const studentId =
                Number(card.dataset.id);


            // Remove student from array
            const studentIndex =
                students.findIndex(
                    function (student) {
                        return student.id === studentId;
                    }
                );


            if (studentIndex !== -1) {

                students.splice(
                    studentIndex,
                    1
                );

            }


            // Remove only selected card
            card.remove();


            // Update count
            updateStudentCount();

        }

    }
);


// -------------------------------------
// Initial Count
// -------------------------------------

updateStudentCount();