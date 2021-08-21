let form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    let _First = document.querySelector("#_First").value;
    let _Last = document.querySelector("#_Last").value;
    let _Email = document.querySelector("#_Email").value;
    let _Message = document.querySelector("#_Message").value;
    let _Pronouns = get_Pronouns();
    console.group("========= Form Submission =========");
    console.log(`_First Name: ${_First}`);
    console.log(`_Last Name: ${_Last}`);
    console.log(`_Email: ${_Email}`);
    console.log(`_Pronouns: ${_Pronouns}`);
    console.log(`_Message: ${_Message}`);
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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            First: _First,
            Last: _Last,
            Email: _Email,
            Pronouns: _Pronouns,
            Message: _Message
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => console.log(err));

    console.log(res);
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
