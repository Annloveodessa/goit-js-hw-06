const formRef = document.querySelector(".login-form");
formRef.addEventListener(
    "submit",
    ({
        target: {
            elements: { email, password },
        },
    
    }) => {
        event.preventDefault();


            if (!(email.value.trim() && password.value.trim())) {
                alert("Усі поля мають бути заповнені");
                return;
            }

            const formData = {
                email: email.value,
                password: password.value,
            };
            console.log(formData);

            formRef.reset();
        }
);
