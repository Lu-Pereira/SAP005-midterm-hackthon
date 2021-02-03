const showData = (result) => {
    let teste = "";
    for (let indice of result) {
        teste += `

        <div class="mostrar">
           <img class="img" src="${indice.image}">
            <div class="info">
              <h2 class="name">${indice.name}<h2>
              <p>${indice.title}</p>
              <p>${indice.date}</p> 
              <p>${indice.hour}</p>
              <a href="${indice.url}">Acesse o link</a>
            </div>
        </div>

        `
    }

    return document.getElementById("search-live").innerHTML = teste

}


const inputText = document.getElementById("input-text");
const btnSearch = document.querySelector("#btn-search");

btnSearch.addEventListener("click", () => {
    const userInput = inputText.value;
    fetch(`https://60195af0fa0b1f0017accf42.mockapi.io/livetube/v1/${userInput}`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                })
        })
        .catch(e => console.log("Deu erro" + e.message))
})

btnSearch.addEventListener("click", () => {
    const userInput = inputText.value;
    fetch(`https://6019cf737db53900178348ec.mockapi.io/${userInput}`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                })
        })
        .catch(e => console.log("Deu erro" + e.message))
})

const inputDate = document.getElementById("input-date");
const btnDate = document.getElementById("btn-date");

btnDate.addEventListener("click", () => {
    const userDate = inputDate.value;
    fetch(`https://6019cf737db53900178348ec.mockapi.io/${userDate}`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                })
        })
        .catch(e => console.log("Deu erro" + e.message))
})

window.addEventListener("load", () => {

    fetch(`https://6019da707db5390017834974.mockapi.io/artistas`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                })
        })
        .catch(e => console.log("Deu erro" + e.message))

})

const logo = document.getElementById("logo");

logo.addEventListener("click", () => {

    fetch(`https://6019da707db5390017834974.mockapi.io/artistas`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                })
        })
        .catch(e => console.log("Deu erro" + e.message))

})