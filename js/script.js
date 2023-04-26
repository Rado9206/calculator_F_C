const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const firstValue = document.querySelector('.one')
const secondValue = document.querySelector('.two')

const swap = () => {
	if(firstValue.textContent === '°C') {
		firstValue.textContent = '°F'
		secondValue.textContent = '°C'
	} else {
		firstValue.textContent = '°C'
		secondValue.textContent = '°F'
	}
}

changeBtn.addEventListener('click', swap)