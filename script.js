const outputDiv = document.querySelector("#output")
const btn = document.querySelector("#btn")
const text = "mohasin";
const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text;


function clickHandler(){
  fetch(url).then(response => response.json()).then(json => outputDiv.innerText = json.contents.text);
}

btn.addEventListener("click", clickHandler)