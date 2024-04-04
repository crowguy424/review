const reviews = [{
    id: 1,
    name: "deepto osman",
    job: "project manager",
    img: 'deepto.osman.jpeg',
    text: "As a project manager for web development, I am responsible for overseeing the entire lifecycle of a web development project. This includes planning, executing, monitoring, and closing projects. I work closely with clients to understand their needs and goals, and then develop detailed project plans and schedules to meet those requirements within the given time and budget constraints. I communicate with all stakeholders, including developers, designers, and content creators, to ensure everyone is on the same page and understands the project requirements. Throughout the project, I monitor progress and adjust plans as necessary to keep things on track. This often involves managing budgets, timelines, and resources, as well as identifying and mitigating risks and issues that may arise. I also ensure that quality standards are met by performing regular quality"
},
{
    id: 2,
    name: "tabassum busra",
    job: "web designer",
    img:
      "bush.jpg",
    text:
      "As a web designer, I am responsible for designing and creating the visual elements of websites, including layout, color schemes, typography, and graphics. I work closely with clients or project managers to understand their needs and objectives, and then use my skills in design software like Adobe Photoshop or Sketch to create mockups and wireframes. Once the client has approved the design, I then translate it into a functional website using web development technologies like HTML, CSS, and JavaScript. This involves coding and testing the site across different browsers and devices to ensure that it is both user-friendly and visually appealing.",
  },
  {
    id: 3,
    name: "shadab junayed",
    job: "intern",
    img:
      "pss.jpg",
    text:
      "As an IT intern, my responsibilities include providing technical support to end-users and assisting with various tasks related to software and hardware maintenance. I work under the supervision of a senior IT professional and learn about the company's technology infrastructure, including computer networks, servers, and security systems. My day-to-day duties may involve troubleshooting computer issues, setting up new hardware and software, performing data backups, and updating documentation and procedures. I also participate in meetings and training sessions to learn about new technologies and improve my skills. Overall, my role as an IT intern is to provide valuable assistance to the IT team while gaining practical experience and developing my skills for a future career in the industry.",
  },
  {
    id: 4,
    name: "mosharraf harun",
    job: "web developer",
    img:
      "mos2.jpg",
    text:
      "As a web developer, I design and build websites using a variety of programming languages and tools. My primary responsibilities include writing clean, maintainable code that meets client specifications, developing server-side applications, and designing user interfaces. I work with clients or project managers to understand their needs and objectives, and then use my technical expertise to develop custom solutions tailored to their requirements. This often involves working with front-end frameworks like React or Vue.js, back-end technologies like Node.js or Ruby on Rails, and databases like MySQL or MongoDB. I am also responsible for testing the website across different browsers and devices to ensure it functions correctly and is user-friendly. Additionally, I collaborate with other members of the team, such as designers and content creators.",
  },

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
