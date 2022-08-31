const input = document.getElementById('input')
const btn = document.querySelector('#submit-button')
const uList = document.querySelector('#todo-list')

btn.addEventListener('click', function(evt){
  const li= document.createElement('li')
  li.textContent = input.value 
  
})