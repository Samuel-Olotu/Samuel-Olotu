document.addEventListener("DOMContentLoaded", function () {

    let currentProject = 1;
    document.getElementById('nextbutton').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
      currentProject = (currentProject % 4) + 1;
      showProject(currentProject);
  
    });
  
    document.getElementById('prevbutton').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
      currentProject = (currentProject - 2 + 4) % 4 + 1;
      showProject(currentProject);
    });
  
    function showProject(projectNumber) {
  
  
      if (currentProject == 1) { //Hide the prevbutton when on the project1
        document.getElementById("prevbutton").style.display = "none";
      }
      else if (currentProject == 2 || currentProject == 3) {
        document.getElementById("prevbutton").style.display = "block";
        document.getElementById("nextbutton").style.display = "block";
      }
      else if (currentProject == 4) { //Hide the nextbutton when on the project4
        document.getElementById("nextbutton").style.display = "none";
      }
      const projects = document.querySelectorAll('.project');
      projects.forEach(project => project.style.display = 'none');
  
      const selectedProject = document.getElementById(`project${projectNumber}`);
      if (selectedProject) {
        selectedProject.style.display = 'block';
      }
    }
  
    showProject(currentProject);
})