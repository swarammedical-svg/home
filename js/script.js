// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Generate random team members for About page
function generateTeamMembers() {
    const teamContainer = document.getElementById("teamMembers");
    
    if (!teamContainer) return;
    
    const teamMembers = [
        {
            name: "Dr. Rajesh Kumar",
            position: "Chief Pharmacist",
            bio: "With over 20 years of experience in pharmaceutical care, Dr. Kumar ensures all medications meet the highest standards."
        },
        {
            name: "Anjali Sharma",
            position: "Senior Pharmacist",
            bio: "Specializing in pediatric medications, Anjali provides compassionate care to our youngest patients."
        },
        {
            name: "Vikram Patel",
            position: "Medical Equipment Specialist",
            bio: "Vikram helps customers find the right medical equipment for their specific needs."
        },
        {
            name: "Priya Nair",
            position: "Customer Service Manager",
            bio: "Priya ensures every customer has a positive experience at Swaram Medicals."
        },
        {
            name: "Sanjay Gupta",
            position: "Inventory Manager",
            bio: "Sanjay keeps our shelves stocked with the latest medications and healthcare products."
        },
        {
            name: "Meena Desai",
            position: "Health Counselor",
            bio: "Meena provides personalized health advice and wellness programs."
        }
    ];
    
    let html = '';
    
    teamMembers.forEach(member => {
        const randomImageId = Math.floor(Math.random() * 1000);
        html += `
            <div class="team-member">
                <img src="https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${randomImageId}.jpg" alt="${member.name}">
                <h4>${member.name}</h4>
                <p class="position">${member.position}</p>
                <p class="bio">${member.bio}</p>
            </div>
        `;
    });
    
    teamContainer.innerHTML = html;
}

// Contact form submission
function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    
    if (!contactForm) return;
    
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        
        // In a real application, you would send this data to a server
        console.log("Form submitted:", { name, email, subject });
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been received. We'll contact you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    generateTeamMembers();
    setupContactForm();
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if we're on the About page
    if (document.getElementById("teamMembers")) {
        generateTeamMembers();
    }
    
    // Other initialization code
    setupContactForm();
});