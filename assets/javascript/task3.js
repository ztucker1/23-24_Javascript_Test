/* Put code for the task below */
//Add a button to the navigation bar which, when clicked changes the text within the basic directions to "I Clicked It!".
function task3() {
    let text;
    let uDidIt = ["I Clicked It!"];
    let i;
    for(i = 0; i <uDidIt.length;i++){
        text = uDidIt[i] + "<br>";
        document.getElementById("directions").innerHTML = text;


    }

}


