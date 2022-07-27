
//percorra os arquivos com file.files
//atualizar a lista de aquivos aceitos no html, usando o atributo accept. Atualmente ele está apenas como exemplo


let file = document.querySelector('[data-file="bfile"]')
let bodyRow = document.querySelector('[data-file="grupo"]')
let Row = document.querySelector('[data-file="row"]')

file.addEventListener('input', (e) => {
    for (var i = 0; i < file.files.length; ++i) {


        // if (file.files[i] == 'text/plain') {

            let name = file.files.item(i).name;
            console.log("here is a file name: " + name);

            let divRow = document.createElement("div");
            let spanInputg = document.createElement("span");
            let divg = document.createElement("div");
            let text = document.createElement("input");
            let close = document.createElement("button");

            divRow.classList.add("__row")
            spanInputg.classList.add("__span-initial5")

            divg.classList.add("__input-group")

            text.classList.add("form-control", "__input-quite5")
            close.classList.add("btn-close", "__close-inline", "btn-sm")

            text.id = "file-item-descricao" + [i]
            text.value = ""
            text.setAttribute("placeholder", "descreva o documento")

            close.setAttribute("ariaLabel", "close")

            Row.appendChild(divRow)
            divRow.appendChild(spanInputg)
            divRow.appendChild(divg)
            divg.appendChild(text)
            divg.appendChild(close)

            spanInputg.textContent = name
        // } else {
        //     window.alert("arquivo invalido")
        // }
    }
})
