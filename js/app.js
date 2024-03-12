const condition = document.querySelector("#condition");
const country = document.querySelector("country");
const result = document.querySelector(".result");

condition.addEventListener("change", function (e) {
  selectedCondition = e.target.value;
  console.log(selectedCondition);
  updateResultsDiv();
});

const updateResultsDiv = function () {
  result.innerHTML = `This is where the links to the relevant guidelines will be displayed.`;
  if (option === "sci") {
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian SCI Clinical Practice Guidelines 2023</a>`;
    } else if (condition === "ms") {
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
  } else if (condition === "cp") {
    result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
  } else if (condition === "cva") {
    if (country === "Australia"){
        result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
    }
    if (country !== "Australia"){
        result.innerText = `Link to be added`;
    }
  }
};

//const displayGuide = function () {
 // const selectElement = document.querySelector('#condition');
  //const output = selectElement.value;
 // document.querySelector(".result").textContent = output;
//}

//function formFill(a, b, c){
  //theform.from.value = a;
 // theform.to.value = b;
  //for(var i = 0;i < document.getElementById("stateSelect").length;i++){
      //if(document.getElementById("stateSelect").options[i].value == c ){
      //  document.getElementById("stateSelect").selectedIndex = i;
     // }
  //}
//}
