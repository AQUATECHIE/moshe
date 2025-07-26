const ham = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');


ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener ('click', () => {
    ham.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
})

// const accordions = document.querySelectorAll('.accordion-header');

//   accordions.forEach(header => {
//     header.addEventListener('click', () => {
//       const item = header.parentElement;
//       item.classList.toggle('active');

//       // Close others
//       document.querySelectorAll('.accordion-item').forEach(i => {
//         if (i !== item) i.classList.remove('active');
//       });
//     });
//   });