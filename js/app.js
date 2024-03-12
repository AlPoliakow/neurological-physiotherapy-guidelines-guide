const condition = document.querySelector("#condition");
const country = document.querySelector("#country");
const result = document.querySelector(".result");
//let condition = "Spinal Cord Injury";
//var subDuration = 1;

condition.addEventListener("change", function (e) {
  selectedCondition = e.target.value;
  console.log(selectedCondition);
  updateResultsDiv();
});

country.addEventListener("change", function (e) {
  selectedCountry = e.target.value;
  //console.log(selectedCountry);
  updateResultsDiv();
});

const updateResultsDiv = function () {
result.innerHTML = `This is where the links to the relevant guidelines will be displayed.`;
  if (condition === "sci") {
    if (country === "Australia"){
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian SCI Clinical Practice Guidelines 2023</a>`;
    }
    if (country !== "Australia"){
        result.innerText = `Link to be added`;
    }
  } else if (condition === "ms") {
    if (country === "Australia"){
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
    }
    if (country !== "Australia"){
        result.innerText = `Link to be added`;
    }
  } else if (condition === "cp") {
    if (country === "Australia"){
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
    }
    if (country !== "Australia"){
        result.innerText = `Link to be added`;
    }
  } else if (condition === "cva") {
    if (country === "Australia"){
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
    }
    if (country !== "Australia"){
        result.innerText = `Link to be added`;
    }
  }
};
