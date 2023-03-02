const url = "http://localhost:8080/api/weekDays"

//vi fetcher API, får et promise retur, parser json data til javascript object. 
fetch(url).then(response => response.json()).then(result => {
    data = result.data
}).then(() => {
    console.log(data)
})

//get values from input - make a new date with birthdaydate input - so we can compare the two date objects.
function birthdaySubmit(event){
    event.preventDefault();

    const name = document.getElementById("name-input").value
    const birthday = new Date(document.getElementById("date-input").value)
    
    calculateDays(birthday, name)
}

function calculateDays(birthday, name){

    const birthdayBody = document.getElementById("birthday-container");
    //
    let today = new Date();
    console.log(today)
    let currentYear = new Date(today.getFullYear())
    birthday.setFullYear(currentYear)
    if(birthday < today){
        birthday.setFullYear(currentYear + 1);
    }
    const diffTime = birthday.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000*60*60*24))
    birthdayBody.innerText = `Its ${data} today and there is ${diffDays} days till ${name} birthday`
    
}





