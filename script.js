document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevents page reload

        if (validateForm()) {
            try {
                await sendEmail(); // Send email
                alert("Registration successful! A confirmation email has been sent.");
                form.reset(); // Reset the form after submission
            } catch (error) {
                alert("Failed to send confirmation email.");
            }
        }
    });

    function validateForm() {
        const password = document.querySelector('input[name="pass"]').value;
        const repass = document.querySelector('input[name="repass"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }

        if (password !== repass) {
            alert("Passwords do not match.");
            return false;
        }

        return true; // All validations passed
    }

    async function sendEmail() {
        const email = document.querySelector('input[name="email"]').value;

        const templateParams = {
            user_email: email,
            message: "Thank you for registering with us!"
        };

        return emailjs.send('service_id', 'template_id', templateParams, 'user_id');
    }
});
