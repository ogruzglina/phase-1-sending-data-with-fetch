/*const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject);*/

function submitData (name, email) {
    const userData = {
        name: name,
        email: email,
    };
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      };

    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(data => {
            console.log(data.id);
            const pId = document.createElement('p');
            pId.textContent = data.id;
            document.body.appendChild(pId);

            const pName = document.createElement('p');
            pName.textContent = data.name;
            document.body.appendChild(pName);

            const pEmail = document.createElement('p');
            pEmail.textContent = data.email;
            document.body.appendChild(pEmail);

        })
        .catch(error => {
            const pError = document.createElement('p');
            pError.textContent = error.message;
            document.body.appendChild(pError);
        });
  }
  //submitData('Alex', 'alex@gmail.com');
