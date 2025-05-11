document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    { name: "Name application", link: "projects/project1/index.html" },
    { name: "Light Bulb", link: "projects/project2/index.html" },
    { name: "Random number", link: "projects/project3/index.html" },
    { name: "Random Password", link: "projects/project4/index.html" },
    { name: "Email Validation", link: "projects/project5/index.html" },
    { name: "Prime & Non prime", link: "projects/project6/index.html" },
    { name: "Hide & Show password", link: "projects/project7/index.html" },
    { name: "Counter Application", link: "projects/project8/index.html" },
    { name: "Palindrome Checker", link: "projects/project9/index.html" },
    { name: "Unicode character", link: "projects/project10/index.html" }
  ];

  const projectsGrid = document.getElementById('projects-grid');

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.textContent = project.name;
    
    card.addEventListener('click', () => {
      window.location.href = `${project.link}`;  // Correct path
    });

    projectsGrid.appendChild(card);
  });
});
