// Utility functions
const synonyms = [
  'marvelous',
  'delightful',
  'dreamy',
  'wicked',
  'brilliant',
  'smashing',
  'fine',
  'galactic',
  'grand',
];

function randomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function dayName(dayArray) {
  return dayArray[new Date().getDay()];
}

function shuffle(array) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Local data source
const DATA_URL = 'data.json';

// Fetch JSON utility
async function fetchJson(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error.stack);
    throw error;
  }
}

// Data functions
async function getData() {
  return await fetchJson(DATA_URL);
}

async function getJoke() {
  const data = await getData();
  return { data: data.jokes };
}

async function getQuote() {
  const data = await getData();
  return { data: data.quotes };
}

async function getProject() {
  const data = await getData();
  return { data: data.projects };
}

// Initialize sayings (jokes and quotes)
async function initializeSayings() {
  try {
    const [jokeResponse, quoteResponse] = await Promise.all([
      getJoke(),
      getQuote(),
    ]);
    const sayings = [...jokeResponse.data, ...quoteResponse.data];

    if (sayings.length > 0) {
      const randomSaying = sayings[Math.floor(Math.random() * sayings.length)];
      const sayingText = randomSaying.joke || randomSaying.quote;
      const sayingAuthor = randomSaying.who_said || 'Unknown';

      document.getElementById('saying-text').textContent = sayingText;
      document.getElementById('saying-author').textContent = sayingAuthor;
    }
  } catch (error) {
    console.error('Error fetching sayings:', error);
    document.getElementById('saying-text').textContent =
      'Welcome to my portfolio!';
    document.getElementById('saying-author').textContent = 'Evelyn';
  }
}

// Create project card HTML
function createProjectCard(item) {
  const codeLink = item.code_url
    ? `<a href="${item.code_url}" class="card-link links" target="_blank" rel="noreferrer">View</a>`
    : '';

  return `
    <div class="container mt-2">
      <div class="row d-flex justify-content-around task">
        <div class="card border-1 borderColor">
          <img src="${item.color_img}" class="card-img-top grayscale abstract" alt="${item.title}">
          <div class="details">
            <div class="details__inner">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.comment}</p>
              </div>
              <hr>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${item.tech_stack}</li>
              </ul>
              <hr>
              <div class="card-body">
                ${codeLink}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Load and display projects
async function loadProjects() {
  const projectsLeft = document.getElementById('projects-left');
  const projectsRight = document.getElementById('projects-right');

  try {
    const projectResponse = await getProject();
    const projects = projectResponse.data;

    // Filter and shuffle projects
    const displayProjects = shuffle(projects.filter((item) => item.display));

    // Clear existing content
    projectsLeft.innerHTML = '';
    projectsRight.innerHTML = '';

    // Split projects into two columns
    const midpoint = Math.ceil(displayProjects.length / 2);
    const leftProjects = displayProjects.slice(0, midpoint);
    const rightProjects = displayProjects.slice(midpoint);

    // Add projects to left column
    leftProjects.forEach((project) => {
      projectsLeft.innerHTML += createProjectCard(project);
    });

    // Add projects to right column
    rightProjects.forEach((project) => {
      projectsRight.innerHTML += createProjectCard(project);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    projectsLeft.innerHTML =
      '<p class="text-center">Unable to load projects at this time.</p>';
  }
}

// Word rotation functionality
function startWordRotation() {
  const changingWordElement = document.getElementById('changing-word');

  setInterval(() => {
    changingWordElement.textContent = randomWord(synonyms);
  }, 3000);
}

// Set current day
function setCurrentDay() {
  document.getElementById('current-day').textContent = dayName(days);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Set current day
  setCurrentDay();

  // Start word rotation
  startWordRotation();

  // Load initial content
  initializeSayings();
  loadProjects();
});

// Optional: Add refresh functionality for projects (mentioned in loading text)
function refreshProjects() {
  loadProjects();
}

// Make refresh function available globally if needed
window.refreshProjects = refreshProjects;
