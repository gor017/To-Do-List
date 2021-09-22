document.querySelector('#push').addEventListener('click', function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('You should write a task')
  } else {
      document.querySelector('#tasks').innerHTML += `
      <div class="task">
        <span id="taskname">
          ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
      `;
      let current_tasks = document.querySelectorAll('.delete')
      for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].addEventListener('click', function () {
          this.parentElement.style.display = 'none'
        })
      } 
      let tasks = querySelectorAll(".tasks")
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener('click', function() {
          this.classList.toggle('completed')
        })
      }
    }
    document.querySelector('#newtask input').value = ""
}) 