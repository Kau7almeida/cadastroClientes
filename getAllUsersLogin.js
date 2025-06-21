async function getAllUsers() {

    const URL = 'https://685634921789e182b37d58f1.mockapi.io/clientes'

    let response = await fetch(URL)
    let data = await response.json()
    return data
    
}

async function login(){

    let data = getAllUsers()
    let email = document.querySelector('#txt_email').value
    
    let filtro = data.filter(item => {
        return email == item.email
    })
    
    if(filtro.length > 0){
        window.location.href = 'index.html'
    } else {
        alert('Não existe login cadastrado!')
    }

}