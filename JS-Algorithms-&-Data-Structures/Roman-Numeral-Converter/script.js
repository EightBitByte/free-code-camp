const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]

const convert = (num) => {
    romanString = "";

    for (let i = 0; i < romanMap.length; ++i) {
        for (; num >= romanMap[i][1]; num-= romanMap[i][1])
            romanString += romanMap[i][0];
    }

    return romanString;
}

const validateAndConvert = () => {
    console.log(numInput.value);
    if (numInput.value == "")
        alert("Please enter a valid number");
    else if (numInput.value <= 0)
        alert("Please enter a number greater than or equal to 1");
    else if (numInput.value >= 4000)
        alert("Please enter a number less than or equal to 3999");
    else
        output.innerHTML = `<h1>${convert(numInput.value)}</h1>`

}

convertBtn.addEventListener("click", validateAndConvert);
numInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter")
        validateAndConvert();
});