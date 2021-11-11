
const users = async () => {
    const apiUrl = await fetch("https://randomuser.me/api/?page=3&results=6");
    const usuarios = await apiUrl.json();
    usersList(usuarios)
}

const usersList = usuarios => {
    let div = '';
    usuarios.results.map((usuario) => {
        div += 
        `
            <div>
                <li class="listNosotros">
                <div class="imgContainer">
                <img src="${usuario.picture.large}" alt="">
                </div>
                <h2>${usuario.name.first} ${usuario.name.last} </h2>
                <p>${usuario.email}</p>
                <p><span>Age:</span> ${usuario.dob.age}</p>
                </li>
            </div>
         `
    })

    document.querySelector('.listadoRow').innerHTML = div;
}

users()
