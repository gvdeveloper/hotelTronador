const apiUrl = "https://jsonplaceholder.typicode.com/users";

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${apiUrl}`)
.then((response) => response.json())
.then((users) => {
    users.forEach((user) => {
      let liName = document.createElement('li');
      liName.appendChild(
          document.createTextNode(`${user.name} ${user.username}`)      
      );

      let liMail = document.createElement('p');
      liMail.appendChild(
          document.createTextNode(`Email: ${user.email}`)      
      );

      let liPhone = document.createElement('p');
      liPhone.appendChild(
          document.createTextNode(`Phone: ${user.phone}`)      
      );

      liName.appendChild(liMail);
      liName.appendChild(liPhone);
      
      ul.appendChild(liName);
    });

    HTMLResponse.appendChild(ul);
});
