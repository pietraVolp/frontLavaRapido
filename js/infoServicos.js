'use strict'

import { getServico } from "./funcoes.js";
const idServico = new URLSearchParams(window.location.search).get('id');
    const servicoAtual = await getServico(idServico);

async function fetchServico(servico) {

    const contanierServico = document.getElementById('contanierServico')
    contanierServico.classList.add(
        'w-[160px]',
        'h-[75px]',
        'p-[15px]',
        

    )
    const card = document.createElement('div')
    card.classList.add(
        'w-[300px]',
        'h-[450px]',
        'p-[15px]',
        'ml-[-78px]',
        'mt-[-70px]',
        'rounded-lg',
        'bg-zinc-700'
       
    )


    const nome = document.createElement('h2');
    nome.textContent = servicoAtual.tipo_servico;
    nome.classList.add(
        'text-teal-500',
        'text-2xl',
        'font-bold',
        'w-[100px]',
        'mt-[10px]'
    )
    

    const descricao = document.createElement('p');
    descricao.textContent = servicoAtual.descricao;
    descricao.classList.add(
        'text-gray-50',
        'text-base',
        'font-bold',
        'w-[280px]',
        'mt-[30px]'

    )

    const preco = document.createElement('p');
    preco.textContent = "Valor: R$ " + servicoAtual.preco.toFixed(2); 
    preco.classList.add(
        'text-teal-500',
        'font-bold',
        'text-xl',
        'mt-[40px]'
    )



    console.log(servicoAtual);

    card.append(nome, descricao, preco)
    contanierServico.appendChild(card)

    const agendar = document.getElementById('agendar')
    agendar.addEventListener('click',()=> {
        console.log(servico);
        window.location.href='./agendamentoServico.html?id='+servico.id_servico
    })

    return card, contanierServico
}

fetchServico(servicoAtual);



