const lista = () => {

    return (

        <div>
            <span id="alert"></span>
            <ul id="lista">
            {populate('')}
            </ul>
        </div>
        

    )

}

function populate(quantidadeLi) {

    let lista = []
    let contador = 0
    let contadorPrimaryKey = 0

    if (!quantidadeLi) {
        
        let message = 'insira um valor'
        return message
    }

    

    for (let index = 0; index <= quantidadeLi; index++) {

      lista.push(

          <li key = {contadorPrimaryKey++}>{contador++} <br /> {contadorPrimaryKey}</li>
          
      )

    }

    contador = 0
    return lista




}

export default lista