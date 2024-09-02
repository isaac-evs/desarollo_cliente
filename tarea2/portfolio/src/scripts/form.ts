document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm") as HTMLFormElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const isNameValid = validateName(nameInput.value);
        const isEmailValid = validateEmail(emailInput.value);

        if (isNameValid && isEmailValid) {
            form.submit();

            showSuccessMessage("Your email has been sent successfully!");
        } else {
            if (!isNameValid) {
                alert("Please enter a valid name. It should be at least 2 characters long.");
            }
            if (!isEmailValid) {
                alert("Please enter a valid email address.");
            }
        }
    });

    function validateName(name: string): boolean {
        return name.trim().length >= 2;
    }

    function validateEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function showSuccessMessage(message: string) {
        const successMessageDiv = document.createElement("div");
        successMessageDiv.textContent = message;
        successMessageDiv.style.color = "green";
        successMessageDiv.style.marginTop = "20px";
        successMessageDiv.style.fontSize = "1.2rem";
        successMessageDiv.style.textAlign = "center";

        form.parentElement?.appendChild(successMessageDiv);

        setTimeout(() => {
            successMessageDiv.remove();
        }, 5000); 
    }
});