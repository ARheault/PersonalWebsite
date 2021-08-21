let form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let First = document.querySelector("#First").value;
    let Last = document.querySelector("#Last").value;
    let Email = document.querySelector("#Email").value;
    let Message = document.querySelector("#Message").value;
    let Pronouns = getPronouns();
    console.group("========= Form Submission =========");
    console.log(`First Name: ${First}`);
    console.log(`Last Name: ${Last}`);
    console.log(`Email: ${Email}`);
    console.log(`Pronouns: ${Pronouns}`);
    console.log(`Message: ${Message}`);
    console.groupEnd("===================================");

    const submission = {
        First,
        Last,
        Email,
        Pronouns,
        Message
    };

    async () => {
        const res = await fetch("/SubmitContact", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submission)
        });

        const response = await res.json();

        console.log(response);
    }
 }

let getPronouns = () => {
    if (document.querySelector("#HeHim").checked) {
        return "He/Him";
    }
    if (document.querySelector("#SheHer").checked) {
        return "She/Her";
    }
    if (document.querySelector("#TheyThem").checked) {
        return "They/Them";
    }
    if (document.querySelector("#Other").checked) {
        return "Other";
    }
};
