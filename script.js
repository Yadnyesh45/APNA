// let buttton = document.getElementById("btn")
// buttton.addEventListener("click", () => {
//     document.querySelector(".para").innerHTML = "A guy who can able to create web pages currently learning react.js";
// )
// let About = document.querySelector(".btn2");
// let content = document.getElementById("#innerContent")

// About.addEventListener("click",() =>{
//     alert("hi")
// content.classList.toggle('is-open');
// });

// Grab the buttons
const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const skillsBtn = document.getElementById('skillsBtn');
const contactBtn = document.getElementById('contactBtn');

// Grab the sections
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skills');
const contactSection = document.getElementById('contact');

homeBtn.addEventListener('click', function () {
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

aboutBtn.addEventListener('click', function () {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

skillsBtn.addEventListener('click', function () {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener('click', function () {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});