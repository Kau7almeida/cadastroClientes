async function updateUser() {

    let id = document.querySelector('#clienteIdAtualizar').value
    const URL = 'https://685634921789e182b37d58f1.mockapi.io/clientes/' + id

    let name = document.querySelector('#nomeAtualizar').value
    let email = document.querySelector('#emailAtualizar').value

    let updateClient = {
        "name": name,
        "email": email
    }

    let response = await fetch(URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateClient)
    })

    alert('usuário atualizado com sucesso!')

    isBackModal()

    location.reload();

}

function isOpenModal(id) {
    document.querySelector('#clienteIdAtualizar').value = id

    // pegar o valor da tabela .innerText
    let name = document.querySelector(`#user_name_${id}`).innerText
    let email = document.querySelector(`#user_email_${id}`).innerText

    // pegar os inputs do modal e fazer aparecer
    document.querySelector('#nomeAtualizar').value = name
    document.querySelector('#emailAtualizar').value = email

    document.querySelector('#modalAtualizar').style.display = 'flex'
}

function isBackModal() {
    document.querySelector('#modalAtualizar').style.display = 'none'
}