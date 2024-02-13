const btnVerSenha = document.getElementById('btnVerSenha')
const inputSenha = document.getElementById('inputSenha')

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

btnVerSenha.addEventListener('click', verSenha)