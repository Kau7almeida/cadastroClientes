async function createUser() {

    let name = document.querySelector('#nome').value
    let email = document.querySelector('#email').value

    const URL = 'https://685634921789e182b37d58f1.mockapi.io/clientes'

    let newClient = {
        "name": name,
		"email": email
    }

    let response = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newClient)
    })

    alert('usuário criado com sucesso!')

    location.reload();
    
}