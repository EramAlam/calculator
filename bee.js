function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}
function substrack() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = Number(num1) - Number(num2);
}
function multiplication() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = Number(num1) * Number(num2);
}
function division() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = Number(num1) / Number(num2);
}
function modulus() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = Number(num1) % Number(num2);
}
// Function to convert Celsius to Fahrenheit
// function convertToFahrenheit() {
//     const tempCelsius = parseFloat(document.getElementById('num1').value);
//     if (isNaN(tempCelsius)) {
//         alert("Please enter a valid temperature value.");
//         return;
//     }
//     const fahrenheit = (tempCelsius * 9/5) + 32;
//     document.getElementById('result').innerText = `${tempCelsius} °C is equal to ${fahrenheit.toFixed(2)} °F`;
// }

// // Function to convert Fahrenheit to Celsius
// function convertToCelsius() {
//     const tempFahrenheit = parseFloat(document.getElementById('num1').value);
//     if (isNaN(tempFahrenheit)) {
//         alert("Please enter a valid temperature value.");
//         return;
//     }
//     const celsius = (tempFahrenheit - 32) * 5/9;
//     document.getElementById('result').innerText = `${tempFahrenheit} °F is equal to ${celsius.toFixed(2)} °C`;
// }
