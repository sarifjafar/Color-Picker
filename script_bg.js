var color_one = document.querySelector("#color_one");
var color_two = document.querySelector("#color_two");
var color_text = document.querySelector("#color_text");
var h3 = document.querySelector("#bg_color");
var h1 = document.querySelector("h1");
var text_color = document.querySelector("#text_color");
var body = document.querySelector("#doc_body");

// console.log(body);
// console.log(color_one.value);
// console.log(color_two.value);

function changeColor(){
    body.style.background = "linear-gradient(to right, "+color_one.value+" , "+color_two.value+")";
    //h3.textContent = body.style.background+" ;";
    h3.textContent = olor_one.value+" "+color_two.value;
}



color_one.addEventListener("input",changeColor);

color_two.addEventListener("input",changeColor);

color_text.addEventListener("input",function(){
      h1.style.color = color_text.value;
      text_color.textContent = color_text.value;
});
