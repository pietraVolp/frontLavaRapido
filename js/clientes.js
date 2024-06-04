export async function getClientes(){
    const url = 'http://localhost:8080/v2/lavaRapido/cliente'
    const response = await fetch(url)
    const data = await response.json()
 
    data.clientes
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