const input = document.getElementById('input')
const button = document.querySelector('#submit-button')
const uList = document.querySelector('#todo-list')

button.addEventListener('click', function(evt){
  const li= document.createElement('li')
  li.textContent = input.value 
  uList.appendChild(li)
  console.log(li)
})