'use strict'

import { getClientes } from "./clientes.js"

const button = document.getElementById('entrar')


const validarLogin = async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('senha').value


    if (email == '' || password == ''){
        alert('Por Favor Preencha todos os Campos !!')
    } else {

        let validaUser = false
        

        validaUser.forEach(user => {
        
            if(user.email == email && user.senha == password){
                validaUser = true
                window.location.href = '../home.html'
            }
        });

        if (!validaUser){
            alert('Por favor verifique o email e senha !!')
        }

        getClientes(validaUser)
    }
    
}

button.addEventListener('click', validarLogin)