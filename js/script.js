let celsius
let temp

const farenheit = c => {
	celsius = c
	temp = celsius * 1.8 + 32
	console.log(`${c}°C = ${temp}°F`)
}

farenheit(20)
