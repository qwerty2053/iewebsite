const usernameField = document.querySelector("#usernameField");
const feedBackArea = document.querySelector(".invalid-feedback");

usernameField.addEventListener("keyup", (el) => {
    const usernameVal = el.target.value;

    if (usernameVal.length > 0){
        fetch("/authentication/validate-username", {
            body: JSON.stringify( {username: usernameVal} ),
            method: "POST",
        })
        .then( (res) => res.json() )
        .then( (data) => {
            console.log(data);
            if (data.username_error){
                usernameField.classList.add("is-invalid");
                feedBackArea.style.display = "block";
                feedBackArea.innerHTML = `<p>${data.username_error}</p>`;
            }
            else if (data.username_valid){
                usernameField.classList.remove("is-invalid");
                feedBackArea.style.display = "none";
            }
        });
    }

});
