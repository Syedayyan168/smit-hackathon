document.querySelector("#check-btn").onclick = () => {
    const inputs = ["#full-name", "#father-name", "#dob", "#blood-group"].map(id => document.querySelector(id).value.trim());
    if (inputs.includes("")) return alert("All fields are required!");

    const bloodMap = {
        "O-": ["O-"], "O+": ["O-", "O+"],
        "B-": ["O-", "B-"], "B+": ["O-", "O+", "B-", "B+"],
        "A-": ["O-", "A-"], "A+": ["O-", "O+", "A-", "A+"],
        "AB-": ["O-", "B-", "A-", "AB-"],
        "AB+": ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"]
    };

    const [fullName, fatherName, dob, bloodGroup] = inputs;
    document.querySelector("#result-name").textContent = fullName;
    document.querySelector("#result-father").textContent = fatherName;
    document.querySelector("#result-dob").textContent = dob;
    document.querySelector("#result-blood-group").textContent = bloodGroup;

    const donors = bloodMap[bloodGroup] || [];
    document.querySelector("#compatible-donors").innerHTML = donors.map(d => `<span>${d}</span>`).join("");

    document.querySelector("#results").style.display = "block";
};

