let advice = document.getElementById('advice');
let id = document.getElementById('id');


function getData() {
    url = "https://api.adviceslip.com/advice";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        id.innerHTML = `ADVICE # ${data.slip.id}`
        advice.innerHTML = `"${data.slip.advice}"`
    })
}