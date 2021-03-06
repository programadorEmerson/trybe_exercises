window.onload = function () {
  
  let header_container = document.querySelector("#header-container");
  header_container.style.background = '#55efc4';

  let emergency_tasks = document.querySelectorAll(".emergency-tasks h3");
  let emergency_tasks_div = document.querySelectorAll(".emergency-tasks div");

  let no_emergency_tasks = document.querySelectorAll(".no-emergency-tasks h3");
  let no_emergency_tasks_div = document.querySelectorAll(".no-emergency-tasks div");

  document.getElementById("footer-container").style.background = "#00b894";
    
  for (let index = 0; index < emergency_tasks.length; index++) {
      emergency_tasks[index].style.background = '#6c5ce7';
      emergency_tasks_div[index].style.background = '#ff7675';      
  }
  for (let index = 0; index < emergency_tasks.length; index++) {
      no_emergency_tasks[index].style.background = 'black';
      no_emergency_tasks_div[index].style.background = 'yellow';      
  }

};
