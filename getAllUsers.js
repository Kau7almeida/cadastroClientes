async function getAllUsers() {

    const URL = 'https://685634921789e182b37d58f1.mockapi.io/clientes'

    let response = await fetch(URL)
    let data = await response.json()

    for(let i = 0; i < data.length; i++){

        let cadaCliente = data[i]

        let container = document.querySelector('#tabela-clientes')

        let html = `
            <tr>
                <td>${cadaCliente.id}</td>
                <td id='user_name_${cadaCliente.id}' >${cadaCliente.name}</td>
                <td id='user_email_${cadaCliente.id}' >${cadaCliente.email}</td>
                <td>
                    <button onclick='isOpenModal(${cadaCliente.id})'>Editar</button>
                    <button onclick='deleteUser(${cadaCliente.id})'>Deletar</button>
                </td>
            </tr>
        `

        container.innerHTML += html

    }
    
}

getAllUsers()