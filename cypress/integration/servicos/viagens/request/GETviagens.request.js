//verbo/metodo -endpoint -motivo(request).extensão

/// <reference types="cypress"/>

import * as GETviagens from '../../autenticacao/request/POSTautenticacaoUsuario.request'
import '../../../../support/commands'

function retornarTodasAsViagens(emailUsuario,senhaUsuario,status) {

    return cy.token(emailUsuario, senhaUsuario).then(tokenAdm => {
        console.log(tokenAdm)
        cy.request({
            method: 'GET',
            url: 'v1/viagens',
            headers: {
                //accept: "application/json",
                Authorization: tokenAdm
            },
            failOnStatusCode:status

        })

        /* return GETviagens.fazerLoginUsuario().its('body.data.token').then((tokenAdm)=>{
              console.log(tokenAdm)
               cy.request({
               method:'GET',
               url:'v1/viagens',
               headers:{
                   //accept: "application/json",
                   Authorization:tokenAdm
                  }
      
              
      
              
          })*/
    })

}
export { GETviagens }


export { retornarTodasAsViagens };