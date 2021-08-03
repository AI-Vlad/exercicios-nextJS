import Titulo from "../../components/Titulo"

export default function usandoTitulo(){

    return(
        <div>
            <Titulo 
            principal = "Página de Cadastro"
            secundario = "Incluir, alterar e excluir coisas"
            />
              <Titulo 
            principal = "Página de Login"
            secundario = "Incluir, alterar e excluir coisas"
            pequeno 
            />
               <Titulo 
            principal = "Página de Login"
            secundario = "Incluir, alterar e excluir coisas"
            
            />
        </div>
    )

}