function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    if (isNaN(dob.getTime())) {
        alert("Please enter a valid date of birth.");
        return;
    }
    
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        document.getElementById('result').innerText = age - 1;
    } else {
        document.getElementById('result').innerText = age;
    }
}
