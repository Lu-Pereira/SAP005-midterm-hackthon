const showData = (result) => {
    let content = "";
    for (let indice of result) {
        content += `
        <div class="show-content">
            <div class="image">
                <img class="img" src="${indice.image}"/>
            </div>
            <div class="info">
                <h2 class="name">${indice.name}<h2>
                <p>${indice.title}</p>
                <p>${indice.date}</p> 
                <p>${indice.hour}</p>
                <a href="${indice.url}">Acesse o link</a>
            </div>
        </div>
        `;
    };
    return document.getElementById("search-live").innerHTML = content;
};

const inputText = document.getElementById("input-text");
const btnSearch = document.querySelector("#btn-search");
const inputDate = document.getElementById("input-date");
const btnDate = document.getElementById("btn-date");
const logo = document.getElementById("logo");

const cleanInput = () => {
    inputDate.value = "";
    inputText.value = "";
}

btnSearch.addEventListener("click", () => {
    const userInput = inputText.value;
    fetch(`https://60195af0fa0b1f0017accf42.mockapi.io/livetube/v1/${userInput}`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                    cleanInput();
                })
        })
        .catch(e => console.log("Deu erro" + e.message))
})

function showSearch() {
    const userDate = inputDate.value;
    const userInput = inputText.value;
    fetch(`https://6019cf737db53900178348ec.mockapi.io/${userDate || userInput}`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                    cleanInput();
                })
        })
        .catch(e => console.log("Deu erro" + e.message))
}
btnSearch.addEventListener("click", showSearch);
btnDate.addEventListener("click", showSearch);

function getLives() {
    fetch(`https://6019da707db5390017834974.mockapi.io/artistas`)
        .then(response => {
            response.json()
                .then(data => {
                    showData(data)
                    cleanInput();
                })
        })
        .catch(e => console.log("Deu erro" + e.message))
}

window.addEventListener("load", getLives);
logo.addEventListener("click", getLives);
