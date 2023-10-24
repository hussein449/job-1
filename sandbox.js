function calculateAge() {
    const dob = document.getElementById("dob").value;
    const dobDate = new Date(dob);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
}