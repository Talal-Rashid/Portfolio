const unitOptions = {
    length: ['cm', 'mm', 'm', 'km', 'miles', 'yards', 'feet'],
    area: ['m²', 'sq feet', 'sq yards', 'acres', 'kanal'],
    weight: ['kilogram', 'pounds', 'tonnes'],
    volume: ['m³', 'litre', 'ml']
};

const conversionFactors = {
    length: {
        cm: { mm: 10, m: 0.01, km: 0.00001, miles: 0.0000062137, yards: 0.0109361, feet: 0.0328084 },
        mm: { cm: 0.1, m: 0.001, km: 0.000001, miles: 0.00000062137, yards: 0.00109361, feet: 0.00328084 },
        m: { cm: 100, mm: 1000, km: 0.001, miles: 0.000621371, yards: 1.09361, feet: 3.28084 },
        km: { cm: 100000, mm: 1000000, m: 1000, miles: 0.621371, yards: 1093.61, feet: 3280.84 },
        miles: { cm: 160934, mm: 1609340, m: 1609.34, km: 1.60934, yards: 1760, feet: 5280 },
        yards: { cm: 91.44, mm: 914.4, m: 0.9144, km: 0.0009144, miles: 0.000568182, feet: 3 },
        feet: { cm: 30.48, mm: 304.8, m: 0.3048, km: 0.0003048, miles: 0.000189394, yards: 0.333333 }
    },
    area: {
        'm²': { 'sq feet': 10.7639, 'sq yards': 1.19599, acres: 0.000247105, kanal: 0.000197684 },
        'sq feet': { 'm²': 0.092903, 'sq yards': 0.111111, acres: 0.0000229568, kanal: 0.0000183821 },
        'sq yards': { 'm²': 0.836127, 'sq feet': 9, acres: 0.000206612, kanal: 0.000165289 },
        acres: { 'm²': 4046.86, 'sq feet': 43560, 'sq yards': 4840, kanal: 0.80842 },
        kanal: { 'm²': 505.857, 'sq feet': 5445, 'sq yards': 605, acres: 0.12355 }
    },
    weight: {
        kilogram: { pounds: 2.20462, tonnes: 0.001 },
        pounds: { kilogram: 0.453592, tonnes: 0.000453592 },
        tonnes: { kilogram: 1000, pounds: 2204.62 }
    },
    volume: {
        'm³': { litre: 1000, ml: 1000000 },
        litre: { 'm³': 0.001, ml: 1000 },
        ml: { 'm³': 0.000001, litre: 0.001 }
    }
};

function updateUnitOptions() {
    const conversionType = document.getElementById('conversionType').value;
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');

    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    unitOptions[conversionType].forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;

        fromUnit.appendChild(option1);
        toUnit.appendChild(option2);
    });
}

function convert() {
    const conversionType = document.getElementById('conversionType').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    const resultDiv = document.getElementById('result');
    resultDiv.className = '';  // Reset classes

    if (isNaN(inputValue)) {
        resultDiv.textContent = 'Please enter a valid number';
        resultDiv.classList.add('error');
        return;
    }

    if (fromUnit === toUnit) {
        resultDiv.textContent = `Result: ${inputValue} ${toUnit}`;
        resultDiv.classList.add('success');
        return;
    }

    const conversionFactor = conversionFactors[conversionType][fromUnit][toUnit];
    if (conversionFactor === undefined) {
        resultDiv.textContent = 'Conversion not available';
        resultDiv.classList.add('error');
        return;
    }
    
    const result = inputValue * conversionFactor;
    resultDiv.textContent = `Result: ${result} ${toUnit}`;
    resultDiv.classList.add('success');
}

// Initialize the unit options on page load
window.onload = updateUnitOptions;
