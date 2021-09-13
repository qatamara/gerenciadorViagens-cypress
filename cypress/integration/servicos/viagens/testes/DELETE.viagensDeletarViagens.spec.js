import * as DELETEDeletarUmaViagem from '../request/DELETEviagensDeletarViagem.request'
import '../../../../support/commands'

describe('DELETE deve apagar viagem',()=>{
    it('deve conseguir deletar uma viagem',()=>{
        DELETEDeletarUmaViagem.deletarUmaViagem(Cypress.env("emailAdm"),Cypress.env("senhaAdm"),true).should((response)=>{
            expect(response.status).to.eq(204)

        })
    })
})