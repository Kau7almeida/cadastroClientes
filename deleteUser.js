async function deleteUser(id) {

    const URL = 'https://685634921789e182b37d58f1.mockapi.io/clientes/' + id

    let response = await fetch(URL, {
        method: 'DELETE'
    })

    alert('usuário deletado com sucesso!')

    location.reload();

}