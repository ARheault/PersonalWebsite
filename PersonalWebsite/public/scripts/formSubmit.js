let form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    let _First = document.querySelector("#First").value;
    let _Last = document.querySelector("#Last").value;
    let _Email = document.querySelector("#Email").value;
    let _Message = document.querySelector("#Message").value;
    let _Pronouns = getPronouns();
    console.group("========= Form Submission =========");
    console.log(`First Name: ${_First}`);
    console.log(`Last Name: ${_Last}`);
    console.log(`Email: ${_Email}`);
    console.log(`Pronouns: ${_Pronouns}`);
    console.log(`Message: ${_Message}`);
    console.groupEnd("===================================");

    const submission = {
        _First,
        _Last,
        _Email,
        _Pronouns,
        _Message
    };

    const res = await fetch("/SubmitContact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            submission
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => console.log(err));
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
