import * as PUTviagensAtualizar from '../request/PUTviagensAtualizar.request'

describe('PUT atualizar viagem',()=>{
    it('deve conseguir atualizar uma viagem',()=>{
        PUTviagensAtualizar.atualizarViagem(Cypress.env("emailAdm"), Cypress.env("senhaAdm"),true).should((response)=>{
            expect(response.status).to.eq(204)
           // expect(response.body.data).to.be.not.null
        })

    })
})

