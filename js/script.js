/* ==========================================
   AC SERVICE PORTFOLIO WEBSITE
   Shared JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Back To Top Button
    ========================== */

    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* ==========================
       Active Navigation Link
    ========================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar .nav-link").forEach(link => {
        const href = link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" && href === "index.html")
        ) {
            link.classList.add("active");
        }
    });

    /* ==========================
       Smooth Anchor Scrolling
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const targetID = this.getAttribute("href");

            if (targetID.length > 1) {

                const targetElement = document.querySelector(targetID);

                if (targetElement) {
                    e.preventDefault();

                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    /* ==========================
       Contact Form Validation
    ========================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("fullName");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const service = document.getElementById("service");
            const date = document.getElementById("serviceDate");
            const message = document.getElementById("message");
            const successBox = document.getElementById("successMessage");

            clearValidation();

            let isValid = true;

            /* Name Validation */

            if (name.value.trim().length < 3) {
                showError(name, "Please enter your full name.");
                isValid = false;
            }

            /* Email Validation */

            if (!validateEmail(email.value.trim())) {
                showError(email, "Please enter a valid email address.");
                isValid = false;
            }

            /* Phone Validation */

            if (!validatePhone(phone.value.trim())) {
                showError(phone, "Please enter a valid phone number.");
                isValid = false;
            }

            /* Service Validation */

            if (service.value === "") {
                showError(service, "Please select a service.");
                isValid = false;
            }

            /* Date Validation */

            if (date.value === "") {
                showError(date, "Please select a preferred date.");
                isValid = false;
            }

            /* Message Validation */

            if (message.value.trim().length < 10) {
                showError(
                    message,
                    "Please provide additional details."
                );
                isValid = false;
            }

            if (isValid) {

                successBox.classList.remove("d-none");

                successBox.innerHTML = `
                    <strong>Thank you!</strong><br>
                    Your service request has been validated successfully.
                    This is a demo portfolio website, so no actual email
                    or booking has been sent.
                `;

                contactForm.reset();

                window.scrollTo({
                    top: contactForm.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    }

    /* ==========================
       Fade Up Animation
    ========================== */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .pricing-card, .testimonial-card, .choose-box, .contact-card"
        );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-up");
                }

            });
        },
        {
            threshold: 0.2
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});

/* ==========================================
   Helper Functions
========================================== */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

function validatePhone(phone) {

    const phonePattern =
        /^[0-9+\-\s()]{7,20}$/;

    return phonePattern.test(phone);
}

function showError(input, message) {

    input.classList.add("is-invalid");

    const feedback =
        document.createElement("div");

    feedback.className = "invalid-feedback";

    feedback.innerText = message;

    input.parentNode.appendChild(feedback);
}

function clearValidation() {

    document.querySelectorAll(".invalid-feedback")
        .forEach(item => item.remove());

    document.querySelectorAll(".is-invalid")
        .forEach(item => item.classList.remove("is-invalid"));
}

/* ==========================================
   Package Button Tracking (Demo)
========================================== */

function bookPackage(packageName) {

    alert(
        `${packageName} selected.\n\nYou will be redirected to the Contact Us page to schedule your service.`
    );

    window.location.href = "contact.html";
}

/* ==========================================
   Quick Service Booking Function
========================================== */

function goToContact() {

    window.location.href = "contact.html";
}

/* ==========================================
   Package Page CTA Redirect
========================================== */

function bookNow() {

    window.location.href = "contact.html";
}