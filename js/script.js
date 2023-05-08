const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const firstValue = document.querySelector('.one')
const secondValue = document.querySelector('.two')

const swap = () => {
	if (firstValue.textContent === '°C') {
		firstValue.textContent = '°F'
		secondValue.textContent = '°C'
		result.textContent = 'Podaj jakąś wartość.'
	} else {
		firstValue.textContent = '°C'
		secondValue.textContent = '°F'
		result.textContent = 'Podaj jakąś wartość.'
	}
}

const countFtoC = () => {
	farenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to ${farenheit.toFixed(1)}°F `
	converter.value = ''
}
const countCtoF = () => {
	celtius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to ${celtius.toFixed(1)}°C `
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (firstValue.textContent === '°C') {
			countFtoC()
		} else {
			countCtoF()
		}
	} else {
		result.textContent = 'Podaj jakąś wartość.'
	}
}

const reset = () => {
	result.textContent = 'Podaj jakąś wartość.'
	converter.value = ''
}

const enterKeyCount = e => {
	if (e.key === 'Enter') {
		conversion()
	}
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
converter.addEventListener('keyup', enterKeyCount)