let nav =document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 50)
    {
        nav.classList.add("header-scrolled")
    }
    else{
        nav.classList.remove("header-scrolled")
    }
}

let navBar=document.querySelectorAll(".nav-link");
let navCollapse =document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
        a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
});
})


var swiper=new Swiper(".mySwiper",{

    loop :true,
    pagination:{el:".swiper-pagination",clickable:true,},
    autoplay:{
        delay:5000,
    },
});

var swiper=new Swiper(".our-partner",{
    slidesPerView:5,
    spaceBetween:30,
    loop:true,
    autoplay:{
        delay:2000,
    }
})

let bookButton = document.querySelector(".main-btn.book-btn"); 
let modal = document.getElementById("bookingFormModal");
let closeBtn = document.querySelector(".close-btn");

bookButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

let bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let formData = new FormData(bookingForm);
    let name = formData.get("name");
    let email = formData.get("email");
    let checkin = formData.get("checkin");
    let checkout = formData.get("checkout");
    let roomType = formData.get("roomType");
    alert("Booking Confirmed!\n\n" +
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Check-in: " + checkin + "\n" +
          "Check-out: " + checkout + "\n" +
          "Room Type: " + roomType);
    modal.style.display = "none";
});
