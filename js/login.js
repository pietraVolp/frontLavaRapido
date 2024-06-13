'use strict'

import { getClientes, getClientesId } from "./funcoes.js"

const button = document.getElementById('entrar')

const validarLogin = async () => {
    
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('senha').value.trim()

    if (email === '' || password === ''){
        alert('Por Favor Preencha todos os Campos !!')
    } else {
        try {
            // Aguardar a resolução da promessa para obter os clientes
            const clientes = await getClientes()

            // Log para depuração
            console.log('Lista de clientes:', clientes);
            console.log('Email digitado:', email);
            console.log('Senha digitada:', password);

            // Verificar se o usuário existe na lista de clientes
            const user = clientes.find(user => {
                console.log('Verificando usuário:', user);
                return user.email === email && user.senha === password
           
            })
            if (user) {
                localStorage.setItem('idC', user.id_cliente)
                // Se o usuário for encontrado, redirecionar para a página home
                window.location.href = '../home.html'
            } else {
                alert('Por favor verifique o email e senha !!')
            }
        } catch (error) {
          console.log(error);
            alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.')
        }
    }
}

button.addEventListener('click', validarLogin)




