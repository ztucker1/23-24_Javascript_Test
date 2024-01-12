/* Put code for the task below */
//Create a button within the navigation called "clear" which opens a new page with the text "new page has been created".
// I think this is done
function task4() {
    const buttonTask4 = document.getElementById("buttonTask4");
    buttonTask4.innerHTML = "Clear";
    buttonTask4.addEventListener("click", function () {
        window.open("http://localhost:63342/23-24_Javascript_Test/Task4.html?_ijt=hjpdli0r87gu6mgf303eblt1gk", "_blank");
    });
    document.getElementById("nav").appendChild("clear");
}