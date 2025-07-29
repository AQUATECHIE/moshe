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

const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');

      // Close others
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
    });
  });


//   courses modal
 const courseData = [
    {
      title: "Cybersecurity",
      description: "Dive deep into network security, ethical hacking, and threat prevention strategies.",
      img: "slider-img3.jpg",
      duration: "12 weeks",
      price: "$300"
    },
    {
      title: "Data Analysis",
      description: "Learn Excel, SQL, and Python for data analysis. Understand how to turn data into insights.",
      img: "slider-img3.jpg",
      duration: "10 weeks",
      price: "$250"
    },
    {
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and modern frameworks like React.",
      img: "slider-img3.jpg",
      duration: "14 weeks",
      price: "$400"
    },
    {
      title: "AI & Machine Learning",
      description: "Explore neural networks, algorithms, and tools like TensorFlow and Scikit-learn.",
      img: "slider-img3.jpg",
      duration: "16 weeks",
      price: "$500"
    }
  ];

  function openModal(index) {
    const course = courseData[index];
    document.getElementById("modal-title").innerText = course.title;
    document.getElementById("modal-description").innerText = course.description;
    document.getElementById("modal-img").src = course.img;
    document.getElementById("modal-duration").innerText = course.duration;
    document.getElementById("modal-price").innerText = course.price;
    document.getElementById("courseModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("courseModal").style.display = "none";
  }