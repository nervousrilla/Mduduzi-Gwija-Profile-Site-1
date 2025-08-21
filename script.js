const readMoreBtn = document.getElementById("read-more-btn");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("open");

  if (readMoreContent.classList.contains("open")) {
    readMoreBtn.textContent = "Read Less";
  } else {
    readMoreBtn.textContent = "Read More";
  }
});


// Modal elements
const modal = document.getElementById("work-modal");
const closeBtn = document.querySelector(".close-btn");
const openWorkWithMe = document.querySelector(".hire-btn"); 
const openHeaderContact = document.getElementById("header-contact-btn"); 

// Open modal from "Work with me"
openWorkWithMe.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
});

// Open modal from Header "Contact Me"
openHeaderContact.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
});

// Close modal with ❌ button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close modal when clicking outside modal-content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Mobile menu toggle (unchanged)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}




