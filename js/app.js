const conditionList = document.querySelector("#condition");
const country = document.querySelector("country");
const result = document.querySelector(".result");

//e.options[e.selectedIndex].value;

conditionList.addEventListener("change", function (e) {
  condition = e.target.value;
  console.log(condition);
  updateResultsDiv();
});


const updateResultsDiv = function () {
  if (condition === "sci") {
    result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian SCI Clinical Practice Guidelines 2023</a>`;
    console.log("SCI selected");
  } else if (condition === "ms") {
    result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian MS Clinical Practice Guidelines *YEAR*</a>`;
    console.log("MS selected");
  } else if (condition === "cp") {
    result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian CP Clinical Practice Guidelines *YEAR*</a>`;
    console.log("CP selected");
  } else if (condition === "cva") {
    result.innerHTML = `<a href="" target="_blank" rel="noopener noreferer">Australian CVA Clinical Practice Guidelines *YEAR*</a>`;
    console.log("CVA selected");
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
