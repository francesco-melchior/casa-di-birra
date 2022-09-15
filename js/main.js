const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links-container')[0]
const maxVh = document.getElementsByClassName('nav-bar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
    maxVh.classList.toggle('active')
  })