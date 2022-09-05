/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound


*/
const metricImperial = [
    {unit1: "meter", unit2: "feet", rates: 3.281},
    {unit1: "liters", unit2: "gallons", rates: 0.264},
    {unit1: "kilograms", unit2: "pounds", rates: 2.204},
]

//console.log(metricImperial[1].unit1)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("convert-btn")
const length = document.getElementById("meters-feet-meters")
const volume = document.getElementById("liters-gallons-liters")
const mass = document.getElementById("kg-pounds-kg")

    const rate = 1
    const unitA = ""
    const unitB = ""

function render(conversion, unitA, unitB, rate){
    let base = inputEl.value
 
    let sentence = `${base} ${unitA} = ${(base * rate).toFixed(3)} ${unitB} | ${base} ${unitB} = ${(base / rate).toFixed(3)} ${unitA}`
    
      conversion.innerHTML = sentence  
}

inputBtn.addEventListener("click", function(){
 render(length, "meters", "feet", 3.281)
 render(volume, "liters", "gallons", 0.264)
 render(mass, "kilograms", "pounds", 2.204)
 //inputEl.value = ""
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



/*
//Using the unnecessary array I created at the top of the script
inputBtn.addEventListener("click", function(){
    render(length, metricImperial[0].unit1, metricImperial[0].unit2, metricImperial[0].rates)
})



//METHOD 1. I created 3 functions. 1 for each type of measurement
/*

inputBtn.addEventListener("click", function(){
 renderLength()
 renderVolume()
 renderMass()
// inputEl.value = ""
})

/*
//Method 1a
function renderLength(){
    let metFeet = (inputEl.value)*3.281
    let feetMet = (inputEl.value)/3.281
    let length = `${inputEl.value} meters = ${metFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetMet.toFixed(3)}  meters`

    lengthCalc.innerHTML = length
}


//Method 1b
function renderLength(){
    let base = inputEl.value
 
    let length = `${base} meters = ${(base*3.281).toFixed(3)} feet | ${base} feet = ${(base/3.281).toFixed(3)} meters`
    
      lengthCalc.innerHTML = length  
}



function renderVolume(){
    let litGal = (inputEl.value)/0.264
    let galLit = (inputEl.value)*0.264
    let volume = `${inputEl.value} liters = ${litGal.toFixed(3)} gallons | ${inputEl.value} gallons = ${galLit.toFixed(3)}  liters`

    volumeCalc.innerHTML = volume
}

function renderMass(){
    let kgPounds = (inputEl.value)/2.204
    let poundsKg = (inputEl.value)*2.204
    let mass = `${inputEl.value} kilograms = ${kgPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsKg.toFixed(3)}  kilograms`

    massCalc.innerHTML = mass
}
*/
