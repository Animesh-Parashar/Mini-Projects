console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    let numberTemp = parseFloat(document.getElementById('temp').value);

    if (isNaN(numberTemp)) { 
        document.getElementById('resultContainer').innerHTML = "❌ Please enter a valid temperature!";
        return;
    }

    const tempSelected = document.getElementById('temp_diff'); 
    const valeTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celTOfah = (cel) => (cel * (9 / 5) + 32);
    const fahTOcel = (fehr) => ((fehr - 32) * 5 / 9);
    const kelTOcel = (kel) => (kel - 273.15);
    const celTOkel = (cel) => (cel + 273.15);

    let result;
    if (valeTemp == "cel-fah") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}° Fahrenheit`;
    } 
    else if (valeTemp == "fah-cel") {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}° Celsius`;
    }
    else if (valeTemp == "kel-cel") {
        result = kelTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}° Celsius`;
    }
    else if (valeTemp == "cel-kel") {
        result = celTOkel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)} Kelvin`;
    }

    setTimeout(() => {
        document.getElementById('temp').value = "";
    }, 1500);
};
