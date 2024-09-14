// accepts a selector for a section on the page and smotth scrolls to it
function scrollToAboutSection() {
    document.querySelector('.about-section').scrollIntoView({ behavior: "smooth" });
}


function scrollToProjectsSection() {
    document.querySelector('.projects-section').scrollIntoView({ behavior: "smooth" });
}

function scrollToResumeSection() {
    document.querySelector('.resume-section').scrollIntoView({ behavior: "smooth" });
}

function scrollToContactSection() {
    document.querySelector('.contact-section').scrollIntoView({ behavior: "smooth" });
}