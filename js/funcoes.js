//**********************************Cliente****************************** */

export async function getClientes(){
    const url = 'http://localhost:8080/v2/lavaRapido/cliente'
    const response = await fetch(url)
    const data = await response.json()
    return data.cliente
 }

 export async function getClientesId (id) {
   console.log(id);
   const url = `http://localhost:8080/v2/lavaRapido/cliente/${id}`
   const response = await fetch(url)
   const data = await response.json()
   console.log(data);
   return data.servico
}

 export async function postCliente (cliente) {
    const url = 'http://localhost:8080/v2/lavaRapido/cliente'
    const options = {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
       body: JSON.stringify (cliente)
    }
    const response = await fetch (url, options)
 
    return response.ok
 }



//********************************Serviços****************************
 export async function getServicos(){
   const url = 'http://localhost:8080/v2/lavaRapido/servico'
   const response = await fetch(url)
   const data = await response.json()
   return data.servico
}

export async function getServico (id) {
   const url = `http://localhost:8080/v2/lavaRapido/servico/${id}`
   const response = await fetch(url)
   const data = await response.json()
   return data.servico[0]
}


/*********************************Veiculos****************************** */



export async function getVeiculoId (id) {
   const url = `http://localhost:8080/v2/lavaRapido/veiculo/${id}`
   const response = await fetch(url)
   const data = await response.json()
   return data.veiculo[0]
}


export async function postVeiculo (veiculo) {
   const url = 'http://localhost:8080/v2/lavaRapido/veiculo'
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify (veiculo)
   }
   const response = await fetch (url, options)

   return response.ok
}