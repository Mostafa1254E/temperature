const form = document.querySelector('#converter-form');
const outputDiv = document.querySelector('#output');
const tempOutput = document.querySelector('#temp-output');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const tempValue = parseFloat(document.querySelector('#temp-value').value);
	const tempUnit = document.querySelector('#temp-unit').value;
	const inputUnit = document.querySelector('[name="unit"]:checked').value;
	const outputUnit = inputUnit === 'input' ? 'output' : 'input';

	let convertedTemp;
	if (tempUnit === 'celsius') {
		if (inputUnit === 'input') {
			convertedTemp = (tempValue * 1.8) + 32;
		} else {
			convertedTemp = (tempValue - 32) / 1.8;
		}
	} else {
		if (inputUnit === 'input') {
			convertedTemp = (tempValue - 32) / 1.8;
		} else {
			convertedTemp = (tempValue * 1.8) + 32;
		}
	}

	tempOutput.innerHTML = `${convertedTemp.toFixed(2)} ${outputUnit === 'output' ? tempUnit.toUpperCase() : outputUnit.toUpperCase()}`;
	outputDiv.style.display = 'block';
});