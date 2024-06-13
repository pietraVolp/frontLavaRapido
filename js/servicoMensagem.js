const validarMensagem = () => {
    alert('Seu serviço foi enviado com sucesso!!!');
    

    setTimeout(() => {
        window.location.href = '../home.html';
    }, 1000);
};

document.getElementById('button').addEventListener('click', validarMensagem);

