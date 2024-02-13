const btnVerSenha = document.getElementById('btnVerSenha')
const inputSenha = document.getElementById('inputSenha')
const container = document.getElementById('container')
const btnEntrar = document.getElementById('entrar')

let vendo = false

const verSenha = () => {

    if(!vendo){
        btnVerSenha.classList.remove('bi-eye-fill')
        btnVerSenha.classList.add('bi-eye-slash-fill')
        inputSenha.type = 'text'
        vendo = true
    }else{
        btnVerSenha.classList.remove('bi-eye-slash-fill')
        btnVerSenha.classList.add('bi-eye-fill')
        inputSenha.type = 'password'
        vendo = false
    }
}

    
    const conferirLogin = () => {

        if(emailLogin && emailLogin === 'teste@teste.com' && senhaLogin && senhaLogin === 'teste123'){
            alert('Login efetuado com sucesso!')
            window.location = 'http://127.0.0.1:5500/home.html';
        }else{
            alert('Preencha todos os campos corretamente!')
        }
    }
    
    let emailLogin = null
    let senhaLogin = null
    
    
    document.getElementById('inputEmail').addEventListener('keyup', (event) => {
        emailLogin = event.target.value
        console.log(emailLogin)
    })
    
    document.getElementById('inputSenha').addEventListener('keyup', (event) => {
    senhaLogin = event.target.value
    console.log(senhaLogin)
    })
    
btnEntrar.addEventListener('click', conferirLogin)
btnVerSenha.addEventListener('click', verSenha)
container.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
    conferirLogin()
    }
})
