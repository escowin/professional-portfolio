// data
const expertiseEl = document.getElementById("skills");
const experienceEl = document.getElementById("experience");

// data | objects & arrays correspond used to populate resume sections
const expertise = {
  languages: ["html", "css", "javascript", "es6", "json", "sql"],
  frameworks: {
    css: ["bootstrap"],
    js: [
      "bcrypt",
      "day",
      "moment",
      "handlebars",
      "inquirer",
      "jest",
      "jquery",
      "react",
      "redux",
      "sequelize",
      "node",
    ],
    db: ["mysql", "graphql", "nosql"],
  },
  paradigms: ["mvc", "oop", "orm", "rwd", "spa", "tdd"],
  tools: [
    "api",
    "git",
    "npm",
    "heroku",
    "insomnia",
    "jawsdb",
    "mongodb",
    "adobe&thinsp;cc",
    "corel&thinsp;painter",
    "wordpress",
    // "vscode",
  ],
};

const experience = [
  {
    company: "Vvh financial",
    role: "Site developer",
    year: "2022",
    duration: "present",
    location: "Dallas, TX",
    code: "bcrypt css express javascript mysql sequelize node react",
    description: [
      "Building an MVC app for company's clients and employees.",
      "Setting up the server, and routing its Rest API to faciliate frontend & backend communication.",
      "Writing great copy for a financial planner.",
    ],
    url: "https://github.com/escowin/vvh-financial",
  },
  {
    company: "2u, inc.",
    role: "Instructional specialist",
    year: "2022",
    duration: "present",
    location: "Houston, TX",
    code: "Rice University Coding Boot Camp Teacher's Assistant",
    description: [
      "Carrying out administrative tasks on behalf of the instructor.",
      "Helping students struggling with coursework during office hours.",
      "Recording and uploading Zoom classes to Canvas.",
    ],
    url: "#",
  },
  {
    company: "Escowin art",
    role: "Site developer",
    year: "2018",
    duration: "present",
    location: "Austin, TX",
    code: "html css javascript jquery adobe&thinsp;cc corel&thinsp;painter",
    description: [
      "Sole proprietorship to sell my art here in Austin. Built site to serve as my portfolio and business card.",
      //   "Initially built with wordpress, the site has since been rebuilt using html, css, javascript and jquery.",
      "Redesigning frontend using react.js",
      "Building sql database to re-incorporate e-commerce functionality.",
    ],
    url: "https://escowinart.com",
  },
  {
    company: "Blue strawberry",
    role: "Graphic novelist",
    year: "2017",
    duration: "5 years",
    location: "Austin, TX",
    code: "react.js css adobe&thinsp;suite corel&thinsp;painter",
    description: [
      "Wrote and illustrated a dialogue-less hero's journey narrative.",
      "Used Corel Painter to draw the artwork, and Adobe Suite for file formatting.",
      "Built site with CSS and React.js, passing props through components to display data dynamically.",
    ],
    url: "https://escowin.github.io/bluestrawberry/",
  },
  // {
  //     company: "",
  //     role: "",
  //     year: "",
  //     duration: "",
  //     location: "",
  //     code: "",
  //     description: [
  //         "",
  //         "",
  //     ]
  // },
];

// logic | display language data in expertise section
function generateExpertise(skillset) {
  // stringifies and styles the array />,/g, ">"
  const languages = skillset.languages.toString().replace(/,/g, " ");
  const cssFrameworks = skillset.frameworks.css.toString().replace(/,/g, " ");
  const jsFrameworks = skillset.frameworks.js.sort().toString().replace(/,/g, " ");
  const databases = skillset.frameworks.db.sort().toString().replace(/,/g, " ");
  const paradigms = skillset.paradigms.toString().replace(/,/g, " ");
  const tools = skillset.tools.toString().replace(/,/g, " ");

  return `
    <p>Languages</p><p class="skillset">${languages}</p>
    <p>Frameworks</p><p class="skillset">${cssFrameworks} ${jsFrameworks} ${databases}</p>
    <p>Paradigms</p><p class="skillset">${paradigms}</p>
    <p>Tools</p><p class="skillset">${tools}</p>`;
};

function displayExpertise() {
  let template = generateExpertise(expertise);
  expertiseEl.innerHTML = template;

  return expertiseEl;
};

// logic | displaying exp data in exp section
function generateExperience(exp) {
  let htmlArr = [];
  for (let i = 0; i < exp.length; i++) {
    let articleTemplate = `
        <article class="row">
            <div>
                <p class="year">${exp[i].year}</p>
                <p class="exp">${exp[i].duration}</p>
            </div>
            <div class="text-wrapper">
            <div class="left-text">
              <p class="position">${exp[i].role}</p>
              <p class="details">${exp[i].code}</p>
              <ul class="role details">
                ${generateDescription(exp[i].description)}
              </ul>
            </div>
            <div class="right-text">
              <p>
                <a href="${exp[i].url}" target="_blank">${exp[i].company}</a>
              </p>
              <p class="details">${exp[i].location}</p>
            </div>
          </div>
        </article>`;
    htmlArr.push(articleTemplate);
  }
  let result = htmlArr.toString().replace(/>,/g, ">");
  return result;
}

function generateDescription(description) {
  let htmlArr = [];
  for (let i = 0; i < description.length; i++) {
    let descriptionTemplate = `<li>${description[i]}</li>`;
    htmlArr.push(descriptionTemplate);
  }
  let result = htmlArr.toString().replace(/>,/g, ">");

  return result;
}

function displayExperience() {
  let template = generateExperience(experience);
  experienceEl.innerHTML = template;
  return experienceEl;
}

displayExpertise();
displayExperience();
